const Koa = require('koa')
const request = require('request')
const router = require('koa-router')()
const koaBody = require('koa-body')()

const app = new Koa()
router.get('/', function (ctx, next) {
    ctx.body = ctx
})

router.get('/api', function (ctx, next) {
    ctx.body = 'test data'
})

router.get('/api/1', function (ctx, next) {
    console.log(ctx.body)  // undefined
    ctx.body = 'test data 1'
})

router.get('/api/2', function (ctx, next) {
    //.打印上下文
    console.log(ctx)
    ctx.body = {
        a: 1,
        b: '123'
    }
})

router.post('/api/post', koaBody, function (ctx, next) {
    console.log(ctx.request.body)
    const message = ctx.request.body.message
    const url = `https://api.douban.com/v2/movie/search?q=${message}`
    // 为上下文绑定数据
    ctx.body = request(url, (error, response, body) => {
        /* return new Promise(function (resolve, reject) {
            if (err) {
                console.error('出错了')
                return reject(err)
            }
            return resolve(body)
        })
        return body */
    })
    console.log(ctx.body)
    // ctx.body = JSON.stringify(ctx.request.body)
})

// 启动路由
app.use(router.routes())
// 显示当请求出错时的处理逻辑
app.use(router.allowedMethods())

app.listen(3000)
