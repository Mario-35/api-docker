@echo off
docker kill $(docker ps -q)
git clone https://github.com/Mario-35/api-sensorthing.git 
cd .\api-docker
 npm run docker