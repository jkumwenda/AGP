from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.relations import HyperlinkedIdentityField
from .models import *
from .serializer_helper import *

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'


class DrawTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = DrawType
        fields = '__all__'
        
        
class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = '__all__'
        

class CourseSerializer(serializers.ModelSerializer):
    country = CountrySerializer(source="pk_countryid", read_only=True)
    rating= RatingSerializer(many=True, read_only=True)
    pk_countryid = serializers.PrimaryKeyRelatedField(
        queryset=Country.objects.all(), write_only=True
    )

    class Meta:
        model = Course
        fields = ['pk_courseid', 'course', 'pk_countryid', 'country', 'rating']


class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = '__all__'


class CourseTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseType
        fields = '__all__'


class HoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hole
        fields = '__all__'


class CourseTypeHoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseTypeHole
        fields = '__all__'


class ClubSerializer(serializers.ModelSerializer):
    class Meta:
        model = Club
        fields = '__all__'


class ClubCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClubCourse
        fields = '__all__'


class GenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gender
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    userprofile = ProfileSerializer(required=False)

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email',
                  'username', 'password', 'userprofile')

    def create(self, validated_data, instance=None):
        profile_data = validated_data.pop('userprofile')
        user = User.objects.create(**validated_data)
        
        # if validated_data('password') is not None:
        #     password = validated_data('password')
        # else:    
        password = SerializerHelper.randomPassword(self)
        user.set_password(password)
        user.save()
        Profile.objects.update_or_create(user=user, **profile_data)
        return user
    
    
class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    user_id = serializers.PrimaryKeyRelatedField(
        queryset = User.objects.all(),
        write_only=True, source='user')
    
    fk_genderid = GenderSerializer(read_only=True)
    gender_id = serializers.PrimaryKeyRelatedField(
        queryset=Gender.objects.all(),
        write_only=True, source='gender')
    class Meta:
        model = Profile
        fields = '__all__'


class ClubProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClubProfile
        fields = '__all__'


class HandicapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Handicap
        fields = '__all__'


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'


class ProfileRoleSerializer(serializers.ModelSerializer):
    fk_roleid = RoleSerializer(read_only=True)
    role_data = serializers.PrimaryKeyRelatedField(
        queryset=Role.objects.all(),
        write_only=True, source='role')
    
    class Meta:
        model = ProfileRole
        fields = '__all__'


class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = '__all__'


class RolePermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = RolePermission
        fields = '__all__'


class RegistrationDateSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistrationDate
        fields = '__all__'


class FormatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Format
        fields = '__all__'


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Register
        fields = '__all__'


class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slot
        fields = '__all__'


class InformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Information
        fields = '__all__'


class FieldSerializer(serializers.ModelSerializer):
    class Meta:
        model = Field
        fields = '__all__'


class EventTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventType
        fields = '__all__'

class EventFormatSerializer(serializers.ModelSerializer):
    format = FormatSerializer(many=False,source='fk_formatid', read_only=True)
    class Meta:
        model = EventFormat
        fields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    status = serializers.SerializerMethodField('checkStatus')
    event_type= EventTypeSerializer(many=False,source='fk_event_typeid',read_only=True)
    profile= ProfileSerializer(many=False, source='fk_profileid', read_only=True)
    draw_type= DrawTypeSerializer(many=False, source='fk_draw_typeid', read_only=True)
    information= InformationSerializer(many=True, read_only=True)
    eventFormat = EventFormatSerializer(many=True, read_only=True)
    registrationDate = RegistrationDateSerializer(many=True, read_only=True)

    class Meta:
        model = Event
        fields = '__all__'
        #fields = ['pk_eventid', 'fk_event_typeid', 'fk_profileid', 'fk_draw_typeid', 'event', 'event_description', 'start_date', 'end_date', 'open_date', 'close_date', 'status', 'info']

    def checkStatus(self, obj):
        registrationDates = RegistrationDate.objects.filter(fk_eventid=obj) 
        
        for registrationDate in registrationDates:
            dt = registrationDate.close_date
            now = datetime.datetime.utcnow().replace(tzinfo=utc)
            if now < dt:
                return 'Open'
        
        return 'Closed'
