from django.conf import settings
from django_hosts import host, patterns

host_patterns = patterns('',
    # Sends www traffic to your normal urls
    host(r'www', settings.ROOT_URLCONF, name='www'),

    # Sends mng traffic to the NEW directory inside your shop app
    host(r'mng', 'shop.manager_urls', name='mng'),
)