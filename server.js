'use strict'
const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const log4js = require('log4js')

const {logConfig, settings} = require('./config')

const routes = require('./app/routes') // 引入路由

// 日志配置
log4js.configure(logConfig)
let logger = log4js.getLogger()
global.logger = logger

// 配置静态文件
app.use(express.static(path.join(__dirname, 'app/public')))

// 请求体解析中间件
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// 跨域配置
app.use(cors())

// 注册路由
routes(app)

app.listen(settings.port)
logger.info(`start:port is ${settings.port}`)

module.exports = app
