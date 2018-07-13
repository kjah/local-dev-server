
# local-dev-server

用于前后分离的本地开发服务器，通过配置代理进行服务端接口访问

## 运行
```
npm i
npm run start
```
### 修改index.js 配置本地目录和服务端接口地址

当在本地目录中访问不到时，会通过代理获取服务端地址对应资源

创建一个app目录，复制前端静态文件至此目录, 或使用绝对路径,指定静态资源（前端工程）位置
```
const staticPath = './app'

````

指定服务端访问地址
```
const targetServerUrl='http://api.icndb.com'
```
配置访问端口号 默认80端口
```
const port=80;
```

## 通过浏览器打开访问本地web应用：<br>
http://localhost






