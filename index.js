const Koa = require('koa')
const static = require('koa-static')
const path = require('path')
const Router = require('koa-router')
const c2k = require('koa2-connect')
const proxy = require('http-proxy-middleware')

var router = new Router()
//静态资源本地路径 也可配置绝对路径 如：E:/application/webapp
let staticPath = './app'

//服务端访问地址
const targetServerUrl='http://api.icndb.com'
//访问端口
const port=80;


if(!path.isAbsolute(staticPath)){
	staticPath=path.join( __dirname,  staticPath)
}
console.log('static path:'+staticPath);

const middleware=c2k(
  proxy({
    target: targetServerUrl,
    changeOrigin: true,
    autoRewrite:true,
    onProxyReq(proxyReq, req, res){
      console.log('proxy request url :'+req.url)
    }
  })
)

router.all('*',middleware);

const app = new Koa()
app.use(static(staticPath))
app.use(router.routes())
app.listen(port)