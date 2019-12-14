from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.relations import HyperlinkedIdentityField
from .models import *


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


class GenderSerializer(serializers.ModelSerializer):				
	class Meta:
		model   =   Gender
		fields = '__all__'	


class ProfileSerializer(serializers.ModelSerializer):	
	# gender = GenderSerializer(read_only=True)
	# fk_genderid = serializers.PrimaryKeyRelatedField(
    #                     queryset=Gender.objects.all(),
    #                     write_only=True, source='gender')	    			
	class Meta:
		model   =   Profile
		fields = '__all__'	
  

class UserSerializer(serializers.ModelSerializer):
	password = serializers.CharField(write_only=True)
	userprofile = ProfileSerializer(required=False)
	class Meta:
		model 	= 	User
		fields = ('id','first_name', 'last_name', 'email', 'username', 'password', 'userprofile')	
	
	def create(self, validated_data, instance=None):
		profile_data = validated_data.pop('userprofile')
		user = User.objects.create(**validated_data)
		user.set_password(validated_data['password'])
		user.save()
		Profile.objects.update_or_create(user=user,**profile_data)
		return user	
		

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


class RegisterSerializer(serializers.ModelSerializer):
	class Meta:
		model  = Register      
		fields = '__all__'


class SlotSerializer(serializers.ModelSerializer):
	class Meta:
		model  = Slot      
		fields = '__all__'

		
class EventSerializer(serializers.ModelSerializer):
	class Meta:
		model  = Event      
		fields = '__all__'


class EventTypeSerializer(serializers.ModelSerializer):
	class Meta:
		model  = EventType      
		fields = '__all__'
