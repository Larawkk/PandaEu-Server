'use strict'
/*
所有接口的status均为200；
errorCode规则：当errorCode为0时表示接口访问成功并且无抛错；不为零时，errorCode共计五位，
第一位表示错误级别，1开头的为系统级别错误，2开头为系统功能模块对应的错误，其中，第二三位
表示功能模块编号，第四五位表示具体错误编号。
*/
module.exports = {
  // 系统级别错误
  NOT_FIND_ROUTE: {
    status: 200,
    errorCode: 10000,
    errorMsg: '访问的路由不存在'
  },
  SERVER_ERROR: {
    status: 200,
    errorCode: 10001,
    errorMsg: '服务器开小差去了'
  },
  // 路由管理模块错误
  ROUTER_HAS_EXITS: {
    status: 200,
    errorCode: 20200,
    errorMsg: '该路由已经存在'
  },
  ROUTER_NOT_EXITS: {
    status: 200,
    errorCode: 20201,
    errorMsg: '该路由不存在'
  },
}
