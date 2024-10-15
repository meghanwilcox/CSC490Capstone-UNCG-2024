from django.apps import AppConfig
from .load_model import get_model, get_labels


class AppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'app'

    def ready(self):
        self.model = get_model()
        print('Model loaded successfully.')
        self.labels = get_labels()
        print('Labels loaded successfully.')