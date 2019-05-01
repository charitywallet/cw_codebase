import datetime;
class Donor(object):
    """Donor class. Donors have the
    following properties:

    Attributes:
        name: A string representing the customer's name.
        username: app login username
        password: app login password
        monthly balance: A float tracking the current balance of the change accumulated this month.
        location: A string representing the customer's name.
    """

    def __init__(self,uid=""):
        """Return a Customer object whose name is *name* and starting
        balance is *balance*."""

        self.name = "Donor"
        self.uid=uid
        this.last_logged_in = datetime.datetime.now()
        this.fav_causes =[]
        this.username=""
        this.password=""

        this.sync_from_db()

    def set_profile(self, name, fav_causes):
        """Saves user profile details"""
        this.name =name
        this.last_logged_in = datetime.datetime.now()
        this.fav_causes =fav_causes

        try:
            db_obj=SqlConn()
            validation_flag=db_obj.update_donor_profile(this)
            return validation_flag
        except Exception as e:
            logging.info(e)
            raise
        finally:
            db_obj.close_conn()


    def sycn_from_db(self):
        """Fetches user profile details"""
        return self

    def get_id(self):
        """Fetches user id"""
        print("get_id",self.uid)
        return self.uid
