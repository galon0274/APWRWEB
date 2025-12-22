from django.db.models import F
from shop.models import GCounters
#
def get_new_order_num():

    counter = GCounters.objects.select_for_update().get(pk=1)
    counter.order_num_count = F('order_num_count') + 1
    counter.save()
    counter.refresh_from_db()

    return counter.order_num_count