git fetch && git rebase origin master
node build.js
forever restart server/index.js
