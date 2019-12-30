from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Country(models.Model):
    pk_countryid = models.AutoField(primary_key=True)
    country = models.CharField(max_length=45)

    class Meta:
        managed = True
        db_table = 'country'


class Course(models.Model):
    pk_courseid = models.AutoField(primary_key=True)
    pk_countryid = models.ForeignKey(
        Country, models.DO_NOTHING, db_column='pk_countryid')
    course = models.CharField(max_length=100)

    class Meta:
        managed = True
        db_table = 'course'


class Rating(models.Model):
    pk_ratingid = models.AutoField(primary_key=True)
    fk_courseid = models.ForeignKey(
        Course, models.DO_NOTHING, related_name="rating", db_column='fk_courseid')
    course_rating = models.CharField(max_length=45)
    sloppy_rating = models.CharField(max_length=45)
    par = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'rating'
        unique_together = (('pk_ratingid', 'fk_courseid'),)


class Type(models.Model):
    pk_typeid = models.AutoField(primary_key=True)
    type = models.CharField(max_length=45)

    class Meta:
        managed = True
        db_table = 'type'


class CourseType(models.Model):
    pk_course_typeid = models.AutoField(primary_key=True)
    fk_courseid = models.ForeignKey(
        Course, models.DO_NOTHING, db_column='fk_courseid', related_name="types")
    fk_typeid = models.ForeignKey(
        'Type', models.DO_NOTHING, db_column='fk_typeid')
    hand_index = models.CharField(max_length=45, blank=True, null=True)
    course_handicap = models.CharField(max_length=45, blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'course_type'


class Hole(models.Model):
    pk_holeid = models.AutoField(primary_key=True)
    hole = models.IntegerField()

    class Meta:
        managed = True
        db_table = 'hole'


class CourseTypeHole(models.Model):
    pk_course_type_holeid = models.AutoField(primary_key=True)
    fk_course_typeid = models.ForeignKey(
        CourseType, models.DO_NOTHING, db_column='fk_course_typeid', related_name='holes')
    hole_pk_holeid = models.ForeignKey(
        'Hole', models.DO_NOTHING, db_column='hole_pk_holeid')
    distance = models.IntegerField(blank=True, null=True)
    par = models.IntegerField()
    si = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'course_type_hole'


class Club(models.Model):
    pk_clubid = models.AutoField(primary_key=True)
    club = models.CharField(max_length=100)

    class Meta:
        managed = True
        db_table = 'club'


class ClubCourse(models.Model):
    pk_club_courseid = models.AutoField(primary_key=True)
    fk_clubid = models.ForeignKey(
        Club, models.DO_NOTHING, db_column='fk_clubid')
    fk_courseid = models.ForeignKey(
        'Course', models.DO_NOTHING, db_column='fk_courseid')

    class Meta:
        managed = True
        db_table = 'club_course'


class Gender(models.Model):
    pk_genderid = models.AutoField(primary_key=True)
    gender = models.CharField(max_length=100)

    class Meta:
        managed = True
        db_table = 'gender'


class Profile(models.Model):
    pk_profileid = models.AutoField(primary_key=True)
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, blank=True, null=True)
    fk_genderid = models.ForeignKey(
        Gender, models.DO_NOTHING, db_column='fk_genderid')
    dob = models.DateField(blank=True, null=True)
    phone = models.CharField(max_length=45)

    class Meta:
        managed = True
        db_table = 'profile'


class ClubProfile(models.Model):
    pk_club_profileid = models.AutoField(primary_key=True)
    fk_clubid = models.ForeignKey(
        Club, models.DO_NOTHING, db_column='fk_clubid')
    fk_profileid = models.ForeignKey(
        'Profile', models.DO_NOTHING, db_column='fk_profileid')

    class Meta:
        managed = True
        db_table = 'club_profile'


class Handicap(models.Model):
    pk_handicapid = models.AutoField(primary_key=True)
    fk_profileid = models.ForeignKey(
        'Profile', models.DO_NOTHING, db_column='fk_profileid')
    handicap_index = models.CharField(max_length=45, blank=True, null=True)
    status = models.IntegerField()
    date = models.DateField()

    class Meta:
        managed = True
        db_table = 'handicap'


class Permission(models.Model):
    pk_permissionid = models.AutoField(primary_key=True)
    permission = models.CharField(max_length=45)
    code = models.CharField(max_length=20)
    permission_desc = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'permission'


class Role(models.Model):
    pk_roleid = models.AutoField(primary_key=True)
    role = models.CharField(max_length=45)
    role_desc = models.CharField(max_length=45)
    Permissions = models.ManyToManyField(
        Permission, related_name='permissions', through='RolePermission')

    class Meta:
        managed = False
        db_table = 'role'


class RolePermission(models.Model):
    pk_role_permissionid = models.AutoField(primary_key=True)
    fk_roleid = models.ForeignKey(
        Role, models.DO_NOTHING, db_column='fk_roleid')
    fk_permissionid = models.ForeignKey(
        Permission, models.DO_NOTHING, db_column='fk_permissionid')

    class Meta:
        managed = True
        db_table = 'role_permission'


class ProfileRole(models.Model):
    pk_profile_roleid = models.AutoField(primary_key=True)
    fk_profileid = models.ForeignKey(
        Profile, models.DO_NOTHING, db_column='fk_profileid')
    fk_roleid = models.ForeignKey(
        'Role', models.DO_NOTHING, db_column='fk_roleid')

    class Meta:
        managed = True
        db_table = 'profile_role'


class EventType(models.Model):
    pk_event_typeid = models.AutoField(primary_key=True)
    event_type = models.CharField(max_length=45)

    class Meta:
        managed = True
        db_table = 'event_type'


class DrawType(models.Model):
    pk_draw_typeid = models.AutoField(primary_key=True)
    draw_type = models.CharField(max_length=45)

    class Meta:
        managed = True
        db_table = 'draw_type'


class Event(models.Model):
    pk_eventid = models.IntegerField(primary_key=True)
    fk_event_typeid = models.ForeignKey(
        'EventType', models.DO_NOTHING, db_column='fk_event_typeid')
    fk_profileid = models.ForeignKey(
        'Profile', models.DO_NOTHING, db_column='fk_profileid')
    fk_draw_typeid = models.ForeignKey(
        DrawType, models.DO_NOTHING, db_column='fk_draw_typeid')
    event = models.CharField(max_length=500)
    event_description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'event'


class Field(models.Model):
    pk_fieldid = models.AutoField(primary_key=True)
    fk_eventid = models.ForeignKey(
        Event, models.DO_NOTHING, db_column='fk_eventid')
    field_type = models.CharField(max_length=3)

    class Meta:
        managed = True
        db_table = 'field'


class Slot(models.Model):
    pk_slotid = models.AutoField(primary_key=True)
    fk_fieldid = models.ForeignKey(
        Field, models.DO_NOTHING, db_column='fk_fieldid')
    slot_time = models.TimeField()

    class Meta:
        managed = True
        db_table = 'slot'


class RegistrationDate(models.Model):
    pk_registration_dateid = models.AutoField(primary_key=True)
    fk_eventid = models.ForeignKey(
        Event, models.DO_NOTHING, db_column='fk_eventid')
    open_date = models.DateTimeField()
    close_date = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'registration_date'


class Format(models.Model):
    pk_formatid = models.AutoField(primary_key=True)
    format = models.CharField(max_length=45)

    class Meta:
        managed = True
        db_table = 'format'


class EventFormat(models.Model):
    pk_event_formatid = models.IntegerField(primary_key=True)
    fk_eventid = models.ForeignKey(
        Event, models.DO_NOTHING, db_column='fk_eventid')
    fk_formatid = models.ForeignKey(
        'Format', models.DO_NOTHING, db_column='fk_formatid')

    class Meta:
        managed = True
        db_table = 'event_format'


class Information(models.Model):
    pk_informationid = models.AutoField(primary_key=True)
    fk_eventid = models.ForeignKey(
        Event, models.DO_NOTHING, db_column='fk_eventid')
    info = models.TextField()

    class Meta:
        managed = True
        db_table = 'information'


class Register(models.Model):
    pk_registerid = models.AutoField(primary_key=True)
    fk_slotid = models.ForeignKey(
        'Slot', models.DO_NOTHING, db_column='fk_slotid')
    fk_profileid = models.ForeignKey(
        Profile, models.DO_NOTHING, db_column='fk_profileid')
    reg_date = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'register'
