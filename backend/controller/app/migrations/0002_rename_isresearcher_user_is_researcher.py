# Generated by Django 5.1 on 2024-09-06 17:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='isResearcher',
            new_name='is_researcher',
        ),
    ]