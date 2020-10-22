'use strict'
const Services = require('../services')
const { resHandler } = require('../myutil')
class User {
    //查询用户数据
    async queryList(req, res) {
        try {
            const result = await Services.user.getUserList()
            res.sendOk(result)
        } catch (error) {
            const errorRes = resHandler.getErrorRes(error)
            res.send(errorRes)
        }
    }
    //接受邀请处理
    async invited(req, res) {
        try {
            let id = req.body.id
            let emailID = req.body.emailID
            const result = await Services.user.invitedUser(id) //修改数据
            const result_Mail = await Services.user.sendEmail(emailID) //发送邮件
            console.log(result_Mail)
            res.sendOk(result)
        } catch (error) {
            const errorRes = resHandler.getErrorRes(error)
            res.sendErr(errorRes)
        }
    }
    //拒绝邀请处理
    async accepted(req, res) {
        try {
            let id = req.body.id
            const result = await Services.user.declineUser(id) //修改状态值
            res.sendOk(result)
        } catch (error) {
            const errorRes = resHandler.getErrorRes(error)
            res.sendErr(errorRes)
        }
    }
    //发送邮件
    async email(req, res) {
        try {
            let emailID = req.body.emailID
            const result_Mail = await Services.user.sendEmail(emailID)
            res.sendOk(result_Mail)
        } catch (error) {
            const errorRes = resHandler.getErrorRes(error)
            res.sendErr(errorRes)
        }
    }
}
module.exports = new User()