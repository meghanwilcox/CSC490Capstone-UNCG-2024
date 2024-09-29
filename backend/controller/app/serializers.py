from rest_framework import serializers
from .models import User, Species, Admin, Sighting

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_id', 'email', 'password', 'name', 'is_researcher')

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('admin_id', 'email', 'password', 'name')

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password', 'name')
        extra_kwargs = {'password': {'write_only': True}}  

class SpeciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Species
        fields = '__all__'  

class SightingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sighting
        fields = ['id', 'species_name', 'date_seen', 'latitude', 'longitude', 'photo']  # Removed 'sighted_by'
        # No need for read_only_fields since it's not included anymore

    def create(self, validated_data):
        # You can still use request context if needed for other purposes, but not for sighted_by
        return super().create(validated_data)
