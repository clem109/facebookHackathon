import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    items: [{
      id: 0,
      title: 'Mousse Milk tea 慕斯奶茶',
      price: 13,
      imageUrl: '/statics/tea_with_milk.png',
      quantity: 0
    },
    {
      id: 1,
      title: 'Ceylon milk tea 红豆锡兰奶茶',
      price: 13,
      imageUrl: '/statics/tea_with_milk.png',
      quantity: 0
    },
    {
      id: 2,
      title: 'Matcha milk tea 抹香慕斯奶茶',
      price: 14,
      imageUrl: '/statics/tea_with_milk.png',
      quantity: 0
    },
    {
      id: 3,
      title: 'chocolate milk tea 黑巧慕斯奶茶',
      price: 14,
      imageUrl: '/statics/tea_with_milk.png',
      quantity: 0
    },
    {
      id: 4,
      title: 'matcha milk 特浓抹茶牛奶',
      price: 13,
      imageUrl: '/statics/tea_with_milk.png',
      quantity: 0
    },
    {
      id: 5,
      title: 'Matcha milk with mango 芒果抹茶牛奶',
      price: 14,
      imageUrl: '/statics/tea_with_milk.png',
      quantity: 0
    },
    {
      id: 6,
      title: 'Hot chocolate 厨师巧克力',
      price: 13,
      imageUrl: '/statics/tea_with_milk.png',
      quantity: 0
    },
    {
      id: 7,
      title: 'Choco with cookies 曲奇奶香巧克力',
      price: 13,
      imageUrl: '/statics/tea_with_milk.png',
      quantity: 0
    },
    {
      id: 8,
      title: 'honey choco beans 蜜汁红豆巧克力',
      price: 13,
      imageUrl: '/statics/tea_with_milk.png',
      quantity: 0
    }
    ],
    basket: []
  },
  getters,
  mutations,
  actions

})
