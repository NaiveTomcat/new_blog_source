#!/bin/bash
yarn build
# scp -r docs/.vuepress/dist/* root@lax.tsinghuamakerxian.cn:/var/www/blog/
cp -r docs/.vuepress/dist/* gitpublish/
cd gitpublish
git add .
git commit -m update
git push

ssh root@lax.tsinghuamakerxian.cn "cd /var/www/blog && git pull"
