const Koa = require('koa')
const router = require('koa-router')()
const koaBody = require('koa-body')()

const app = new Koa()

router.post('/api/post', koaBody, function (ctx, next) {
    console.log(ctx.request.body)
    ctx.body = JSON.stringify(ctx.request.body)
})
const homeAdData = require('./home/ad')
router.get('/api/homead', function (ctx, next) {
    ctx.body = homeAdData
})

const homeListData = require('./home/list')
router.get('/api/homelist/:city/:page', function (ctx, next) {
    // 参数
    const params = ctx.params
    const paramsCity = params.paramsCity
    const paramsPage = params.page

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)

    ctx.body = homeListData
})

// 开始服务并生成路由
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
