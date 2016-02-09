#!/bin/bash

echo "Starting Mongo"
mongod --fork --dbpath /vol/data/db --logpath /var/log/mongodb.log

echo "Starting Node"
npm start
