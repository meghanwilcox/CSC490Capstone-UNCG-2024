from rest_framework.generics import ListAPIView, CreateAPIView
from .serializers import UserSerializer, CreateUserSerializer
from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status
from django.shortcuts import render
from django.contrib.auth.hashers import make_password  # Import password hashing utility

class UsersListView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CreateUserView(APIView):
    serializer_class = UserSerializer

    # Handle GET request to provide some information or response
    def get(self, request, format=None):
        return Response({"message": "Use a POST request to create a new user."}, status=status.HTTP_200_OK)

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