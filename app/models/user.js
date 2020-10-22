'use strict'
const mysqldb = require('../../db/mysqldb');
class dbUser {
    //查询可邀请用户
    async queryInvitedUser() {
        try {
            let sql = 'select * from user_t where state = 0';
            return await mysqldb.queryAsync(sql);
        } catch (error) {
            return error;
        }
    }
    //查询已接受用户
    async queryNotAcceptedUser() {
        try {
            let sql = 'select * from user_t where state = 1';
            return await mysqldb.queryAsync(sql);
        } catch (error) {
            return error;
        }
    }
    //根据用户ID查询数据
    async userById(arr) {
        try {
            let sql = 'select * from user_t where ID = ?';
            return await mysqldb.queryParamAsync(sql, arr);
        } catch (error) {
            return error;
        }
    }
    //根据用户ID修改数据
    async upDataById(arr) {
        try {
            let sql = 'update user_t set discountedPrice = ?,discount = ?,state = ? where ID = ?';
            return await mysqldb.queryParamAsync(sql, arr);
        } catch (error) {
            return error;
        }
    }
    //根据用户ID修改状态值数据
    async upStateById(arr) {
        try {
            let sql = 'update user_t set state = ? where ID = ?';
            return await mysqldb.queryParamAsync(sql, arr);
        } catch (error) {
            return error;
        }
    }
}

module.exports = new dbUser