from flask import Flask, request, Response
import json
import logging
import time
from classes.auth import Auth
from classes.donor import Donor
from utils.utils import start_session, check_session, end_session
import datetime

app = Flask(__name__)
app.debug = True


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
                start_session(user_id,datetime.datetime)
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
                start_session(user_id,datetime.datetime)
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


@app.route('/get_user_totals/<user_id>', methods=["GET"])
def user_totals(user_id):
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
                #get totals from user class - current_user.get_totals()

                response["totals"]= {'user_id':user_id,'month_total':20,'lifetime_total':200,'active_drives':3,'active_charities':1}
                status_code = 400
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
