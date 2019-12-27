from django.conf import settings
from django.http import HttpResponse, HttpResponseRedirect
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import APIException
from .models import *

class ViewsHelper:
    def filter_profile_role(self, queryset, profile_id):
        if profile_id is not None:
            profile_role_result = queryset.filter(fk_profileid=profile_id)
            if profile_role_result.exists():
                return profile_role_result
            else:
                raise APIException("User profile has not roles")
        else:
            return queryset
        
