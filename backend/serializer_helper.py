import random 
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
            
        
