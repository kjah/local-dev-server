const Koa = require('koa')
const static = require('koa-static')
const path = require('path')
const Router = require('koa-router')
const c2k = require('koa2-connect')
const proxy = require('http-proxy-middleware')

var router = new Router()
//静态资源本地相对路径
const staticPath = './app'
const staticAbsPath=path.join( __dirname,  staticPath)

//静态资源本地绝对路径
//let staticAbsPath="E:/application/webapp";

//服务端访问地址
const targetServerUrl='http://api.icndb.com'
console.log('static path:'+staticAbsPath);
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

router.all(
  '*',
  middleware
);


const app = new Koa()
app.use(static(staticAbsPath))
app.use(router.routes())

app.listen(80)