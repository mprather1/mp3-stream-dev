const Router = require('koa-router')
const trees = require('./routes/trees')
const about = require('./routes/about')
const files = require('./routes/files')

module.exports = new Router({
  prefix: '/api'
})

  .get('/trees', trees.fetch)
  .get('/about', about.fetch)
  .get('/tracks', files.list)
  .get('/tracks/:filename', files.fetch)