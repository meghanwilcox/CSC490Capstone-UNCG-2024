from django.urls import path
from .views import UsersListView, CreateUserView, UserLoginView

urlpatterns = [
    path('users/', UsersListView.as_view(), name='user-list'),
    path('users/create/', CreateUserView.as_view(), name='user-create'),
    path('users/login/', UserLoginView.as_view(), name='user-login'),
]