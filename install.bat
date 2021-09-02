@echo off
docker kill $(docker ps -q)
if exist .\api-docker (
  echo Yes 
    cd .\api-docker
    git pull
) else (
    git clone https://github.com/Mario-35/api-sensorthing.git 
    cd .\api-docker
)

 npm run docker