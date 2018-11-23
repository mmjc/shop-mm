/*
Vuex最核心的管理对象
 */
export default {

  totalCount(state){
    return state.cardFoods.reduce((pre,food)=>pre+food.count,0)
  },

  totalPrice(state){
    return state.cardFoods.reduce((pre,food)=>pre+food.count*food.price,0)
  }
}
