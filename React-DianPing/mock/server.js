const Koa = require('koa')
const router = require('koa-router')()
const koaBody = require('koa-body')()
const cors = require('koa2-cors')

const app = new Koa()

// cors跨域设置
app.use(cors({
    origin: function (ctx) {
        if (ctx.url === '/test') {
            return "*"  // 允许来自所有域名请求
        }
        // 如果return 'http://localhost:8080' 则只允许 http://localhost:8080 这个域名跨域请求
        // 当浏览器进行跨域请求的时候，服务器能获取其相应的请求头，其中一个是Origin 属性，表示请求的域
        // 我们只要设置这域为白名单就好。每种服务器语言的设置方法可能都不一样，但原理是一样的。 
        // 设置 ctx.request.get('origin') 表示：谁访问，我就设置谁为白名单，允许跨域访问
        return ctx.request.get('origin')
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))

router.post('/api/post', koaBody, function (ctx, next) {
    console.log(ctx.request.body)
    ctx.body = JSON.stringify(ctx.request.body)
})
// 首页 -- 广告（超值特惠）
const homeAdData = require('./home/ad')
router.get('/api/homead', function (ctx, next) {
    ctx.body = homeAdData
})
// 首页 -- 推荐列表（猜你喜欢）
const homeListData = require('./home/list')
router.get('/api/homelist/:city/:page', function (ctx, next) {
    // 参数
    const params = ctx.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)

    ctx.body = homeListData
})
// 搜索结果页 -- 搜索结果 -- 四个参数
const searchListData = require('./search/list')
router.get('/api/search/:page/:city/:category/:keyword', function (ctx, next) {
    // 参数
    const params = ctx.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category
    const paramsKeyword = params.keyword

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)
    console.log('关键字：' + paramsKeyword)

    ctx.body = searchListData
})
// 搜索页 -- 三个参数
router.get('/api/search/:page/:city/:category', function (ctx, next) {
    // 参数
    const params = ctx.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)

    ctx.body = searchListData
})
// 详情页 -- 商户信息
const detailInfo = require('./detail/info')
router.get('/api/detail/info/:id', function (ctx, next) {
    const params = ctx.params
    const id = params.id

    console.log('商户id: ' + id)

    ctx.body = detailInfo
})
// 详情页 -- 用户评论
const detailComment = require('./detail/comment')
router.get('/api/detail/comment/:page/:id', function (ctx, next) {
    const params = ctx.params
    const page = params.page
    const id = params.id

    console.log('商户id: ' + id)
    console.log('当前页数: ' + page)

    ctx.body = detailComment
})
// 订单列表
const orderList = require('./orderList/orderList')
router.get('/api/orderList/:username', function(ctx, next) {
    const params = ctx.params
    const username = params.username
    console.log('用户名：' + username)
    ctx.body = orderList
})
// 提交评论
router.post('/api/submitComment', function(ctx, next) {
    ctx.body = {
        errno: 0,
        msg: 'ok'
    }
})

// 开始服务并生成路由
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
