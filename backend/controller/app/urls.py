from django.urls import path
from .views import UsersListView, CreateUserView, UserLoginView, SpeciesListView, SpeciesDataView, AdminLoginView, UpdateUserProfileView, AddSightingView, SightingListView, IsAuthenticatedView, predict_image

urlpatterns = [
    path('users/', UsersListView.as_view(), name='user-list'),
    path('users/create/', CreateUserView.as_view(), name='user-create'),
    path('users/login/', UserLoginView.as_view(), name='user-login'),
    path('users/update-profile/', UpdateUserProfileView.as_view(), name='update-profile'),  
    path('admin/login/', AdminLoginView.as_view(), name='admin-login'),
    path('api/species/', SpeciesListView.as_view(), name='species-list'),
    path('species/', SpeciesDataView.as_view(), name='species_data'),
    path('api/sightings/add/', AddSightingView.as_view(), name='add_sighting'),
    path('api/sightings/', SightingListView.as_view(), name='list_sightings'),
    path('api/auth/check/', IsAuthenticatedView.as_view(), name='check_auth'),
    path('api/predict-image/', predict_image, name='predict_image')
]
