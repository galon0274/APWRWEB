from django.db import models


# Create your models here.
class GCounters(models.Model):
    order_num_count = models.PositiveIntegerField(default=0)
    cataloge_num_count = models.PositiveIntegerField(default=0)
    main_page_count = models.PositiveIntegerField(default=0)

    def __str__(self):
        return "Global Counters"


class Product(models.Model):
    """

    """
    name = models.CharField(max_length=100)
    partNum = models.CharField(max_length=100)
    price = models.PositiveIntegerField(default=0)
    def __str__(self):
        return self.name


class Order(models.Model):
    """

    """
    order_num = models.PositiveIntegerField(unique=True)
    order_date = models.DateTimeField(auto_now_add=True)
    order_service_type = models.CharField(max_length=128, null=True, blank=True)
    full_name = models.CharField(max_length=128, null=True, blank=True)
    email_add = models.CharField(max_length=128, null=True, blank=True)
    cell_num = models.CharField(max_length=128, null=True, blank=True)
    street_name = models.CharField(max_length=128, null=True, blank=True)
    house_num = models.CharField(max_length=128, null=True, blank=True)
    city = models.CharField(max_length=128, null=True, blank=True)
    invoice_num = models.PositiveIntegerField(unique=True, null=True, blank=True)
    stage = models.CharField(max_length=128, null=True, blank=True)
    STATUS_CHIOCES = [
        ('PENDING','pending'),
        ('DELIVERED','delivered'),
    ]
    order_status = models.CharField(
        max_length=20,
        choices=STATUS_CHIOCES,
        default='PENDING',
    )
    total_cost = models.DecimalField(max_digits=10,decimal_places=2,default=0.00)
    def __str__(self):
        return f"Order#{self.order_num} - {self.full_name}"


class OrderItem(models.Model):
    """
    """
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    # product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    product = models.CharField(max_length=255, null=True, blank=True)
    quantity = models.PositiveIntegerField(default=1)
    price_at_order = models.DecimalField(max_digits=10, decimal_places=2)
    def __str__(self):
        return f"{self.quantity}x{self.product.name if self.product else 'unknown'} in order {self.order.order_num}"
