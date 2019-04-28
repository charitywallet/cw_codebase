# startup.sh: script to create docker containers to run this async task queue

# Create network
docker network create lab8-network

# Create container running redis
docker run --network lab8-network --name lab8-redis -d redis redis-server --appendonly yes

# Build and create container running rq workers
pushd workerserver
docker build -t workerserver .
docker run --network lab8-network --name lab8-workerserver -d workerserver
popd

# Build and create container for our definition webserver
pushd webserver
docker build -t webserver .
docker run --network lab8-network --name lab8-webserver -d -e FLASK_APP=webserver.py -p 5000:5000 webserver
popd
