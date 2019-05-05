import datetime;
from classes.sql_conn import SqlConn

class Donor(object):
    """Donor class. Donors have the
    following properties:

    Attributes:
        name: A string representing the customer's name.
        username: app login username
        password: app login password
        monthly balance: A float tracking the current balance of the change accumulated self month.
        location: A string representing the customer's name.
    """

    def __init__(self,uid=""):
        """Return a Donor object """

        self.name = "Donor"
        self.uid=uid
        self.fav_causes =[]
        self.username=""
        self.password=""
        self.lifetime_donation=0
        self.monthly_collected=0
        self.causes=[]
        print("donor constructor")
        self.sync_from_db()

    def sync_from_db(self):
        """Fetches user profile details"""
        pass

    def sync_to_db(self):
        pass

    def set_profile(self, name, fav_causes):
        """Saves user profile details"""
        self.name =name
        self.last_logged_in = datetime.datetime.now()
        self.fav_causes =fav_causes

        try:
            db_obj=SqlConn()

        except Exception as e:
            logging.info(e)
            raise
        finally:
            db_obj.close_conn()

    def get_profile(self, name, fav_causes):
        pass



    def get_id(self):
        """Fetches user id"""
        print("get_id",self.uid)
        return self.uid

    def get_user_totals(self):
        print("in user tots")
        try:
            db_obj=SqlConn()

            query="Select lifetime_donation, monthly_collected,  from donor \
             where donor_id = %s"
            data = (self.uid,)
            result = db_obj.get_query(query,data)

            query="Select count(distinct drive_id), \
            count(distinct charity_id) from donor_drive \
             where donor_id = %s"
            
            result2 = db_obj.get_query(query,data)

            return {'user_id':self.uid,'month_total':result[0][1],'lifetime_total':result[0][0],'active_drives':result2[0][0],'active_charities':result2[0][1]}


        except Exception as e:
            logging.info(e)
            raise
        finally:
            db_obj.close_conn()




    def set_access_token(self, item_id, access_token):
        #update in obj and save to db

        try:
            db_obj=SqlConn()
            query="Update donor set plaid_item_id= %s, plaid_access_token=%s, last_logged_in=%s  where donor_id = %s"
            data = (item_id,access_token, datetime.datetime.now(),self.uid,)
            db_obj.set_query(query,data)
            self.plaid_item=item_id
            self.plaid_access_token=access_token
            return True

        except Exception as e:
            logging.info(e)
            raise
        finally:
            db_obj.close_conn()
