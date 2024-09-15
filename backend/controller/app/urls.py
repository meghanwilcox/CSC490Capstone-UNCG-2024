from django.urls import path
from .views import UsersListView, CreateUserView, UserLoginView, SpeciesListView, SpeciesDataView, AdminLoginView

urlpatterns = [
    path('users/', UsersListView.as_view(), name='user-list'),
    path('users/create/', CreateUserView.as_view(), name='user-create'),
    path('users/login/', UserLoginView.as_view(), name='user-login'),
    path('admin/login/', AdminLoginView.as_view(), name='admin-login'),
    path('api/species/', SpeciesListView.as_view(), name='species-list'),
    path('species/', SpeciesDataView.as_view(), name='species_data')
]