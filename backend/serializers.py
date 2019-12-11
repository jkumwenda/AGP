from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']
 

class CountrySerializer(serializers.ModelSerializer):
	class Meta:
		model   =   Country
		fields  =   '__all__'  


class CourseSerializer(serializers.ModelSerializer):
	class Meta:
		model   =   Course
		fields  =   '__all__'            


class RatingSerializer(serializers.ModelSerializer):
	class Meta:
		model   =   Rating
		fields  =   '__all__'     


class TypeSerializer(serializers.ModelSerializer):
	class Meta:
		model   =   Type
		fields  =   '__all__'                  


class CourseTypeSerializer(serializers.ModelSerializer):
	class Meta:
		model   =   CourseType
		fields  =   '__all__'                  


class HoleSerializer(serializers.ModelSerializer):
	class Meta:
		model   =   Hole
		fields  =   '__all__'   


class CourseTypeHoleSerializer(serializers.ModelSerializer):
	class Meta:
		model   =   CourseTypeHole
		fields  =   '__all__'   


class ClubSerializer(serializers.ModelSerializer):
	class Meta:
		model   =   Club
		fields  =   '__all__'           


class ClubCourseSerializer(serializers.ModelSerializer):
	class Meta:
		model   =   ClubCourse
		fields  =   '__all__'   


class ProfileSerializer(serializers.ModelSerializer):
	class Meta:
		model   =   Profile
		fields  =   '__all__' 

class ClubProfileSerializer(serializers.ModelSerializer):
	class Meta:
		model  = ClubProfile      
		fields = '__all__'   

class HandicapSerializer(serializers.ModelSerializer):
	class Meta:
		model  = Handicap      
		fields = '__all__'        

class RoleSerializer(serializers.ModelSerializer):
	class Meta:
		model  = Role      
		fields = '__all__'                 

class ProfileRoleSerializer(serializers.ModelSerializer):
	class Meta:
		model  = ProfileRole      
		fields = '__all__'    

class PermissionSerializer(serializers.ModelSerializer):
	class Meta:
		model  = Permission      
		fields = '__all__'

class RolePermissionSerializer(serializers.ModelSerializer):
	class Meta:
		model  = RolePermission      
		fields = '__all__'

class RegistrationDateSerializer(serializers.ModelSerializer):
	class Meta:
		model  = RegistrationDate      
		fields = '__all__'    

class FormatSerializer(serializers.ModelSerializer):
	class Meta:
		model  = Format      
		fields = '__all__'