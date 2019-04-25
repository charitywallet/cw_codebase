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
<<<<<<< HEAD
        password = arguments.get("password")       
        
=======
        password = arguments.get("password")
        status=""
>>>>>>> 7e0f90a8e65c18320363bfe2b5ac88d01129cc13
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

