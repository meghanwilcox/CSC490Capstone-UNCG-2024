from django.db import models

# Create your models here.
class User(models.Model):
    user_id = models.AutoField(primary_key=True)    
    email = models.CharField(max_length=50, unique=True, null=False,)
    password = models.CharField(max_length=128, null=False,)
    name = models.CharField(max_length=100, null=False,)
    is_researcher = models.BooleanField(null=False, default=False)


