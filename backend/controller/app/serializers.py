from rest_framework import serializers
from .models import User, Species

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_id', 'email', 'password', 'name', 'is_researcher')

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password', 'name')
        extra_kwargs = {'password': {'write_only': True}}  

class SpeciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Species
        fields = '__all__'  # Or specify fields explicitly if needed