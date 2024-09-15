from django.db import models

class User(models.Model):
    user_id = models.AutoField(primary_key=True)    
    email = models.CharField(max_length=50, unique=True, null=False,)
    password = models.CharField(max_length=128, null=False,)
    name = models.CharField(max_length=100, null=False,)
    is_researcher = models.BooleanField(null=False, default=False)

class Admin(models.Model):
    admin_id = models.AutoField(primary_key=True)   
    email = email = models.CharField(max_length=50, unique=True, null=False,)
    password = models.CharField(max_length=128, null=False,)
    name = models.CharField(max_length=100, null=False,)

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


