#!/bin/bash
git pull
node main.js
git add .
git commit -m "ok"
#git tag $1
git push
#git push --tags
