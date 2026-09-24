from django.urls import path
from .views import health, eventos


urlpatterns = [
    path("health/", health),
    path("eventos/", eventos),
]