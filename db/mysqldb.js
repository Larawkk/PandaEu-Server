'use strict'
const mysql = require('mysql');
const { dbConfig } = require('../config/settings');

const pool = mysql.createPool(dbConfig);

class Mysql {
    /**
     * 异步执行sql语句
     * @param sql       sql字符串
     * @param callback  回调函数
     */
    query(sql, callback) {
        pool.getConnection(function (err, connection) {
            if (err) {
                callback(err, null);
            } else {
                // Use the connection
                connection.query(sql, function (err, rows) {
                    callback(err, rows);
                    connection.release();//释放链接
                });
            }
        });
    }

    /**
     * 异步执行带参数的sql语句
     * @param sql       sql字符串
     * @param arr       参数数组
     * @param callback  回调函数
     */
    querySql(sql, arr, callback) {
        pool.getConnection(function (err, conn) {
            if (err) {
                callback(err, null);
            } else {
                conn.query(sql, arr, function (err, rows) {
                    callback(err, rows);
                    conn.release();//释放链接
                });
            }
        });
    }

    /**
     * 同步执行sql语句
     * @param sql       sql字符串
     * @returns {Promise<any>}  返回值
     */
    queryAsync(sql) {
        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, conn) {
                if (err) {
                    reject(err);
                } else {
                    conn.query(sql, function (err, rows) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(rows);
                            conn.release();
                        }
                    });
                }
            })
        });
    }

    /**
     * 同步执行带参数的sql语句
     * @param sql       sql字符串
     * @param arr       参数数组
     * @returns {Promise<any>}  返回值
     */
    queryParamAsync(sql, arr) {
        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, conn) {
                if (err) {
                    reject(err);
                } else {
                    conn.query(sql, arr, function (err, rows) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(rows);
                            conn.release();
                        }
                    });
                }
            })
        });
    }
}

module.exports = new Mysql;
