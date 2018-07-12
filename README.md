
# local-dev-server

用于前后分离的本地开发服务器，通过配置代理进行服务端接口访问

## 运行
```
npm i
npm run start
```
###修改index.js 配置本地目录和服务端接口地址

当在本地目录中访问不到时，会通过代理获取服务端地址对应资源

或创建一个app目录，复制前端静态文件
```
const staticPath = './app'
````
或使用绝对路径
```
//let staticAbsPath="E:/application/webapp";
```

指定服务端访问地址
```
const targetServerUrl='http://api.icndb.com'
```


## 网站前台：<br>
http://localhost/index.html






