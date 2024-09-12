from rest_framework.generics import ListAPIView, CreateAPIView
from .serializers import UserSerializer, CreateUserSerializer, SpeciesSerializer
from .models import User, Species
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

            # Hash the password before storing it
            hashed_password = make_password(password)

            # Create the new user
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
            # Find the user by email
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'error': 'Invalid email or password.'}, status=status.HTTP_401_UNAUTHORIZED)

        # Check if the password is correct
        if check_password(password, user.password):
            return Response({'message': 'Login successful', 'user': {'email': user.email, 'name': user.name, 'is_researcher': user.is_researcher}}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid email or password.'}, status=status.HTTP_401_UNAUTHORIZED)
        
class SpeciesListView(generics.ListAPIView):
    queryset = Species.objects.all()
    serializer_class = SpeciesSerializer
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ('scientific_name', 'main_common_name')
    ordering_fields = ('scientific_name', 'category')
    ordering = ('scientific_name',)  # Default ordering
    pagination_class = SpeciesLimitOffsetPagination  # Use the custom pagination class

    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.query_params.get('category', None)
        if category:
            queryset = queryset.filter(category=category)
        return queryset

class SpeciesDataView(View):
    def get(self, request, *args, **kwargs):
        # Get the scientific name from query parameters
        scientific_name = request.GET.get('scientificName')
        
        if not scientific_name:
            return HttpResponseBadRequest("Missing 'scientificName' query parameter")
        
        # Construct the API URL with the provided scientific name
        api_url = f"https://api.gbif.org/v1/species/search?q={scientific_name}"
        
        # Fetch data from the external API
        response = requests.get(api_url)
        
        if response.status_code != 200:
            return JsonResponse({"error": "Failed to retrieve data"}, status=response.status_code)
        
        # Process the JSON response
        data = response.json()
        
        # Extract the first result from the list of species
        results = data.get('results', [])
        if not results:
            return JsonResponse({"error": "No species data found for the given scientific name"}, status=404)
        
        species = results[0]
        
        # Extract the required fields with default empty values if not present
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
        
        # Return the species data as JSON response
        return JsonResponse(species_info)




