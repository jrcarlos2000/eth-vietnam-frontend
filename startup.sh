#!/bin/bash
git reset --hard
git pull
yarn
yarn build
pm2 stop facets
pm2 delete facets
pm2 start npm --name=facets -- run start