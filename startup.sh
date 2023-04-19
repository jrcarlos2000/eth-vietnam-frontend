#!/bin/bash
nvm use 16
git reset --hard
git pull
yarn
yarn build
pm2 stop facets
pm2 delete facets
pm2 start yarn --name=facets -- run start