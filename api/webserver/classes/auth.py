from classes.donor import Donor
from db.orm import *

class Auth(object):
    """Class for authentication of user:

    Attributes:
        status 
        login token
    """
    

    def __init__(self):
        """Returns an auth object used to save a new user, validate and sign in an existing one or sign out"""
        self.status=False


    def signup_user(self, username, password):
        """Creates new user, returns user object with valid id."""
        # call db to save user - for now list 
        # Have to handle the exsiting user scenarios
        if user_exists(username):
            raise Exception("Username exists - Mail id already in use")
        else:
            uid,creation_flag=save_user(username,password)
            if creation_flag:
                user = Donor(uid)
                self.status=True
        return user, self.status

    def signin_user(self, username,password):
        """Login for existing user, returns user object with valid id."""
        uid, validation_flag=check_user(username,password)
        if validation_flag:
            user=Donor(uid)
            self.status=True
        return user, self.status