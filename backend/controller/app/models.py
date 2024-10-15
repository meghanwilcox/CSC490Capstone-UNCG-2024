from django.db import models
from django.conf import settings
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_researcher', True)
        return self.create_user(email, password, **extra_fields)


class User(AbstractBaseUser):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=50, unique=True, null=False)
    name = models.CharField(max_length=100, null=False)
    is_researcher = models.BooleanField(default=False)
    bio = models.TextField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    objects = UserManager()

    def __str__(self):
        return self.email

# class User(models.Model):
#     user_id = models.AutoField(primary_key=True)
#     email = models.CharField(max_length=50, unique=True, null=False)
#     password = models.CharField(max_length=128, null=False)
#     name = models.CharField(max_length=100, null=False)
#     is_researcher = models.BooleanField(null=False, default=False)
#     bio = models.TextField(blank=True, null=True)
    
#     # Track the last time the user logged in
#     last_login = models.DateTimeField(auto_now=True)  # This field will update each time the user logs in
    
class Admin(models.Model):
    admin_id = models.AutoField(primary_key=True)   
    email = models.CharField(max_length=50, unique=True, null=False,)
    password = models.CharField(max_length=128, null=False,)
    name = models.CharField(max_length=100, null=False,)

from django.db import models

class Species(models.Model):
    taxonid = models.IntegerField(primary_key=True)
    kingdom_name = models.CharField(max_length=100)
    phylum_name = models.CharField(max_length=100)
    class_name = models.CharField(max_length=100)
    order_name = models.CharField(max_length=100)
    family_name = models.CharField(max_length=100)
    genus_name = models.CharField(max_length=100)
    scientific_name = models.CharField(max_length=255)
    taxonomic_authority = models.CharField(max_length=255)
    infra_rank = models.CharField(max_length=100, blank=True, null=True)
    infra_name = models.CharField(max_length=100, blank=True, null=True)
    population = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=50)
    main_common_name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        db_table = 'species'  
        managed = False  

class Sighting(models.Model):
    id = models.AutoField(primary_key=True)
    species_name = models.CharField(max_length=100)
    # sighted_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)  # Links to the logged-in user
    date_seen = models.DateField(default=timezone.now)  # Defaults to the current date
    latitude = models.FloatField()  # Latitude for location
    longitude = models.FloatField()  # Longitude for location
    photo = models.ImageField(upload_to='sightings_photos/', blank=True, null=True)  # Optional photo

    def __str__(self):
        return f'{self.species_name} '

