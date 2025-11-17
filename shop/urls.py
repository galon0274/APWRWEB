from django.urls import path
from . import views

urlpatterns = [
    path('', views.shop_main, name='shop_main'),
    path('itemPage/<int:pid>/', views.item_detail_view, name='item_detail'),
    path('testit/', views.testit, name='testit'),
]