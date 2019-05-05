from flask import Flask, request, Response
import json
import logging
import time
from classes.auth import Auth
from classes.donor import Donor
from utils.session import start_session, check_session, end_session
from utils.plaid import get_access_token
from utils.listing import *
import datetime

print("App load")

app = Flask(__name__)

# working endpoints
# 1. /signup - new user signup - unput username and password
# 2. /login - user login - unput username and password
# 3. /get_drives - fetch all drive - input none
# 4. /get_charities - fetch all charities - input none
# 5. /get_user_totals - user totals for dashboard - input user_id
# 6. /set_ptoken - send plaid public token to backend for plaid setup - input user_id and public_token
# 7. /drive_selection - save drives - input user_id and drive_id


@app.route('/signup', methods=["POST"])
def signup():
    response={}
    if request.headers['Content-Type'] == 'application/json':
        arguments = request.get_json()
        username = arguments.get("username")
        password = arguments.get("password")
        status=""
        try:
            auth_obj=Auth()
            user,success=auth_obj.signup_user(username,password)

            if success:
                user_id=user.get_id()
                status_code = 200
                start_session(user_id,datetime.datetime.now())
                response['user_id']=user_id
                logging.info("New User {} created".format(user_id))
            else:
                message="Something went wrong"
                logging.info(message)
                response['message']=message
                status_code = 400

        except Exception as e:
            status_code = 400
            status = e
            message="Error:{}".format(status)
            logging.info(message)
            response['message']=message

    else:
        status_code = 400
        logging.warning("Bad Request Format")
        response['message']="Bad Request Format"
    result=json.dumps(response)
    print(result)
    return Response(result, status=status_code, mimetype='application/json')

@app.route('/login', methods=["POST"])
def signin():
    response={}
    if request.headers['Content-Type'] == 'application/json':
        arguments = request.get_json()
        username = arguments.get("username")
        password = arguments.get("password")
        status=""
        try:
            auth_obj=Auth()
            user,success=auth_obj.signin_user(username,password)

            if success:
                status_code = 200
                user_id=user.get_id()
                response['user_id']=user_id
                start_session(user_id,datetime.datetime.now())
                logging.info("New User {} created".format(user_id))
            else:
                status_code = 400
                message="login error - invalid credentials"
                logging.info(message)
                response['message']=message

        except Exception as e:
            status_code = 400
            status = e
            message="Error:{}".format(status)
            logging.info(message)
            response['message']=message

    else:
        status_code = 400
        logging.warning("Bad Request Format")
        response['message']="Bad Request Format"

    result=json.dumps(response)
    print(response)

    return Response(result, status=status_code, mimetype='application/json')


@app.route('/reset_password', methods=["POST"])
def reset_password():
    response={}
    if request.headers['Content-Type'] == 'application/json':
        arguments = request.get_json()
        username = arguments.get("username")
        status=""
        try:
            auth_obj=Auth()
            success=auth_obj.reset_password(username)

            if success:
                status_code = 200
                user_id=user.get_id()
                response['message']="Password reset successfully, check your mail for new password"
                logging.info("Password reset successfully for {}, check your mail for new password".format(username))
            else:
                status_code = 400
                message="login error - username is wrong or user does not exist"
                logging.info(message)
                response['message']=message

        except Exception as e:
            status_code = 400
            status = e
            message="Error:{}".format(status)
            logging.info(message)
            response['message']=message

    else:
        status_code = 400
        logging.warning("Bad Request Format")
        response['message']="Bad Request Format"

    result=json.dumps(response)

    return Response(result, status=status_code, mimetype='application/json')


@app.route('/get_user_totals', methods=["POST"])
def user_totals():
    response={}
    if request.headers['Content-Type'] == 'application/json':
        arguments = request.get_json()
        user_id = arguments.get("user_id")
        print("user_id",user_id)
        status=""
        try:
            #check session
            session_flag= check_session(int(user_id))
            if session_flag:
                current_user=Donor(user_id)
                response["totals"]= current_user.get_user_totals()
                status_code = 200
                logging.info(response)
            else:
                status_code = 400
                message="Session Inactive, Login Again"
                logging.warning(message)
                response['message']=message

        except Exception as e:
            status_code = 400
            status = e
            message="Error:{}".format(status)
            logging.warning(message)
            response['message']=message

    else:
        status_code = 400
        logging.warning("Bad Request Format")
        response['message']="Bad Request Format"

    result=json.dumps(response)

    return Response(result, status=status_code, mimetype='application/json')


@app.route('/set_ptoken', methods=['POST'])
def plaid_access_token_gen():
    response={}
    if request.headers['Content-Type'] == 'application/json':
        arguments = request.get_json()
        user_id = arguments.get("user_id")
        plaid_public_token = arguments.get("public_token")
        status=""
        try:
            validation_flag= get_access_token(user_id,plaid_public_token)
            if validation_flag:
                status_code = 200
                message="Plaid Link Successfull at Backend"
                logging.info(message)
                response['message']=message
            else:
                status_code = 400
                message="Plaid Link Unsuccessfull at Backend - Resend the public token"
                logging.info(message)
                response['message']=message

        except Exception as e:
            status_code = 400
            status = e
            message="Error:{}".format(status)
            logging.info(message)
            response['message']=message

    else:
        status_code = 400
        logging.warning("Bad Request Format")
        response['message']="Bad Request Format"

    result=json.dumps(response)

    return Response(result, status=status_code, mimetype='application/json')


@app.route('/get_charities', methods=["POST"])
def charity_list():
    if request.headers['Content-Type'] == 'application/json':
        arguments = request.get_json()
        user_id = arguments.get("user_id")
        response={}
        if user_id is None:
            user_id=0

        response={}
        try:
            #get all listed charities from
            response["charities"]= get_charities(user_id)
            status_code = 200
            logging.info(response)

        except Exception as e:
            status_code = 400
            status = e
            message="Error:{}".format(status)
            logging.info(message)
            response['message']=message
    else:
        status_code = 400
        logging.warning("Bad Request Format")
        response['message']="Bad Request Format"

    result=json.dumps(response)

    return Response(result, status=status_code, mimetype='application/json')


@app.route('/get_user_transactions', methods=["POST"])
def user_transactions():
    response={}
    if request.headers['Content-Type'] == 'application/json':
        arguments = request.get_json()
        username = arguments.get("user_id")
        status=""
        try:
            #check session
            session_flag= True

            if session_flag:
                current_user=Donor(user_id)
                #get current month transactions from user class - current_user.get_latest_transactions()
                response["transaction_set"]= {'user_id':user_id,
                'transactions':[{'name':'Berkeley Thai','amount':45.3,'donation':0.3,'date':'05/01/2019'},
                {'name':'Berkeley Thai','amount':45.3,'donation':0.3,'date':'05/01/2019'},
                {'name':'Berkeley Thai','amount':45.3,'donation':0.3,'date':'05/01/2019'}]}
                status_code = 200
                logging.info(response)
            else:
                status_code = 400
                message="Session Inactive, Login Again"
                logging.info(message)
                response['message']=message

        except Exception as e:
            status_code = 400
            status = e
            message="Error:{}".format(status)
            logging.info(message)
            response['message']=message

    else:
        status_code = 400
        logging.warning("Bad Request Format")
        response['message']="Bad Request Format"

    result=json.dumps(response)

    return Response(result, status=status_code, mimetype='application/json')


@app.route('/drive_selection', methods=["POST"])
def set_user_drive():
    response={}
    if request.headers['Content-Type'] == 'application/json':
        arguments = request.get_json()
        user_id = arguments.get("user_id")
        drive_id = arguments.get("drive_id")
        charity_id = arguments.get("charity_id")
        status=""
        try:
            #check session
            session_flag= check_session(int(user_id))
            if session_flag:
                current_user=Donor(user_id)
                #save drive to user
                current_user.select_drive(drive_id,charity_id)
                status_code = 200
                message="Drive Selected Successfully"
                logging.info(message)
                response['message']=message
            else:
                status_code = 400
                message="Session Inactive, Login Again"
                logging.info(message)
                response['message']=message

        except Exception as e:
            status_code = 400
            status = e
            message="Error:{}".format(status)
            logging.info(message)
            response['message']=message

    else:
        status_code = 400
        logging.warning("Bad Request Format")
        response['message']="Bad Request Format"

    result=json.dumps(response)

    return Response(result, status=status_code, mimetype='application/json')


@app.route('/get_drives', methods=["POST"])
def drive_list():

    if request.headers['Content-Type'] == 'application/json':
        arguments = request.get_json()
        user_id = arguments.get("user_id")
        response={}
        if user_id is None:
            user_id=0

        try:
            #get all listed charities from
            response["drives"]= get_drives(user_id)

            status_code = 200
            logging.info(response)

        except Exception as e:
            status_code = 400
            status = e
            message="Error:{}".format(status)
            logging.info(message)
            response['message']=message

    else:
        status_code = 400
        logging.warning("Bad Request Format")
        response['message']="Bad Request Format"

    result=json.dumps(response)

    return Response(result, status=status_code, mimetype='application/json')



@app.route('/bir_test', methods=["POST"])
def bir_test():
    session_flag= check_session(1)
    response={}
    print(session_flag)
    status_code = 200
    result=json.dumps(response)
    return Response(result, status=status_code, mimetype='application/json')
