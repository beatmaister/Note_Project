from django.urls import path
from . import views 

app_name = "notebook"
urlpatterns = [
    path('', views.notes , name = "notes"),
]