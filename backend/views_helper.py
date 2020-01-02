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
        
    def filter_role_permission(self, queryset, permission_code, profile_id):
        if (permission_code and profile_id):
            rolepermission = queryset.select_related(
                'fk_permissionid', 'fk_roleid').filter(fk_permissionid__code=permission_code.replace('"', ''), fk_roleid__pk_roleid=1)
            return rolepermission
        else:
            return queryset
