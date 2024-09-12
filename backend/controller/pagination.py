from rest_framework.pagination import LimitOffsetPagination

class SpeciesLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 1000  # Set the maximum number of items to return
    max_limit = 1000
