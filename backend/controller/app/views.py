from rest_framework.generics import ListAPIView, CreateAPIView
from .serializers import UserSerializer, CreateUserSerializer, SpeciesSerializer, AdminSerializer
from .models import User, Species, Admin
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import generics, status
from django.shortcuts import render
from django.contrib.auth.hashers import make_password, check_password
from pagination import SpeciesLimitOffsetPagination  
import requests
from django.http import JsonResponse, HttpResponseBadRequest
from django.views import View

class UsersListView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer

class CreateUserView(APIView):
    serializer_class = UserSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            email = serializer.validated_data.get('email')
            password = serializer.validated_data.get('password')
            name = serializer.validated_data.get('name')
            is_researcher = serializer.validated_data.get('is_researcher', False)

            hashed_password = make_password(password)

            user = User.objects.create(
                email=email,
                password=hashed_password,
                name=name,
                is_researcher=is_researcher
            )

            return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UserLoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        if not email or not password:
            return Response({'error': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'error': 'Invalid email or password.'}, status=status.HTTP_401_UNAUTHORIZED)

        if check_password(password, user.password):
            # Add the bio to the response so the frontend can store it
            return Response({
                'message': 'Login successful',
                'user': {
                    'user_id': user.user_id,
                    'email': user.email,
                    'name': user.name,
                    'is_researcher': user.is_researcher,
                    'role': 'Researcher' if user.is_researcher else 'Volunteer',
                    'bio': user.bio  
                }
            }, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid email or password.'}, status=status.HTTP_401_UNAUTHORIZED)
        
class UpdateUserProfileView(APIView):
    def put(self, request):
        user_id = request.data.get('user_id')
        bio = request.data.get('bio')
        name = request.data.get('name')
        email = request.data.get('email')

        try:
            user = User.objects.get(user_id=user_id)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        # Update user details
        user.bio = bio
        user.name = name
        user.email = email
        user.save()

        return Response({
            'user_id': user.user_id,
            'email': user.email,
            'name': user.name,
            'is_researcher': user.is_researcher,
            'bio': user.bio
        }, status=status.HTTP_200_OK)

        
class AdminLoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        if not email or not password:
            return Response({'error': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            admin = Admin.objects.get(email=email)
        except Admin.DoesNotExist:
            return Response({'error': 'Invalid email or password.'}, status=status.HTTP_401_UNAUTHORIZED)

        if check_password(password, admin.password):
            return Response({'message': 'Login successful', 'user': {'email': admin.email, 'name': admin.name}}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid email or password.'}, status=status.HTTP_401_UNAUTHORIZED)
        
class SpeciesListView(generics.ListAPIView):
    queryset = Species.objects.all()
    serializer_class = SpeciesSerializer
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ('scientific_name', 'main_common_name')
    ordering_fields = ('scientific_name', 'category')
    ordering = ('scientific_name',)  
    pagination_class = SpeciesLimitOffsetPagination  

    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.query_params.get('category', None)
        if category:
            queryset = queryset.filter(category=category)
        return queryset

class SpeciesDataView(View):
    def get(self, request, *args, **kwargs):
        scientific_name = request.GET.get('scientificName')
        
        if not scientific_name:
            return HttpResponseBadRequest("Missing 'scientificName' query parameter")
        
        api_url = f"https://api.gbif.org/v1/species/search?q={scientific_name}"
        
        response = requests.get(api_url)
        
        if response.status_code != 200:
            return JsonResponse({"error": "Failed to retrieve data"}, status=response.status_code)
        
        data = response.json()
        
        results = data.get('results', [])
        if not results:
            return JsonResponse({"error": "No species data found for the given scientific name"}, status=404)
        
        species = results[0]
        
        species_info = {
            "scientificName": species.get("scientificName", ""),
            "kingdom": species.get("kingdom", ""),
            "phylum": species.get("phylum", ""),
            "class": species.get("class", ""),
            "order": species.get("order", ""),
            "family": species.get("family", ""),
            "genus": species.get("genus", ""),
            "species": species.get("species", ""),
            "threatStatus": species.get("threatStatuses", [{}])[0].get("threatStatus", "") if species.get("threatStatuses") else ""
        }
        
        return JsonResponse(species_info)




