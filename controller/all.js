var signin = require('./signin');
var signup = require('./signup');
var logout = require('./logout')
var add_book = require('./mng/add_book');
var slct_mng = require('./mng/select_books_mng')
var delete_books =require('./mng/delete_books')
var delete_record = require('./mng/delete_record')
var add_record = require('./mng/add_record')
var usr_consult =require('./usr/consult')
var lend_book = require('./usr/lend_book')
var return_book = require('./usr/return_book')
var lended_books =require('./usr/lended_books')
var return_books = require('./usr/return_books')
var change_usr_info = require('./usr/change_info')
var change_mng_info = require('./mng/change-info')
var get_info_usr = require('./usr/get-usr')

var controller = {
    signin: signin.signin,
    signup: signup.signup,
    logout: logout.logout,
    mng: {
        add_book: add_book.add_book,
        slct_mng: slct_mng.slct_mng,
        delete_books: delete_books.delete_books,
        delete_record: delete_record.delete_record,
        add_record: add_record.add_record,
        change_info: change_mng_info.chmng_info,
        change_pswd: change_mng_info.chmng_pswd
    },
    usr: {
        consult: usr_consult.consult,
        lend_book: lend_book.lend_book,
        return_book: return_book.return_book,
        lended_books: lended_books.lended_books,
        return_books: return_books.return_books,
        change_info: change_usr_info.chusr_info,
        change_pswd: change_usr_info.chusr_pswd,
        get_info_byid: get_info_usr.get_info_byuid,
    }
}
module.exports = controller;