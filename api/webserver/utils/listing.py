from classes.sql_conn import SqlConn
import logging

def get_charities(uid):
    """fetches charities from charity table"""
    charities=[]
    try:
        db_obj=SqlConn()
        if uid==0:
            #get all charities
            print("all")
            query="Select * from charity"
            data=None
        else:
            query="Select * from charity where charity_id \
            in (Select distinct charity_id from donor_drive \
            where donor_id=%s and status = %s)"
            data = (uid,True,)

        result=db_obj.get_query(query,data)
        if len(result)>0:
            print("db queried")
            for record in result:
                print(record)
                result2=db_obj.get_query(query,data)
                r={'charity_id':record[0],'charityName':record[1],
                'charityAbout': record[2],
                'charityImageURL':record[3],
                'charityAddress':record[4],
                'charityCity':record[5],
                'charityState':record[6],
                'charityActiveDrives':record[11],
                'charityCauses':record[12].split(",")
                }
                charities.append(r)
        else:
            raise Exception("No charities found")
        return charities
    except Exception as e:
        logging.info(e)
        raise
    finally:
        db_obj.close_conn()



def get_drives(uid=0,source_page=0):
    """fetches drives from drive table"""
    drives=[]
    try:
        db_obj=SqlConn()
        if source_page==0:
            #get all charities
            print("all")
            query="Select * from drive where active_status = %s"
            data = (True,)
        else:
            query="Select * from drive where active_status = %s and drive_id \
            in (Select distinct drive_id from donor_drive \
            where donor_id=%s and status = %s)"
            data = (True,uid,True,)

        result=db_obj.get_query(query,data)

        query2="Select charity_id,char_name from charity"
        data2=None

        result_charities=db_obj.get_query(query2,data2)

        #query 3 - get num donors for each drive
        query3= "select count(distinct donor_id) from donation where drive_id=% \
        and donation_type in %s"

        query4="Select distinct drive_id from donor_drive \
        where donor_id=%s and status = %s"
        data4=(uid,True,)
        ud=db_obj.get_query(query4,data4)
        user_drives=[]
        for record in ud:
            user_drives.append(record[0])
        print("user_drives",user_drives)

        if len(result)>0:
            for record in result:
                print(record)
                if record[11]==1:
                    if record[-1]:
                        isd=True
                    else:
                        isd=False
                    charityName=""
                    for rc in result_charities:
                        if record[1]==rc[0]:
                            charityName=rc[1]

                    data3=(record[0],["MON","OTD"],)

                    # num_donor=get_query(query3,data3)
                    num_donor=((5),)

                    if record[0] in user_drives:
                        userDrive=True
                    else:
                        userDrive=False

                    r={'drive_id':record[0],'charity_id':record[1],'driveTitle':record[2],
                    'charityName':charityName,
                    'driveAbout': record[3],
                    'driveImageURL':record[4],
                    'targetMoney':record[5], 'currentMoney':record[6],
                    'driveCity':record[7],
                    'driveState':record[8],
                    'causes':record[12].split(","),
                    'percentCompleted':float(record[6]/record[5]),'is_default':isd,
                    'numDonations':num_donor[0],
                    'userSelected':userDrive
                    }
                    drives.append(r)
        else:
            raise Exception("No Drives Found")
        print("drives",drives)
        return drives
    except Exception as e:
        logging.info(e)
        raise
    finally:
        db_obj.close_conn()

def get_charity_drives(cid,uid=0):
    """fetches drives from drive table"""
    drives=[]
    try:
        db_obj=SqlConn()

        query="Select * from drive where charity_id= %s order by active_status"
        data = (cid,)

        result=db_obj.get_query(query,data)

        query2="Select charity_id,char_name from charity"
        data2=None

        result_charities=db_obj.get_query(query2,data2)

        query4="Select distinct drive_id from donor_drive \
        where donor_id=%s and status = %s"
        data4=(uid,True,)
        ud=db_obj.get_query(query4,data4)
        user_drives=[]
        for record in ud:
            user_drives.append(record[0])
        print("user_drives",user_drives)

        if len(result)>0:
            for record in result:
                print(record)
                if record[11]==1:
                    activeStatus=True
                else:
                    activeStatus=False

                if record[-1]:
                    isd=True
                else:
                    isd=False

                charityName=""
                for rc in result_charities:
                    if record[1]==rc[0]:
                        charityName=rc[1]

                data3=(record[0],["MON","OTD"],)

                # num_donor=get_query(query3,data3)
                num_donor=((5),)

                if record[0] in user_drives:
                    userDrive=True
                else:
                    userDrive=False

                r={'drive_id':record[0],'charity_id':record[1],'driveTitle':record[2],
                'charityName':charityName,
                'driveAbout': record[3],
                'driveImageURL':record[4],
                'targetMoney':record[5], 'currentMoney':record[6],
                'driveCity':record[7],
                'driveState':record[8],
                'causes':record[12].split(","),
                'percentCompleted':float(record[6]/record[5]),'is_default':isd,
                'numDonations':num_donor[0],
                'activeStatus':activeStatus,
                'userSelected':userDrive
                }
                drives.append(r)
        else:
            raise Exception("No Drives Found")
        print("drives",drives)
        return drives
    except Exception as e:
        logging.info(e)
        raise
    finally:
        db_obj.close_conn()

# drives_dummy={
#     # {'drive_id':1,'driveTitle':'Save the pollens','charity_id':1,
#     # 'driveAbout': 'The Pollination Project is a foundation that makes seed grants, 365 days a year, to individual social change agents who seek to spread compassion in their communities and in the world for the benefit of all.',
#     # 'driveImageURL':'https://cdn.greatnonprofits.org/images/logos/Logo_Square_ORANGE0.jpg',
#     # 'targetMoney':1000, 'currentMoney':200,
#     # 'driveCity':'Berkeley',
#     # 'driveState':"CA",
#     # 'causes':['Community Foundations'],
#     # 'percentCompleted':0.2,'is_default':True
#     # },
#     # {
#     # 'drive_id':2,'driveTitle':'Support Unlocking Silent','charity_id':1,
#     # 'driveAbout': 'Support Unlocking Silent Histories in its startup phase and later with an impact grant. With the support of TPP, we have been able to many Indigenous youth both providing them with leadership jobs and inspiring young people to tell their stories from their perspectives',
#     # 'driveImageURL':'https://greatnonprofits.org/images/uploads/reviews/ush.jpg',
#     # 'targetMoney':5000, 'currentMoney':2000,
#     # 'driveCity':'Global',
#     # 'causes':['Charity & Voluntarism Promotion','Nature'],
#     # 'percentCompleted':0.4,'is_default':False
#     # },
#     # {'drive_id':3,'driveTitle':'Renovating Chaparral House','charity_id':2,
#     # 'driveAbout': 'Renovations to  Chaparral House for providing a safe home like atmosphere with engaging and stimulating activities',
#     # 'driveImageURL':'https://cdn.greatnonprofits.org/images/logos/CHAPARRAL_LOGO_JPG_small72.jpg',
#     # 'targetMoney':200, 'currentMoney':90,
#     # 'driveCity':'Berkeley',
#     # 'causes':['Health', 'Nursing Facilities', 'Seniors'],
#     # 'percentCompleted':0.45, 'is_default':True
#     # },
#     # {'drive_id':4,'driveTitle':'The Ama Foundation','charity_id':3,
#     # 'driveAbout': 'The ama food drive',
#     # 'driveImageURL':'https://cdn.greatnonprofits.org/images/logos/CHAPARRAL_LOGO_JPG_small72.jpg',
#     # 'targetMoney':270, 'currentMoney':90,
#     # 'driveCity':'Berkeley',
#     # 'causes':[ 'Children & Youth', 'Education', 'Homeless & Housing', 'International Relief'],
#     # 'percentCompleted':0.33,'is_default':True
#     # },
#     # {'drive_id':3,'driveTitle':'Renovating Chaparral House','charity_id':2,
#     # 'driveAbout': 'Renovations to  Chaparral House for providing a safe home like atmosphere with engaging and stimulating activities',
#     # 'driveImageURL':'https://cdn.greatnonprofits.org/images/logos/CHAPARRAL_LOGO_JPG_small72.jpg',
#     # 'targetMoney':200, 'currentMoney':90,
#     # 'driveCity':'Berkeley',
#     # 'causes':['Health', 'Nursing Facilities', 'Seniors'],
#     # 'percentCompleted':0.45,'is_default':False
#     # },
#     # {'drive_id':4,'driveTitle':'The Ama Foundation','charity_id':3,
#     # 'driveAbout': 'The ama food drive',
#     # 'driveImageURL':'https://cdn.greatnonprofits.org/images/logos/CHAPARRAL_LOGO_JPG_small72.jpg',
#     # 'targetMoney':270, 'currentMoney':90,
#     # 'driveCity':'Berkeley',
#     # 'causes':[ 'Children & Youth', 'Education', 'Homeless & Housing', 'International Relief'],
#     # 'percentCompleted':0.33, 'is_default':False
#     # }
# }
# chars_dummy={
#         # {'charity_id':1,'charityName':'The Pollination Project Foundation',
#         # 'charityAbout': 'The Pollination Project is a foundation that makes seed grants, 365 days a year, to individual social change agents who seek to spread compassion in their communities and in the world for the benefit of all.',
#         # 'charityImageURL':'https://cdn.greatnonprofits.org/images/logos/Logo_Square_ORANGE0.jpg',
#         # 'charityAddress':'15 Berkeley Way, Berkeley',
#         # 'charityCity':'Berkeley',
#         # 'charityState':"CA",
#         # 'charityActiveDrives':5,
#         # 'charityCauses':['Community Foundations', 'Philanthropy', 'Charity & Voluntarism Promotion', 'Voluntarism & Grantmaking Foundations']
#         # },
#         # {'charity_id':2,'charityName':'The Ama Foundation',
#         # 'charityAbout': ' The Ama Foundation was created to provide a home, family environment and education for the most underprivileged children of Nepal.  we rescue children from trafficking, drugs and malnutrition and help them to grow up to be productive, happy and healthy citizens of Nepal',
#         # 'charityImageURL':'https://cdn.greatnonprofits.org/images/logos/AmaLogoDarkRedWords.jpg',
#         # 'charityAddress':'25 Berkeley Way, Berkeley',
#         # 'charityCity':'Berkeley','charityState':"CA",
#         # 'charityActiveDrives':1,
#         # 'charityCauses':[ 'Children & Youth', 'Education', 'Homeless & Housing', 'International Relief']
#         # },
#         # {'charity_id':3,'charityName':'Chaparral Foundation',
#         # 'charityAbout': 'Chaparral House provides care for frail elders in a dynamic, life-affirming, homelike environment where privacy and self-esteem are respected, freedom of choice and freedom of expression are encouraged, and participation and contribution are appreciated.',
#         # 'charityImageURL':'https://cdn.greatnonprofits.org/images/logos/CHAPARRAL_LOGO_JPG_small72.jpg',
#         # 'charityAddress':'35 Berkeley Way, Berkeley',
#         # 'charityCity':'Berkeley','charityState':"CA",
#         # 'charityActiveDrives':2,
#         # 'charityCauses':['Health', 'Nursing Facilities', 'Philanthropy', 'Private Operating Foundations', 'Seniors']
#         # }        ]
# }
