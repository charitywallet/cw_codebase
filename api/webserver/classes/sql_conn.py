import MySQLdb
import datetime


class SqlConn(object):
    """asdad
    """

    def __init__(self):
        """asd"""

        self.db = MySQLdb.connect("localhost", "root", "capstone", "charity_wallet")
        self.cursor = self.db.cursor()


    def close_conn(self):
        """Saves user profile details"""
        self.db.close()

    def set_query(self,query,data):
        """Saves user profile details"""
        self.cursor.execute(query,data)
        self.db.commit()


    def get_query(self,query,data):
        """Saves user profile details"""
        self.cursor.execute(query,data)
        data = self.cursor.fetchall()
        return data

    def user_exists(self,username):
        query="Select * from donor where username = %s"
        data = (username,)
        result=self.get_query(query,data)
        if len(result)>0:
            return True
        return False

    def create_user(self,username,password):
        query="Insert into donor (username, password, name, activation_date) values(%s,%s,%s,%s)"
        data = (username,password,"Donor",datetime.datetime.now(),)
        self.set_query(query,data)
        result= self.get_query("Select donor_id from donor where username = %s",(username,))

        return result[0][0]

    def check_user(self,username,password):
        query="Select * from donor where username = %s and password= %s"
        data = (username,password,)
        result=self.get_query(query,data)
        uid=0
        if len(result)>0:
            uid=result[0][0]
            return uid,True
        return uid, False
