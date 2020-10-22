'use strict'

/**
 * 数据库连接参数说明
 * process.env.DATABASE_HOST：是在docker部署数据库容器时使用
 * 127.0.0.1：是在本地部署时使用
 * */

module.exports = {
  port: process.env.PORT || 8080,
  dbConfig: {
    host: process.env.DATABASE_HOST || '127.0.0.1', //配置docker数据库地址
    user: 'root',
    password: '123456',
    port: process.env.PORT || '3306',
    database: 'pandaeu',       //数据库名称必须小写moshuguan1.0.0.5
    charset: 'utf8mb4'
  }
};