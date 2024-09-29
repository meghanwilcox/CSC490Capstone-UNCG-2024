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
import csv
import os
from django.conf import settings
from django.contrib.auth import login


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
            # Log the user in and create a session
            request.session['user_id'] = user.user_id  # Manually store user_id in the session

            # If you are using Django's built-in login system, you can also call:
            login(request, user)  # This will handle session creation

            print(f"User logged in: {user.email} (ID: {user.user_id})")

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
        
class SpeciesListView(APIView):
    def get(self, request, *args, **kwargs):
        species_data = []
        csv_file_path = "C:\\Users\\megwi\\UNCG\\Fall 2024\\CSC490\\Capstone-Wildguard\\CSC490Capstone-UNCG-2024\\backend\\controller\\app\\species_list.csv"
        
        try:
            with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
                reader = csv.DictReader(csvfile)
                for index, row in enumerate(reader):
                    # Modify this if you want to filter or select specific records
                    species_info = {
                        "taxonid": row["taxonid"],
                        "kingdom_name": row["kingdom_name"],
                        "phylum_name": row["phylum_name"],
                        "class_name": row["class_name"],
                        "order_name": row["order_name"],
                        "family_name": row["family_name"],
                        "genus_name": row["genus_name"],
                        "scientific_name": row["scientific_name"],
                        "taxonomic_authority": row["taxonomic_authority"],
                        "infra_rank": row["infra_rank"],
                        "infra_name": row["infra_name"],
                        "population": row["population"],
                        "category": row["category"],
                        "main_common_name": row["main_common_name"]
                    }
                    species_data.append(species_info)

            return JsonResponse(species_data, safe=False)
        except FileNotFoundError:
            return JsonResponse({"error": "CSV file not found"}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

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




