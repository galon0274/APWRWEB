from django.shortcuts import render, get_object_or_404

# Shop Main Page View
def shop_main(request):
    return render(request, 'shop_main.html')


# Shop Main Page View
def testit(request):
    return render(request, 'testit.html')

