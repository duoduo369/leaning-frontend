# -*- coding: utf-8 -*-
import re

django_request_header_prefix = re.compile('^HTTP_')

def get_request_header(request, header_name, default=''):
    """Helper method to get header values from a request's META dict, if present."""
    if request is not None and hasattr(request, 'META') and header_name in request.META:
        return request.META[header_name]
    else:
        return default

def get_request_headers(request):
    return {django_request_header_prefix.sub('', header): value for (header, value) in
            request.META.iteritems() if header.startswith('HTTP_')}
