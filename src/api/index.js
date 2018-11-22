/*
包含n个接口请求函数的模块
函数的返回值是promise对象
 */
import ajax from './ajax'
const BASE = '/api'


export const reqAddress = (longitude, latitude) => ajax(BASE+`/position/${latitude},${longitude}`)

export const reqFoodCategorys = () => ajax(BASE+'/index_category')


export const reqShops = ({longitude, latitude}) => ajax(BASE+ '/shops', {latitude, longitude})


export const reqSendCode = (phone) => ajax(BASE + '/sendcode', {phone})


export const reqSmsLogin = (phone, code) => ajax(BASE + '/login_sms', {phone, code}, 'POST')


export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE + '/login_pwd', {name, pwd, captcha}, 'POST')


export const reqUserInfo = () => ajax(BASE + '/userinfo')


export const reqLogout = () => ajax(BASE + '/logout')

export const reqShopInfo = () => ajax('/info')
export const reqShopGoods = () => ajax('/goods')
export const reqShopRatings = () => ajax('/ratings')
