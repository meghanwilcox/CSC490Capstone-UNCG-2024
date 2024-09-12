# Generated by Django 5.1 on 2024-09-06 17:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.CharField(max_length=50, unique=True)),
                ('password', models.CharField(max_length=50)),
                ('name', models.CharField(max_length=100)),
                ('isResearcher', models.BooleanField(default=False)),
            ],
        ),
    ]