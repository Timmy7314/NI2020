#!/bin/bash

cd watsurf && yarn
cd watsurfAPI && yarn

sudo docker pull timmy73/nuit-info-2020:1.0.0
sudo mkdir -p /mongodata
sudo docker run -it -v mongodata:/data/db -p 27017:27017 --name mongodb -d timmy73/nuit-info-2020:1.0.0

cd watsurfAPI && pm2 --name API start yarn -- start
cd watsurf && yarn dev --port 8080