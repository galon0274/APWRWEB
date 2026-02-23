from django.urls import path
from . import views

urlpatterns = [
    path('', views.shop_main, name='shop_main'),
    path('itemPage/<int:pid>/', views.item_detail_view, name='item_detail'),
    path('testit/', views.testit, name='testit'),
    path('api/create-order/', views.createOrder, name='createOrder'),
    # path('api/update-order/', views.updateOrder, name='updateOrder'),
    # path('api/get-order-list/', views.get_order_list_api, name='get_order_list_api'),
    # path('api/get_order_data/', views.get_order_data_api, name='get_order_data_api'),
    path('order-success/<int:order_id>/', views.order_success, name='order_success'),
    # path('api/get_order_list/', views.get_order_list_api, name='get_order_list_api'),
    # path('apwrLogin/', views.loginPageReq, name='loginPageURL'),
    # path('api/Login/', views.login_check_api, name='login_check_api'),
    # path('manager/', views.m_dashboard, name='m_dashboard'),

]