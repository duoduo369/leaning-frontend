# -*- coding: utf-8 -*-
#from rest_framework.views import View
#from rest_framework.generics import GenericAPIView as View
from django.views.generic import View
from django.conf import settings
from simple_server.utils import get_request_header, get_request_headers
from urlparse import urljoin
from django.http.response import HttpResponse
from wsgiref.util import is_hop_by_hop

import requests


class CrossDomainAjaxView(View):

    def transform_request_data(self, request, request_url):
        cross_domain_host = get_request_header(request, 'cross_domain_host') or settings.CROSS_DOMAIN_HOST
        url = urljoin(cross_domain_host, request_url)
        headers = get_request_headers(request)
        data = dict(request.GET)
        data.update(dict(request.POST))
        request_data = {
            'cross_domain_host': cross_domain_host,
            'url': url,
            'data': data,
            'headers': headers,
        }
        return request_data

    def transform_response(self, requests_response):
        response = HttpResponse(requests_response.content, content_type=
                requests_response.headers.get('Content-Type', 'text/plain'))
        return response


    def get(self, request, request_url):
        request_data = self.transform_request_data(request, request_url)
        response = requests.get(request_data['url'], request_data['data'])
                #headers=request_data['headers'])
        print response.content
        return self.transform_response(response)
