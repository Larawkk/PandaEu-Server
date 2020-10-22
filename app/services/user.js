'use strict'
const mdb = require('../models')
const { email } = require('../myutil')

class UserService {
    /**
     * 用户数据查询
     * @returns {string|*}
     */
    async getUserList() {
        try {
            const invited_userData = await mdb.user.queryInvitedUser();//可邀请用户
            const accepted_userData = await mdb.user.queryNotAcceptedUser();//已接受用户
            return {
                invited_userData: invited_userData,
                accepted_userData: accepted_userData
            }
        } catch (error) {
            const errorMsg = 'SERVER_ERROR'
            throw errorMsg
        }
    }
    /**
     * 接受用户处理
     * @param id 用户ID
     */
    async invitedUser(id) {
        try {
            //根据用户ID查询数据
            const userData = await mdb.user.userById(id)
            if (userData !== null && userData.length > 0) {
                //判断价格是否大于500,若大于500 优惠百分之十
                let originalPrice = userData[0].originalPrice; //原始价格
                let discountedPrice = originalPrice; //折扣价格
                let discounted = 0; //折扣规则
                if (originalPrice >= 500) {
                    discountedPrice = originalPrice * 0.1;
                    discounted = '10%';
                }
                //修改数据
                await mdb.user.upDataById([discountedPrice, discounted, 1, userData[0].ID])
                return true;
            } else {
                return false;
            }
        } catch (error) {
            const errorMsg = 'SERVER_ERROR'
            throw errorMsg
        }
    }
    /**
     * 拒绝用户处理
     * @param id 用户ID
     */
    async declineUser(id) {
        try {
            //修改状态值
            await mdb.user.upStateById([2, id]);
            return true;
        } catch (error) {
            const errorMsg = 'SERVER_ERROR'
            throw errorMsg
        }
    }
    /**
     * 发送邮件
     * @param emailID 邮箱账号
     */
    async sendEmail(emailID) {
        try {
            //发送邮件
            const emailData = await email.sendEmail(emailID)
            return emailData
        } catch (error) {
            const errorMsg = 'SERVER_ERROR'
            throw errorMsg
        }
    }
}
module.exports = new UserService()