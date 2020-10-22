'use strict'

const Controllers = require('../controllers')
const middleware = require('../middlewares')

module.exports = (app) => {
  app.use(middleware.resExtend)
  app.post('/datalist', Controllers.user.queryList) //查询数据
  app.post('/acceptData', Controllers.user.invited) //接受邀请
  app.post('/declineData', Controllers.user.accepted) //拒绝邀请
  app.post('/sendEmail', Controllers.user.email) //发送邮件
  //require('./user')(app)
}