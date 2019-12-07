from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import * 
from .models import * 


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
 

class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer  


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

class ClubProfileViewSet(viewsets.ModelViewSet):
    queryset= ClubProfile.objects.all()
    serializer_class= ClubProfileSerializer

class HandcapViewSet(viewsets.ModelViewSet):
    queryset= Handcap.objects.all()
    serializer_class= HandcapSerializer

class RoleViewSet(viewsets.ModelViewSet):
    queryset= Role.objects.all()
    serializer_class= RoleSerializer

class ProfileRoleViewSet(viewsets.ModelViewSet):
    queryset= ProfileRole.objects.all()
    serializer_class= ProfileRoleSerializer

class PermissionViewSet(viewsets.ModelViewSet):
    queryset= Permission.objects.all()
    serializer_class= PermissionSerializer

class RolePermissionViewSet(viewsets.ModelViewSet):
    queryset= RolePermission.objects.all()
    serializer_class= RolePermissionSerializer


class RegistrationDateViewSet(viewsets.ModelViewSet):
    queryset= RegistrationDate.objects.all()
    serializer_class= RegistrationDateSerializer


class FormatViewSet(viewsets.ModelViewSet):
    queryset= Format.objects.all()
    serializer_class= FormatSerializer