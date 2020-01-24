from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import *
from .models import *
from .views_helper import *
from rest_framework.response import Response
from rest_framework.decorators import action


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        data = ViewsHelper.filter_test(self, queryset)
        return data


class SlotSizeViewSet(viewsets.ModelViewSet):
    queryset = SlotSize.objects.all()
    serializer_class = SlotSizeSerializer


class SignupViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = User.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['post']


class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

# /COURSE/1/TYPES/
    @action(methods=['GET'],  detail=True)
    def types(self, request, pk=None):
        course = self.get_object()
        serializer = CourseTypeSerializer(
            course.types.all(), many=True
        )
        return Response(serializer.data)


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer


class TypeViewSet(viewsets.ModelViewSet):
    queryset = Type.objects.all()
    serializer_class = TypeSerializer


class CourseTypeViewSet(viewsets.ModelViewSet):
    queryset = CourseType.objects.all()
    serializer_class = CourseTypeSerializer


class HoleViewSet(viewsets.ModelViewSet):
    queryset = Hole.objects.all()
    serializer_class = HoleSerializer


class CourseTypeHoleViewSet(viewsets.ModelViewSet):
    queryset = CourseTypeHole.objects.all()
    serializer_class = CourseTypeHoleSerializer


class ClubViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    serializer_class = ClubSerializer


class ClubCourseViewSet(viewsets.ModelViewSet):
    queryset = ClubCourse.objects.all()
    serializer_class = ClubCourseSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = UserProfileSerializer


class PlayerViewSet(viewsets.ModelViewSet):
    queryset = ProfileRole.objects.all()
    serializer_class = PlayerSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        data = ViewsHelper.filter_player_profile(self, queryset)
        return data


class ClubProfileViewSet(viewsets.ModelViewSet):
    queryset = ClubProfile.objects.all()
    serializer_class = ClubProfileSerializer


class HandicapViewSet(viewsets.ModelViewSet):
    queryset = Handicap.objects.all()
    serializer_class = HandicapSerializer


class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer

    @action(methods=['POST', 'PATCH'], detail=True)
    def permission(self, request, pk=None):
        permission = Permission.objects.get(
            pk_permissionid=request.data['pk_permissionid'])
        role = self.get_object()

        if request.method == 'POST':
            role.Permissions.add(permission)
        elif request.method == 'PATCH':
            role.Permissions.remove(permission)
        role.save()

        serializer = RoleSerializer(role, many=False)
        return Response(serializer.data)


class GenderViewSet(viewsets.ModelViewSet):
    queryset = Gender.objects.all()
    serializer_class = GenderSerializer


class ProfileGenderViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = Gender.objects.all()
    serializer_class = GenderSerializer


class ProfileRoleViewSet(viewsets.ModelViewSet):
    queryset = ProfileRole.objects.all()
    serializer_class = ProfileRoleSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        data = ViewsHelper.filter_profile_role(
            self, queryset, self.request.query_params.get('profile_id'))
        return data


class PermissionViewSet(viewsets.ModelViewSet):
    queryset = Permission.objects.all()
    serializer_class = PermissionSerializer


class RolePermissionViewSet(viewsets.ModelViewSet):
    queryset = RolePermission.objects.all()
    serializer_class = RolePermissionSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        data = ViewsHelper.filter_role_permission(
            self, queryset, self.request.query_params.get('permission'),
            self.request.query_params.get('profile_id'))
        return data


class RegistrationDateViewSet(viewsets.ModelViewSet):
    queryset = RegistrationDate.objects.all()
    serializer_class = RegistrationDateSerializer


class FormatViewSet(viewsets.ModelViewSet):
    queryset = Format.objects.all()
    serializer_class = FormatSerializer


class DrawTypeViewSet(viewsets.ModelViewSet):
    queryset = DrawType.objects.all()
    serializer_class = DrawTypeSerializer


class RegisterViewSet(viewsets.ModelViewSet):
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer


class SlotViewSet(viewsets.ModelViewSet):
    queryset = Slot.objects.all()
    serializer_class = SlotSerializer


class InformationViewSet(viewsets.ModelViewSet):
    queryset = Information.objects.all()
    serializer_class = InformationSerializer


class FieldViewSet(viewsets.ModelViewSet):
    queryset = Field.objects.all()
    serializer_class = FieldSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class PublicEventViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventTypeViewSet(viewsets.ModelViewSet):
    queryset = EventType.objects.all()
    serializer_class = EventTypeSerializer


class EventFormatViewSet(viewsets.ModelViewSet):
    queryset = EventFormat.objects.all()
    serializer_class = EventFormatSerializer


class FieldViewSet(viewsets.ModelViewSet):
    queryset = Field.objects.all()
    serializer_class = FieldSerializer


class GameViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = GameSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        data = ViewsHelper.filter_games(
            self, queryset, self.request.query_params.get('end_date'),
        )
        return data


class ScoreViewSet(viewsets.ModelViewSet):
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer
