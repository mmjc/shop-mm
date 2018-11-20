/**
 * Created by mjc on 2018/11/19.
 */
import ajax from './ajax'
const BASE='/api'

export const reqAddress = (longitude, latitude) => ajax(BASE+`/position/${latitude},${longitude}`)

export const reqShops=({latitude,longitude})=>ajax(BASE+'/shops',{latitude,longitude})

export const reqFoodCategorys=()=>ajax(BASE+'/catchas')

export const reqPwdLogin=(name,pwd,captcha)=>ajax(BASE+'/lpgin_pwd',{name,pwd,captcha},'POST')

export const reqSendCode = (phone) => ajax(BASE + '/sendcode', {phone})

export const reqSmsLogin=(phone,code)=>ajax(BASE+'/login_sms',{phone,code},'POST')

export const reqUserInfo=()=>ajax(BASE+'/userInfo')
