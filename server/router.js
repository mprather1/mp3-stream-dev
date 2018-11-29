const Router = require('koa-router')
const tracks = require('./routes/tracks')

module.exports = new Router({
  prefix: '/api'
})

  .get('/tracks', tracks.list)
  .get('/tracks/:title', tracks.fetchByTitle)
