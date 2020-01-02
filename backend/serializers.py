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
    rating = RatingSerializer(many=True, read_only=True)
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


class HoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hole
        fields = '__all__'


class CourseTypeHoleSerializer(serializers.ModelSerializer):
    hole = HoleSerializer(source="hole_pk_holeid", read_only=True)

    class Meta:
        model = CourseTypeHole
        fields = '__all__'


class CourseTypeSerializer(serializers.ModelSerializer):
    type = TypeSerializer(source="fk_typeid", read_only=True)
    holes = CourseTypeHoleSerializer(many=True, read_only=True)

    class Meta:
        model = CourseType
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
        fields = ('__all__')


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

        if validated_data['password'] != '0':
            register = True
            password = validated_data['password']
        else:
            register = False
            password = SerializerHelper.random_password(self)

        user.set_password(password)
        user.save()
        Profile.objects.update_or_create(user=user, **profile_data)

        if register is True:
            SerializerHelper.add_default_role(self, user)
        return user


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        write_only=True, source='user')

    fk_genderid = GenderSerializer(read_only=True)
    gender_id = serializers.PrimaryKeyRelatedField(
        queryset=Gender.objects.all(),
        write_only=True, source='fk_genderid')

    class Meta:
        model = Profile
        fields = '__all__'


class PlayerSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        write_only=True, source='user')

    fk_genderid = GenderSerializer(read_only=True)
    gender_id = serializers.PrimaryKeyRelatedField(
        queryset=Gender.objects.all(),
        write_only=True, source='fk_genderid')

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
        depth = 1


class ProfileRoleSerializer(serializers.ModelSerializer):
    fk_roleid = RoleSerializer(read_only=True)
    role_id = serializers.PrimaryKeyRelatedField(
        queryset=Role.objects.all(),
        write_only=True, source='fk_roleid')

    fk_profileid = ProfileSerializer(read_only=True)
    profile_id = serializers.PrimaryKeyRelatedField(
        queryset=Profile.objects.all(),
        write_only=True, source='fk_profileid')

    class Meta:
        model = ProfileRole
        fields = '__all__'


class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = '__all__'


class RolePermissionSerializer(serializers.ModelSerializer):
    fk_roleid = RoleSerializer(read_only=True)
    role_id = serializers.PrimaryKeyRelatedField(
        queryset=Role.objects.all(),
        write_only=True, source='fk_roleid')

    fk_permissionid = PermissionSerializer(read_only=True)
    permission_id = serializers.PrimaryKeyRelatedField(
        queryset=Permission.objects.all(),
        write_only=True, source='fk_permissionid')

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
    registers = RegisterSerializer(many=True, read_only=True)

    class Meta:
        model = Slot
        fields = '__all__'


class FieldSerializer(serializers.ModelSerializer):
    slots = SlotSerializer(many=True, read_only=True)

    class Meta:
        model = Field
        fields = '__all__'

    def create(self, validated_data):
        event = validated_data['fk_eventid']
        field = Field(
            field_type=validated_data['field_type'], fk_eventid=event)
        field.save()

        SerializerHelper.saveSlots(
            self, event.start_date, event.end_date, field)
        return field


class EventSerializer(serializers.ModelSerializer):
    field = FieldSerializer(many=True, read_only=True)

    class Meta:
        model = Event
        fields = '__all__'


class EventTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventType
        fields = '__all__'
