# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Activity(models.Model):
    pk_slot_activityid = models.AutoField(primary_key=True)
    activity = models.CharField(max_length=45, blank=True, null=True)
    slot_status = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'activity'


class Club(models.Model):
    pk_clubid = models.AutoField(primary_key=True)
    club = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'club'


class ClubCourse(models.Model):
    pk_club_courseid = models.AutoField(primary_key=True)
    fk_clubid = models.ForeignKey(Club, models.DO_NOTHING, db_column='fk_clubid')
    fk_courseid = models.ForeignKey('Course', models.DO_NOTHING, db_column='fk_courseid')

    class Meta:
        managed = False
        db_table = 'club_course'


class ClubProfile(models.Model):
    pk_club_profileid = models.AutoField(primary_key=True)
    fk_clubid = models.ForeignKey(Club, models.DO_NOTHING, db_column='fk_clubid')
    fk_profileid = models.ForeignKey('Profile', models.DO_NOTHING, db_column='fk_profileid')

    class Meta:
        managed = False
        db_table = 'club_profile'


class Country(models.Model):
    pk_countryid = models.AutoField(primary_key=True)
    country = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'country'


class Course(models.Model):
    pk_courseid = models.AutoField(primary_key=True)
    pk_countryid = models.ForeignKey(Country, models.DO_NOTHING, db_column='pk_countryid')
    course = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'course'


class CourseType(models.Model):
    pk_course_typeid = models.AutoField(primary_key=True)
    fk_courseid = models.ForeignKey(Course, models.DO_NOTHING, db_column='fk_courseid')
    fk_typeid = models.ForeignKey('Type', models.DO_NOTHING, db_column='fk_typeid')

    class Meta:
        managed = False
        db_table = 'course_type'


class CourseTypeHole(models.Model):
    pk_course_type_holeid = models.AutoField(primary_key=True)
    fk_course_typeid = models.ForeignKey(CourseType, models.DO_NOTHING, db_column='fk_course_typeid')
    hole_pk_holeid = models.ForeignKey('Hole', models.DO_NOTHING, db_column='hole_pk_holeid')
    distance = models.IntegerField(blank=True, null=True)
    par = models.IntegerField()
    si = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'course_type_hole'


class Event(models.Model):
    pk_eventid = models.IntegerField(primary_key=True)
    fk_event_typeid = models.ForeignKey('EventType', models.DO_NOTHING, db_column='fk_event_typeid')
    fk_profileid = models.ForeignKey('Profile', models.DO_NOTHING, db_column='fk_profileid')
    event = models.CharField(max_length=500)
    event_description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()

    class Meta:
        managed = False
        db_table = 'event'


class EventDay(models.Model):
    pk_event_dayid = models.AutoField(primary_key=True)
    fk_eventid = models.ForeignKey(Event, models.DO_NOTHING, db_column='fk_eventid')
    event_day = models.DateField()

    class Meta:
        managed = False
        db_table = 'event_day'


class EventFormat(models.Model):
    pk_event_formatid = models.IntegerField(primary_key=True)
    fk_eventid = models.ForeignKey(Event, models.DO_NOTHING, db_column='fk_eventid')
    fk_formatid = models.ForeignKey('Format', models.DO_NOTHING, db_column='fk_formatid')

    class Meta:
        managed = False
        db_table = 'event_format'


class EventType(models.Model):
    pk_event_typeid = models.AutoField(primary_key=True)
    event_type = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'event_type'


class Format(models.Model):
    pk_formatid = models.AutoField(primary_key=True)
    format = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'format'


class Handcap(models.Model):
    pk_handcapid = models.AutoField(primary_key=True)
    fk_profileid = models.ForeignKey('Profile', models.DO_NOTHING, db_column='fk_profileid')
    status = models.IntegerField()
    date = models.DateField()

    class Meta:
        managed = False
        db_table = 'handcap'


class Hole(models.Model):
    pk_holeid = models.IntegerField(primary_key=True)
    hole = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'hole'


class Permission(models.Model):
    pk_permissionid = models.AutoField(primary_key=True)
    permission = models.CharField(max_length=45)
    code = models.CharField(max_length=20)
    permission_desc = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'permission'


class Profile(models.Model):
    pk_profileid = models.AutoField(primary_key=True)
    dob = models.DateField(blank=True, null=True)
    phone = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'profile'


class ProfileRole(models.Model):
    pk_profile_roleid = models.AutoField(primary_key=True)
    fk_profileid = models.ForeignKey(Profile, models.DO_NOTHING, db_column='fk_profileid')
    fk_roleid = models.ForeignKey('Role', models.DO_NOTHING, db_column='fk__roleid')  # Field renamed because it contained more than one '_' in a row.

    class Meta:
        managed = False
        db_table = 'profile_role'


class Rating(models.Model):
    pk_ratingid = models.AutoField(primary_key=True)
    fk_courseid = models.ForeignKey(Course, models.DO_NOTHING, db_column='fk_courseid')
    course_rating = models.CharField(max_length=45)
    sloppy_rating = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'rating'
        unique_together = (('pk_ratingid', 'fk_courseid'),)


class Register(models.Model):
    pk_registerid = models.AutoField(primary_key=True)
    fk_slotid = models.ForeignKey('Slot', models.DO_NOTHING, db_column='fk_slotid')
    fk_profileid = models.ForeignKey(Profile, models.DO_NOTHING, db_column='fk_profileid')
    reg_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'register'


class RegistrationDate(models.Model):
    pk_registration_dateid = models.AutoField(primary_key=True)
    fk_eventid = models.ForeignKey(Event, models.DO_NOTHING, db_column='fk_eventid')
    open_date = models.DateTimeField()
    close_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'registration_date'


class Role(models.Model):
    pk_roleid = models.AutoField(primary_key=True)
    role = models.CharField(max_length=45)
    role_desc = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'role'


class RolePermission(models.Model):
    pk_role_permissionid = models.AutoField(primary_key=True)
    fk_roleid = models.ForeignKey(Role, models.DO_NOTHING, db_column='fk_roleid')
    fk_permissionid = models.ForeignKey(Permission, models.DO_NOTHING, db_column='fk_permissionid')

    class Meta:
        managed = False
        db_table = 'role_permission'


class Slot(models.Model):
    pk_slotid = models.AutoField(primary_key=True)
    fk_event_dayid = models.ForeignKey(EventDay, models.DO_NOTHING, db_column='fk_event_dayid')
    fk_slot_activityid = models.ForeignKey(Activity, models.DO_NOTHING, db_column='fk_slot_activityid')

    class Meta:
        managed = False
        db_table = 'slot'


class Type(models.Model):
    pk_typeid = models.IntegerField(primary_key=True)
    type = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'type'
