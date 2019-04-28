user_session={}


def start_session(uid,timestamp):
    """starts session"""
    global user_session
    user_session[uid]={"start":timestamp, "active":True,"end":""}


def check_session(uid):
    """check active session"""
    global user_session
    return user_session[uid][active]


def end_session(uid,timestamp):
    """end active session"""
    global user_session
    user_session[uid][active]=False
    user_session[uid][end]=timestamp
