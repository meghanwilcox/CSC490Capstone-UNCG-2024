from rest_framework.generics import ListAPIView, CreateAPIView
from .serializers import UserSerializer, CreateUserSerializer
from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status
from django.shortcuts import render
from django.contrib.auth.hashers import make_password, check_password

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