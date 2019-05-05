import plaid
from classes.donor import Donor

PLAID_CLIENT_ID = '5cb0ce482db15200120fb445'
PLAID_SECRET = '8b33b5d685f70591320f566ad87901'
PLAID_PUBLIC_KEY = '0cfea3b8cf3611b374aecb1a215a39'
PLAID_ENV =  'sandbox'
PLAID_PRODUCTS = 'transactions,auth'


print(PLAID_CLIENT_ID, PLAID_SECRET, PLAID_PUBLIC_KEY, PLAID_ENV, PLAID_PRODUCTS)

client = plaid.Client(client_id = PLAID_CLIENT_ID, secret=PLAID_SECRET,
                      public_key=PLAID_PUBLIC_KEY, environment=PLAID_ENV, api_version='2018-05-22')



def get_access_token(uid,public_token):
    """get access token from Plaid api and save to DB"""
    try:
        exchange_response = client.Item.public_token.exchange(public_token)
        access_token = exchange_response['access_token']
        item = exchange_response['item_id']
        current_user = Donor(uid)
        # current_user.set_access_token(item,access_token)
        return current_user.set_access_token(item,access_token)
        logging.info(e)
    except plaid.errors.PlaidError as e:
        raise
        logging.info(e)

def get_transactions():
    #
    pass





def check_session(uid):
    """check active session"""
    global user_session
    return user_session[uid][active]


def end_session(uid,timestamp):
    """end active session"""
    global user_session
    user_session[uid][active]=False
    user_session[uid][end]=timestamp
