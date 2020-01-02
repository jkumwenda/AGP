import random
import datetime
from datetime import timedelta
from .models import *


class SerializerHelper:
    def random_password(self):
        alphabet = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        pw_length = 10
        mypw = ""

        for i in range(pw_length):
            next_index = random.randrange(len(alphabet))
            mypw = mypw + alphabet[next_index]
        return mypw

    def add_default_role(self, username):
        profile_id = Profile.objects.filter(
            user__username=username).values_list('pk_profileid')[0][0]
        profile_role = ProfileRole(fk_profileid_id=profile_id, fk_roleid_id=2)
        profile_role.save()
        return profile_role

#
    def extractData(self, start, end):
        dict = {}
        dict['numberOfDays'] = abs(end.date()-start.date()).days
        dict['startTime'] = str(start.time())[0:5]
        dict['endTime'] = str(end.time())[0:5]

        return dict

    def createSlots(self, startTime, endTime, intervalInMinutes, day, field):
       
        condition = True

        startTimeObject = datetime.datetime.strptime(startTime, '%H:%M')
        endTimeObject = datetime.datetime.strptime(endTime, '%H:%M')

        while(condition):   
            slot= Slot(fk_fieldid=field, slot_time=str(startTimeObject.time())[0:5], day=day)
            slot.save()
            startTimeObject = startTimeObject + \
                timedelta(minutes=intervalInMinutes)
            if startTimeObject.time() > endTimeObject.time():
                condition = False
        

    def saveSlots(self, start_date, end_date, field):

        defaultStartTime = "06:00"
        defaultEndTime = "18:00"
        data = SerializerHelper.extractData(self,start_date, end_date)
        timeInterval = 30  # minutes

        numberOfDaysList = range(1, data['numberOfDays']+1)

        for day in numberOfDaysList:
            startTime = data['startTime'] if day == 1 else defaultStartTime
            endTime = data['endTime'] if day == numberOfDaysList[-1] else defaultEndTime
            SerializerHelper.createSlots(self,startTime, endTime, timeInterval, day, field)
           
