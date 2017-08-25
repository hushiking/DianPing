const Koa = require('koa')
const router = require('koa-router')()
const koaBody = require('koa-body')()

const app = new Koa()
router.get('/', function(ctx, next) {
  ctx.body = ctx
})

router.get('/api', function(ctx, next) {
  ctx.body = 'test data'
})

router.get('/api/1', function(ctx, next) {
  ctx.body = 'test data 1'
})

router.get('/api/2', function(ctx, next) {
  ctx.body = {
    a: 1,
    b: '123'
  }
})

router.post('/api/post', koaBody, function(ctx, next) {
  console.log(ctx.request.body)
  ctx.body = JSON.stringify(ctx.request.body)
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
