'use strict'
module.exports = (req, res, next) => {
  res.sendOk = (data) => {
    const rst = {
      status: 200,
      errorCode: 0,
      data: data
    }
    logger.info(`method: [${req.method}] req-url: ${req.url}`)
    logger.info(`req-query:${JSON.stringify(req.query)}`)
    logger.info(`req-params:${JSON.stringify(req.params)}`)
    if (req.url !== '/user/login') {
      logger.info(`req-body:${JSON.stringify(req.body)}`)
    }
    logger.info(`sendOk:${JSON.stringify(data)}`)
    res.send(rst)
  }
  res.sendErr = (errorInfo) => {
    logger.error(`method: [${req.method}] req-url: ${req.url}`)
    logger.error(`req-query:${JSON.stringify(req.query)}`)
    logger.error(`req-params:${JSON.stringify(req.params)}`)
    logger.error(`req-body:${JSON.stringify(req.body)}`)
    logger.error(`sendErr:${JSON.stringify(errorInfo)}`)
    res.send(errorInfo)
  }
  next()
}
