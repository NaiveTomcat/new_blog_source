#!/bin/bash
yarn build
#scp -r docs/.vuepress/dist/* root@lax.tsinghuamakerxian.cn:/var/www/blog/
rsync -rz --progress docs/.vuepress/dist/ root@lax.tsinghuamakerxian.cn:/var/www/blog
yarn baiduPush
curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=https://blog.tsinghuamakerxian.cn&token=85APzPfi9kHnXxmf"
# cp -r docs/.vuepress/dist/* gitpublish/
# cd gitpublish
# git add .
# git commit -m update
# git push

# ssh root@lax.tsinghuamakerxian.cn "cd /var/www/blog && git pull"
