/*
Vuex最核心的管理对象
 */
import {
  reqAddress,
  reqShops,
  reqFoodCategorys,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from '../api'
import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS
} from './mutation-types'

export default {

  // 异步获取地址信息的异步action
  async getAddress ({commit, state}) {
    // 发ajax请求
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    // 根据结果提交mutation
    if(result.code===0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },


  async getFoodCategorys ({commit}) {

    const result = await reqFoodCategorys()

    if(result.code===0) {
      const foodCategorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys: foodCategorys})
    }
  },


  async getShops ({commit, state}) {

    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})

    if(result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },


  saveUser({commit}, user) {
    commit(RECEIVE_USER, {user})
  },


  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if(result.code===0) {
      const user = result.data
      commit(RECEIVE_USER, {user})
    }
  },


  async logout({commit}) {
    const result = await reqLogout()
    if(result.code===0) {
      commit(RESET_USER)
    }
  },


  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if(result.code===0) {
      const info = result.data

      commit(RECEIVE_INFO, {info})
    }
  },


  async getShopRatings({commit}) {
    const result = await reqShopRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },


  async getShopGoods({commit}, cb) {
    const result = await reqShopGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})

      typeof cb==='function' && cb()
    }
  },
}
