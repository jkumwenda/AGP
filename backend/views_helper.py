from django.conf import settings
from django.http import HttpResponse, HttpResponseRedirect
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import APIException
from .models import *
from datetime import datetime


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
            roles = ProfileRole.objects.filter(fk_profileid = profile_id)
            for role in roles:
                rolepermission = queryset.filter(fk_permissionid__code=permission_code, fk_roleid__pk_roleid=role.fk_roleid.pk_roleid)
                if rolepermission:
                    raise True
                else:
                    return 'False'      
            return rolepermission
        else:
            return queryset

    def filter_player_profile(self, queryset):
        player_profile = queryset.select_related(
            'fk_roleid').filter(fk_roleid__role='Player')
        if player_profile is not None:
            return player_profile
        else:
            return APIException('Players not found')

    def filter_test(self, queryset):
        r = {'queryset': queryset, 'status': 'Test'}
        raise APIException(r)

    def filter_games(self, queryset, end_date):
        games = queryset.order_by(
            '-end_date').filter(end_date__lt=datetime.now())
        return games

    def filter_scores(self, queryset, eventId, profileId):
        if(eventId and profileId):
            return queryset.filter(fk_eventid=eventId, fk_profileid=profileId)
        if(profileId):
            return queryset.filter(fk_profileid=profileId)
        return queryset

    def filter_events(self, queryset, profileId):
        if profileId is not None:
            registers = Register.objects.filter(fk_profileid=profileId)
            tournaments = [
                register.fk_slotid.fk_eventid for register in registers]
            return tournaments

        return queryset
    
    def filter_event_course_types(self,queryset, eventId, genderId):
        if(eventId and genderId):
            return queryset.filter(fk_genderid=genderId, fk_eventid=eventId)
        return queryset

    def filter_user_profile(self, queryset, username): 
        if username is not None:
            user_profile_result = queryset.filter(user__username=username)
            if user_profile_result.exists():
                return user_profile_result
            else:
                raise APIException("User profile not found")
        else:
            return queryset     
    
    def getProfilePermissionCodes(self, profile):
        pass

    def checkProfilePermission(self,profile,code):
        pass