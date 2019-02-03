C:
"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe"

Taskkill /IM node.exe /F

npm install bootstrap@next
npm install bootstrap@latest
npm view bootstrap dist-tags


netstat -a | findStr "8080"

Find the process name by pid

tasklist /fi "pid eq 2216"

docker image prune -a
kill all image not attache to container

# Build client image with tag "weatherclient"
docker build -f Dockerfile.dev -t weatherclient .

# run client image "weatherclient" in a container named "wcinstance"
docker run -p 4200:4200 --name wcinstance weatherclient

# Build server api image with tag "weatherserver"
docker build -f Dockerfile.dev -t weatherserver .

# run server api image "weatherserver" in a container named "wsinstance"
docker run -p 30001:30001 --name wsinstance weatherserver


docker ps

docker ps -a

docker image ls

docker-compose up --build


#kill all containers, with powershell
docker rm -f $(docker ps -a -q)

#Kill Containers with status is created, with powershell
docker rm -f $(docker ps --filter status=created -q)

#Kill Containers with status is running/up, with powershell
docker rm -f $(docker ps --filter status=running -q)

https://github.com/docker/hub-feedback/issues/1255