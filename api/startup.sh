# startup.sh: script to create docker containers to run this project

#clean up
docker kill mysql-server cw-webserver
docker rm mysql-server cw-webserver

#create network
docker network create cw-network

#create my sql server container
docker run -d --name cw-mysql-server --network cw-network -e MYSQL_ROOT_PASSWORD=capstone mysql --default-authentication-plugin=mysql_native_password
docker exec -it cw-mysql-server bash
# use command -  "mysql -h localhost -u root -p"  password - capstone to login to sql server
# use sql in db_creation.sql to create db setup

# Build and create container for our definition webserver
pushd webserver
docker build -t webserver .
docker run --network cw-network --name cw-webserver -d -e FLASK_APP=webserver.py -p 5000:5000 webserver
popd
