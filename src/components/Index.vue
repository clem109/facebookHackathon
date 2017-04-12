<template>
  <div>
    <router-link to="/order">
    <button>Click Me</button>
    <p> TODO: Add in a homescreen page </p>
  </router-link>
</div>
</template>

<script>

import ItemCard from './ItemCard.vue'

export default {

  data () {
    return {
      items: [
        {title: 'Mousse Milk tea 慕斯奶茶', price: '13', imageUrl: '/statics/tea_with_milk.png'},
        {title: 'Ceylon milk tea 红豆锡兰奶茶', price: '13', imageUrl: '/statics/tea_with_milk.png'},
        {title: 'Matcha milk tea 抹香慕斯奶茶', price: '14', imageUrl: '/statics/tea_with_milk.png'},
        {title: 'chocolate milk tea 黑巧慕斯奶茶', price: '14', imageUrl: '/statics/tea_with_milk.png'},
        {title: 'matcha milk 特浓抹茶牛奶', price: '13', imageUrl: '/statics/tea_with_milk.png'},
        {title: 'Matcha milk with mango 芒果抹茶牛奶', price: '14', imageUrl: '/statics/tea_with_milk.png'},
        {title: 'Hot chocolate 厨师巧克力', price: '13', imageUrl: '/statics/tea_with_milk.png'},
        {title: 'Choco with cookies 曲奇奶香巧克力', price: '13', imageUrl: '/statics/tea_with_milk.png'},
        {title: 'honey choco beans 蜜汁红豆巧克力', price: '13', imageUrl: '/statics/tea_with_milk.png'}
      ]
    }
  },

  components: {
    ItemCard
  },

  methods: {

  }
}
</script>

<style>

.list {padding-top: 20px;}
</style>
