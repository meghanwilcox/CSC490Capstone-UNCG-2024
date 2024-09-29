# Generated by Django 5.1 on 2024-09-28 01:56

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_alter_species_options_user_last_login'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Sighting',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('species_name', models.CharField(max_length=100)),
                ('date_seen', models.DateField(default=django.utils.timezone.now)),
                ('latitude', models.FloatField()),
                ('longitude', models.FloatField()),
                ('photo', models.ImageField(blank=True, null=True, upload_to='sightings_photos/')),
                ('sighted_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]