from django.urls import path
from . import views

urlpatterns = [
    # mng.a-pwr.co.il/  --> Shows Login
    path('', views.loginPageReq, name='loginPageURL'),

    # mng.a-pwr.co.il/api/Login/ --> Login API
    path('api/Login/', views.login_check_api, name='login_check_api'),

    # mng.a-pwr.co.il/dashboard/ --> The Dashboard
    path('manager/', views.m_dashboard, name='m_dashboard'),
    path('api/get-order-list/', views.get_order_list_api, name='get_order_list_api'),
    path('api/get_order_data/', views.get_order_data_api, name='get_order_data_api'),
    path('api/update-order/', views.updateOrder, name='updateOrder'),
]