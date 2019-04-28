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

        #save to db - return id

    def set_profile(self, name ):
        """Saves user profile details"""
        pass


    def get_profile(self):
        """Fetches user profile details"""        
        return self
    
    def get_id(self):
        """Fetches user id"""
        print("get_id",self.uid)       
        return self.uid

