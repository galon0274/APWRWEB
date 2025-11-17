from django.shortcuts import render, get_object_or_404
from .itemsMng import get_user_list, get_item


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

