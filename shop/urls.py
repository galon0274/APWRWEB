from django.urls import path
from . import views

urlpatterns = [
    path('', views.shop_main, name='shop_main'),
    path('testit/', views.testit, name='testit'),
]