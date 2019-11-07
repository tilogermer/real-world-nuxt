# real-world-nuxt

> vuemastery tutorial

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# deploy to Heroku
heroku config:set NPM_CONFIG_PRODUCTION=false
heroku config:set HOST=0.0.0.0
heroku config:set NODE_ENV=production
add Procfile
git add --all
git commit -m prepare for heroku deploy
git push heroku master
```


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
