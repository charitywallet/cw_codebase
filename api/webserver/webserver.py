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


@app.route('/get_user_totals', methods=["GET"])
def user_totals():
    response={}
    if request.headers['Content-Type'] == 'application/json':
        arguments = request.get_json()
        user_id = arguments.get("user_id")
        status=""
        try:
            #check session
            session_flag= True

            if session_flag:
                current_user=Donor(user_id)
                #get totals from user class - current_user.get_totals()
                response["totals"]= {'user_id':user_id,'month_total':20,'lifetime_total':200,'active_drives':3,'active_charities':1}
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


@app.route('/set_ptoken', methods=['POST'])
def plaid_access_token_gen():
    response={}
    if request.headers['Content-Type'] == 'application/json':
        arguments = request.get_json()
        user_id = arguments.get("user_id")
        plaid_public_token = arguments.get("public_token")
        status=""
        try:
            # validation_flag= fetch_access_token()
            validation_flag=True
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


@app.route('/get_charities', methods=["GET"])
def charity_list():
    response={}
    try:
        #get all listed charities from
        response["charities"]= [
        {'charity_id':1,'name':'The Pollination Project Foundation',
        'description': 'The Pollination Project is a foundation that makes seed grants, 365 days a year, to individual social change agents who seek to spread compassion in their communities and in the world for the benefit of all.',
        'image_url':'https://cdn.greatnonprofits.org/images/logos/Logo_Square_ORANGE0.jpg',
        'address':'15 Berkeley Way, Berkeley',
        'location':'Berkeley',
        'active_drives':5,
        'causes':['Community Foundations', 'Philanthropy', 'Charity & Voluntarism Promotion', 'Voluntarism & Grantmaking Foundations']
        },
        {'charity_id':2,'name':'The Ama Foundation',
        'description': ' The Ama Foundation was created to provide a home, family environment and education for the most underprivileged children of Nepal.  we rescue children from trafficking, drugs and malnutrition and help them to grow up to be productive, happy and healthy citizens of Nepal',
        'image_url':'https://cdn.greatnonprofits.org/images/logos/AmaLogoDarkRedWords.jpg',
        'address':'25 Berkeley Way, Berkeley',
        'location':'Berkeley',
        'active_drives':1,
        'causes':[ 'Children & Youth', 'Education', 'Homeless & Housing', 'International Relief']
        },
        {'charity_id':3,'name':'Chaparral Foundation',
        'description': 'Chaparral House provides care for frail elders in a dynamic, life-affirming, homelike environment where privacy and self-esteem are respected, freedom of choice and freedom of expression are encouraged, and participation and contribution are appreciated.',
        'image_url':'https://cdn.greatnonprofits.org/images/logos/CHAPARRAL_LOGO_JPG_small72.jpg',
        'address':'35 Berkeley Way, Berkeley',
        'location':'Berkeley',
        'active_drives':2,
        'causes':['Health', 'Nursing Facilities', 'Philanthropy', 'Private Operating Foundations', 'Seniors']
        }
        ]
        status_code = 200
        logging.info(response)

    except Exception as e:
        status_code = 400
        status = e
        message="Error:{}".format(status)
        logging.info(message)
        response['message']=message

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
        status=""
        try:
            #check session
            session_flag= True

            if session_flag:
                current_user=Donor(user_id)
                #save drive to user
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


@app.route('/get_drives', methods=["GET"])
def drive_list():
    response={}
    try:
        #get all listed charities from
        response["drives"]= [
        {'drive_id':1,'name':'Save the pollens',
        'description': 'The Pollination Project is a foundation that makes seed grants, 365 days a year, to individual social change agents who seek to spread compassion in their communities and in the world for the benefit of all.',
        'image_url':'https://cdn.greatnonprofits.org/images/logos/Logo_Square_ORANGE0.jpg',
        'target_amt':1000, 'collected_amt':200,
        'location':'Berkeley',
        'causes':['Community Foundations']
        },
        {
        'drive_id':2,'name':'Support Unlocking Silent',
        'description': 'Support Unlocking Silent Histories in its startup phase and later with an impact grant. With the support of TPP, we have been able to many Indigenous youth both providing them with leadership jobs and inspiring young people to tell their stories from their perspectives',
        'image_url':'https://greatnonprofits.org/images/uploads/reviews/ush.jpg',
        'target_amt':5000, 'collected_amt':2000,
        'location':'Global',
        'causes':['Charity & Voluntarism Promotion','Nature']
        },
        {'drive_id':3,'name':'Renovating Chaparral House',
        'description': 'Renovations to  Chaparral House for providing a safe home like atmosphere with engaging and stimulating activities',
        'image_url':'https://cdn.greatnonprofits.org/images/logos/CHAPARRAL_LOGO_JPG_small72.jpg',
        'target_amt':200, 'collected_amt':90,
        'location':'Berkeley',
        'causes':['Health', 'Nursing Facilities', 'Seniors']
        },
        {'drive_id':4,'name':'The Ama Foundation',
        'description': 'Chaparral House provides care for frail elders in a dynamic, life-affirming, homelike environment where privacy and self-esteem are respected, freedom of choice and freedom of expression are encouraged, and participation and contribution are appreciated.',
        'image_url':'https://cdn.greatnonprofits.org/images/logos/CHAPARRAL_LOGO_JPG_small72.jpg',
        'target_amt':0, 'collected_amt':90,
        'location':'Berkeley',
        'causes':[ 'Children & Youth', 'Education', 'Homeless & Housing', 'International Relief']
        }

        ]
        status_code = 200
        logging.info(response)

    except Exception as e:
        status_code = 400
        status = e
        message="Error:{}".format(status)
        logging.info(message)
        response['message']=message

    result=json.dumps(response)

    return Response(result, status=status_code, mimetype='application/json')


@app.route('/user_drives', methods=["GET"])
def user_drive_list():
    response={}
    #require user id
    # try:
    #     #get all listed charities from
    #     response["drives"]= [
    #     {'drive_id':1,'name':'Save the pollens',
    #     'description': 'The Pollination Project is a foundation that makes seed grants, 365 days a year, to individual social change agents who seek to spread compassion in their communities and in the world for the benefit of all.',
    #     'image_url':'https://cdn.greatnonprofits.org/images/logos/Logo_Square_ORANGE0.jpg',
    #     'target_amt':1000, 'collected_amt':200,
    #     'location':'Berkeley',
    #     'causes':['Community Foundations']
    #     },
    #     {
    #     'drive_id':2,'name':'Support Unlocking Silent',
    #     'description': 'Support Unlocking Silent Histories in its startup phase and later with an impact grant. With the support of TPP, we have been able to many Indigenous youth both providing them with leadership jobs and inspiring young people to tell their stories from their perspectives',
    #     'image_url':'https://greatnonprofits.org/images/uploads/reviews/ush.jpg',
    #     'target_amt':5000, 'collected_amt':2000,
    #     'location':'Global',
    #     'causes':['Charity & Voluntarism Promotion','Nature']
    #     },
    #     {'drive_id':3,'name':'Renovating Chaparral House',
    #     'description': 'Renovations to  Chaparral House for providing a safe home like atmosphere with engaging and stimulating activities',
    #     'image_url':'https://cdn.greatnonprofits.org/images/logos/CHAPARRAL_LOGO_JPG_small72.jpg',
    #     'target_amt':200, 'collected_amt':90,
    #     'location':'Berkeley',
    #     'causes':['Health', 'Nursing Facilities', 'Seniors']
    #     },
    #     {'drive_id':4,'name':'The Ama Foundation',
    #     'description': 'Chaparral House provides care for frail elders in a dynamic, life-affirming, homelike environment where privacy and self-esteem are respected, freedom of choice and freedom of expression are encouraged, and participation and contribution are appreciated.',
    #     'image_url':'https://cdn.greatnonprofits.org/images/logos/CHAPARRAL_LOGO_JPG_small72.jpg',
    #     'target_amt':0, 'collected_amt':90,
    #     'location':'Berkeley',
    #     'causes':[ 'Children & Youth', 'Education', 'Homeless & Housing', 'International Relief']
    #     }
    #
    #     ]
    #     status_code = 200
    #     logging.info(response)
    #
    # except Exception as e:
    #     status_code = 400
    #     status = e
    #     message="Error:{}".format(status)
    #     logging.info(message)
    #     response['message']=message

    result=json.dumps(response)

    return Response(result, status=status_code, mimetype='application/json')

@app.route('/user_charities', methods=["GET"])
def user_charity_list():
    response={}
    #require user id
    # try:
    #     #get all listed charities from
    #     response["charities"]= [
    #     {'charity_id':1,'name':'The Pollination Project Foundation',
    #     'description': 'The Pollination Project is a foundation that makes seed grants, 365 days a year, to individual social change agents who seek to spread compassion in their communities and in the world for the benefit of all.',
    #     'image_url':'https://cdn.greatnonprofits.org/images/logos/Logo_Square_ORANGE0.jpg',
    #     'address':'15 Berkeley Way, Berkeley',
    #     'location':'Berkeley',
    #     'active_drives':5,
    #     'causes':['Community Foundations', 'Philanthropy', 'Charity & Voluntarism Promotion', 'Voluntarism & Grantmaking Foundations']
    #     },
    #     {'charity_id':2,'name':'The Ama Foundation',
    #     'description': ' The Ama Foundation was created to provide a home, family environment and education for the most underprivileged children of Nepal.  we rescue children from trafficking, drugs and malnutrition and help them to grow up to be productive, happy and healthy citizens of Nepal',
    #     'image_url':'https://cdn.greatnonprofits.org/images/logos/AmaLogoDarkRedWords.jpg',
    #     'address':'25 Berkeley Way, Berkeley',
    #     'location':'Berkeley',
    #     'active_drives':1,
    #     'causes':[ 'Children & Youth', 'Education', 'Homeless & Housing', 'International Relief']
    #     },
    #     {'charity_id':3,'name':'Chaparral Foundation',
    #     'description': 'Chaparral House provides care for frail elders in a dynamic, life-affirming, homelike environment where privacy and self-esteem are respected, freedom of choice and freedom of expression are encouraged, and participation and contribution are appreciated.',
    #     'image_url':'https://cdn.greatnonprofits.org/images/logos/CHAPARRAL_LOGO_JPG_small72.jpg',
    #     'address':'35 Berkeley Way, Berkeley',
    #     'location':'Berkeley',
    #     'active_drives':2,
    #     'causes':['Health', 'Nursing Facilities', 'Philanthropy', 'Private Operating Foundations', 'Seniors']
    #     }
    #     ]
    #     status_code = 200
    #     logging.info(response)
    #
    # except Exception as e:
    #     status_code = 400
    #     status = e
    #     message="Error:{}".format(status)
    #     logging.info(message)
    #     response['message']=message

    result=json.dumps(response)

    return Response(result, status=status_code, mimetype='application/json')
