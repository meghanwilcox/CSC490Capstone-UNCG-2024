from django.urls import path
from .views import UsersListView, CreateUserView

urlpatterns = [
    path('users/', UsersListView.as_view(), name='user-list'),
    path('users/create/', CreateUserView.as_view(), name='user-create'),
]