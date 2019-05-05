from classes.sql_conn import SqlConn

def get_charities(uid=0):
    """starts session"""
    charities=[
        {'charity_id':1,'charityName':'The Pollination Project Foundation',
        'charityAbout': 'The Pollination Project is a foundation that makes seed grants, 365 days a year, to individual social change agents who seek to spread compassion in their communities and in the world for the benefit of all.',
        'charityImageURL':'https://cdn.greatnonprofits.org/images/logos/Logo_Square_ORANGE0.jpg',
        'charityAddress':'15 Berkeley Way, Berkeley',
        'charityCity':'Berkeley',
        'charityState':"CA",
        'charityActiveDrives':5,
        'charityCauses':['Community Foundations', 'Philanthropy', 'Charity & Voluntarism Promotion', 'Voluntarism & Grantmaking Foundations']
        },
        {'charity_id':2,'charityName':'The Ama Foundation',
        'charityAbout': ' The Ama Foundation was created to provide a home, family environment and education for the most underprivileged children of Nepal.  we rescue children from trafficking, drugs and malnutrition and help them to grow up to be productive, happy and healthy citizens of Nepal',
        'charityImageURL':'https://cdn.greatnonprofits.org/images/logos/AmaLogoDarkRedWords.jpg',
        'charityAddress':'25 Berkeley Way, Berkeley',
        'charityCity':'Berkeley','charityState':"CA",
        'charityActiveDrives':1,
        'charityCauses':[ 'Children & Youth', 'Education', 'Homeless & Housing', 'International Relief']
        },
        {'charity_id':3,'charityName':'Chaparral Foundation',
        'charityAbout': 'Chaparral House provides care for frail elders in a dynamic, life-affirming, homelike environment where privacy and self-esteem are respected, freedom of choice and freedom of expression are encouraged, and participation and contribution are appreciated.',
        'charityImageURL':'https://cdn.greatnonprofits.org/images/logos/CHAPARRAL_LOGO_JPG_small72.jpg',
        'charityAddress':'35 Berkeley Way, Berkeley',
        'charityCity':'Berkeley','charityState':"CA",
        'charityActiveDrives':2,
        'charityCauses':['Health', 'Nursing Facilities', 'Philanthropy', 'Private Operating Foundations', 'Seniors']
        }
    ]
    # if uid==0:
    #     #get all charities
    #     print("all")
    #     try:
    #         db_obj=SqlConn()
    #         query="Select * from charities"
    #         data = (username,)
    #         result=db_obj.get_query(query,data)
    #         if len(result)>0:
    #             print(result)
    #         else:
    #             # query="Insert into donor (username, password, name, activation_date, account_status) values(%s,%s,%s,%s,%s)"
    #             # data = (username,password,"Donor",datetime.datetime.now(),True,)
    #             # db_obj.set_query(query,data)
    #             # result= db_obj.get_query("Select donor_id from donor where username = %s",(username,))
    #             # uid=result[0][0]
    #             # user = Donor(uid)
    #             # return user, True
    #             print("error")
    #
    #     except Exception as e:
    #         logging.info(e)
    #         raise
    #     finally:
    #         db_obj.close_conn()

        return charities

    else:
        #get charities for user
        print(uid)

    return charities;

def get_drives(uid=0):
    """starts session"""
    drives= [
    {'drive_id':1,'driveTitle':'Save the pollens','charity_id':1,
    'driveAbout': 'The Pollination Project is a foundation that makes seed grants, 365 days a year, to individual social change agents who seek to spread compassion in their communities and in the world for the benefit of all.',
    'driveImageURL':'https://cdn.greatnonprofits.org/images/logos/Logo_Square_ORANGE0.jpg',
    'targetMoney':1000, 'currentMoney':200,
    'driveCity':'Berkeley',
    'driveState':"California",
    'causes':['Community Foundations'],
    'percentCompleted':0.2,'is_default':True
    },
    {
    'drive_id':2,'driveTitle':'Support Unlocking Silent','charity_id':1,
    'driveAbout': 'Support Unlocking Silent Histories in its startup phase and later with an impact grant. With the support of TPP, we have been able to many Indigenous youth both providing them with leadership jobs and inspiring young people to tell their stories from their perspectives',
    'driveImageURL':'https://greatnonprofits.org/images/uploads/reviews/ush.jpg',
    'targetMoney':5000, 'currentMoney':2000,
    'driveCity':'Global',
    'causes':['Charity & Voluntarism Promotion','Nature'],
    'percentCompleted':0.4,'is_default':False
    },
    {'drive_id':3,'driveTitle':'Renovating Chaparral House','charity_id':2,
    'driveAbout': 'Renovations to  Chaparral House for providing a safe home like atmosphere with engaging and stimulating activities',
    'driveImageURL':'https://cdn.greatnonprofits.org/images/logos/CHAPARRAL_LOGO_JPG_small72.jpg',
    'targetMoney':200, 'currentMoney':90,
    'driveCity':'Berkeley',
    'causes':['Health', 'Nursing Facilities', 'Seniors'],
    'percentCompleted':0.45, 'is_default':True
    },
    {'drive_id':4,'driveTitle':'The Ama Foundation','charity_id':3,
    'driveAbout': 'The ama food drive',
    'driveImageURL':'https://cdn.greatnonprofits.org/images/logos/CHAPARRAL_LOGO_JPG_small72.jpg',
    'targetMoney':270, 'currentMoney':90,
    'driveCity':'Berkeley',
    'causes':[ 'Children & Youth', 'Education', 'Homeless & Housing', 'International Relief'],
    'percentCompleted':0.33,'is_default':True
    },
    {'drive_id':3,'driveTitle':'Renovating Chaparral House','charity_id':2,
    'driveAbout': 'Renovations to  Chaparral House for providing a safe home like atmosphere with engaging and stimulating activities',
    'driveImageURL':'https://cdn.greatnonprofits.org/images/logos/CHAPARRAL_LOGO_JPG_small72.jpg',
    'targetMoney':200, 'currentMoney':90,
    'driveCity':'Berkeley',
    'causes':['Health', 'Nursing Facilities', 'Seniors'],
    'percentCompleted':0.45,'is_default':False
    },
    {'drive_id':4,'driveTitle':'The Ama Foundation','charity_id':3,
    'driveAbout': 'The ama food drive',
    'driveImageURL':'https://cdn.greatnonprofits.org/images/logos/CHAPARRAL_LOGO_JPG_small72.jpg',
    'targetMoney':270, 'currentMoney':90,
    'driveCity':'Berkeley',
    'causes':[ 'Children & Youth', 'Education', 'Homeless & Housing', 'International Relief'],
    'percentCompleted':0.33, 'is_default':False
    }
    ]
    if uid==0:
        #get all drives
        print("all")
    else:
        #get drives for user
        print(uid)

    return drives;
