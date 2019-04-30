from classes.donor import Donor
from db.orm import *
import logging
from classes.sql_conn import SqlConn

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
        try:
            db_obj=SqlConn()
            if db_obj.user_exists(username):
                raise Exception("Username exists - Mail id already in use")
            else:
                uid=db_obj.create_user(username,password)
                user = Donor(uid)
                return user, True

        except Exception as e:
            logging.info(e)
            raise
        finally:
            db_obj.close_conn()




    def signin_user(self, username,password):
        """Login for existing user, returns user object with valid id."""

        try:
            db_obj=SqlConn()
            uid, validation_flag=db_obj.check_user(username,password)
            user=None
            if validation_flag:
                user=Donor(uid)

                print (uid,user)
                self.status=True
            return user, self.status

        except Exception as e:
            logging.info(e)
            raise
        finally:
            db_obj.close_conn()

    def update_credentials(self, username,password,new_password):
        """Change credentials for existing user, returns user object with valid id."""

        try:
            db_obj=SqlConn()
            uid, validation_flag=db_obj.check_user(username,password)
            user=None
            if validation_flag:
                user=Donor(uid)

                print (uid,user)
                self.status=True
            return user, self.status

        except Exception as e:
            logging.info(e)
            raise
        finally:
            db_obj.close_conn()
