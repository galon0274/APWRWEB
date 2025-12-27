from django.shortcuts import render, get_object_or_404


from django.http import HttpResponse
from django.template import loader

import json
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_protect
from django.urls import reverse
from django.db import transaction


from .itemsMng import get_user_list, get_item
from .gFunc import get_new_order_num
from shop.models import Order, OrderItem, Product


def loginPageReq(request):
    """
    :param request:
    :return:
    """
    return render(request, 'apwrLogIn.html')
@require_POST
@csrf_protect
def login_check_api(request):
    VALID_USER = 'Amit'
    VALID_PASS = 'amit2001'
    try:
        # Load the JSON body
        data = json.loads(request.body)
        # items_array = data.get('items',[])
        # personName = data.get('personName')
        username = data.get('username')
        password = data.get('password')

        if username == VALID_USER and password == VALID_PASS:
            manager_url = reverse('m_dashboard')
            return JsonResponse({
                'status': 'success',
                'redirect_url': manager_url
            })
        else:
            return JsonResponse({
                'status': 'error',
                'messaage': 'Invalid Username or Password.'
            }, status=401)

    except Exception as e:
        return JsonResponse({'status': 'error', 'message': f'server error:{e}'}, status=500)


@require_POST
@csrf_protect
def get_order_data_api(request):
    # Load the JSON body
    data = json.loads(request.body)
    try:
        order = Order.objects.get(order_num=data)
        order_dict = {
            'order_num': order.order_num,
            'order_date': order.order_date,
            'order_service_type': order.order_service_type,
            'full_name': order.full_name,
            'email_add': order.email_add,
            'cell_num': order.cell_num,
            'street_name': order.street_name,
            'house_num': order.house_num,
            'city': order.city,
            'invoice_num': order.invoice_num,
            'order_status': order.order_status,
            'stage': order.stage,
            'total_cost': order.total_cost,
            'items': list(order.items.values('product', 'quantity', 'price_at_order'))
        }
        return JsonResponse({
            'status': 'success',
            'order_data': order_dict
        })

    except Order.DoesNotExist:
            return JsonResponse({'error': "Not Found"}, Status = 404)


def get_order_list_api(request):
    orders_queryset = Order.objects.prefetch_related('items').all().order_by('-order_date')
    orders_data = []
    for order in orders_queryset:
        order_dict = {
            'order_num': order.order_num,
            'order_date': order.order_date,
            'order_service_type': order.order_service_type,
            'full_name': order.full_name,
            'email_add': order.email_add,
            'cell_num': order.cell_num,
            'street_name': order.street_name,
            'house_num': order.house_num,
            'city': order.city,
            'invoice_num': order.invoice_num,
            'order_status': order.order_status,
            'stage': order.stage,
            'total_cost': order.total_cost,
            'items': list(order.items.values('product', 'quantity','price_at_order'))
        }
        orders_data.append(order_dict)

    return JsonResponse({
                'status': 'success',
                'orders_list': orders_data
            })


def m_dashboard(request):
    return render(request, 'apwrMang.html')


@require_POST
@csrf_protect
def createOrder(request):
    try:
        # Load the JSON body
        data = json.loads(request.body)
        items_array = data.get('items', [])
        with transaction.atomic():
            personName = data.get('personName')
            mailAdd = data.get('mailAdd')
            cellphone = data.get('cellphone')
            streetAdd = data.get('streetAdd')
            streetNumAdd = data.get('streetNumAdd')
            cityAdd = data.get('cityAdd')
            # for item in items_array:
            #   f1 = item.get('dsc')
            #   f2 = item.get('price')

            new_order_num = get_new_order_num()
            # counters = GCounters.objects.all()[0]
            # current_count = counters.order_num_count
            new_order = Order.objects.create(
                order_num = new_order_num,
                full_name = personName,
                email_add = mailAdd,
                cell_num = cellphone,
                street_name = streetAdd,
                house_num = streetNumAdd,
                city = cityAdd,
                order_status = 'PENDING',
                stage = 'חדש'
            )
            total_cost = 0

            for co_item in items_array:
                new_item = OrderItem.objects.create(
                    order=new_order,
                    product=co_item['dsc'],
                    quantity=1,
                    price_at_order=co_item['price']
                )
                total_cost += co_item['price']
                new_item.save()

            new_order.total_cost = total_cost
            new_order.save()

        # Send a success response back to the JavaScript
        return JsonResponse({
            'status': 'success',
            'confirmation_num': new_order_num
        }, status = 201)
    except Exception as e:
        # Log the error for yourself in DigitalOcean logs
        print(f"Order Error: {str(e)}")
        return JsonResponse({
            'status': 'error',
            'message': 'Failed to process order. Please try again.'
        }, status=500)


def order_success(request, order_id):
    return render(request, 'order_success.html', {
        'confirmation_num': order_id
    })

@require_POST
@csrf_protect
def updateOrder(request):
    try:
        # Load the JSON body
        data = json.loads(request.body)
        order_num = data.get('order_num')
        personName = data.get('personName')
        mailAdd = data.get('mailAdd')
        cellphone = data.get('cellphone')
        streetAdd = data.get('streetAdd')
        streetNumAdd = data.get('streetNumAdd')
        cityAdd = data.get('cityAdd')
        # order_stage = data.get('stage')
        actionSel = data.get('actionSel')

        order = Order.objects.get(order_num=order_num)

        if actionSel == 'opt1':
            # stage approval
            order_stage = order.stage
            if order_stage == '':
                order.stage = 'חדש'
            elif order_stage == 'חדש':
                order.stage = 'נדרש סקר'
            elif order_stage == 'נדרש סקר':
                order.stage = 'מאושר לרכש'
            elif order_stage == 'מאושר לרכש':
                order.stage = 'מאושר להתקנה'
            elif order_stage == 'מאושר להתקנה':
                order.stage = 'בוצע'
            elif order_stage == 'בוצע':
                order.stage = 'ארכיב'
            else:
                order.stage = 'חדש'

            order.save()
            manager_url = reverse('m_dashboard')
            return JsonResponse({
                'status': 'success',
                'redirect_url': manager_url,
                'message': f'Order {order_num} Stage was updated successfully'
            })

        elif actionSel == 'opt2':
            # update order data
            order.full_name = personName
            order.email_add = mailAdd
            order.cell_num = cellphone
            order.street_name = streetAdd
            order.house_num = streetNumAdd
            order.city = cityAdd

            order.save()
            manager_url = reverse('m_dashboard')
            return JsonResponse({
                'status': 'success',
                'redirect_url': manager_url,
                'message': f'Order {order_num} updated successfully'
            })

        elif actionSel == 'opt3':
            # Delete the selected order
            order.delete()
            manager_url = reverse('m_dashboard')
            return JsonResponse({
                'status': 'success',
                'redirect_url': manager_url,
                'message': f'Order {order_num} was deleted'
            })

        else:
            # Nothing to do
            test = 'temp'

    except Exception as e:
        return JsonResponse({'status': 'error', 'message': 'failed to update order.'}, status=500)


# Shop Main Page View
def shop_main(request):
    pList = []
    pList = get_user_list('main_shop')
    # pList = [{1:1},{1:1}]
    context = {
        'pList': pList,
    }
    return render(request, 'shop_main.html', context)


def item_detail_view(request, pid):
    # Fetch the product object using the ID, or return a 404 error if not found
    # product = get_object_or_404(Product, pk=pid)

    dItem = get_item(pid)
    # pList = [{1:1},{1:1}]
    context = {
        'dItem': dItem,
    }
    return render(request, 'itemPage.html', context)


# Tester Page View
def testit(request):
    return render(request, 'testit.html')

