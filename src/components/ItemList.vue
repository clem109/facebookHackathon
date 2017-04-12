<template>
<div>
  <div>
    <q-parallax :src="'statics/coffeeshop.jpg'" :height="200">
    </q-parallax>
  </div>

  <div class="total">

  </div>

  <div class="list">
    <item-card v-for="(item, index) in items" :card-title="item.title" :card-image="item.imageUrl" :price="item.price" :number="item.quantity" :id="index" v-on:increment="changeAmount">
    </item-card>
  </div>
  <button
  class="primary circular absolute-bottom-right"
  @click="checkout()"
  style="right: 18px; bottom: 18px"
>
<i>local_grocery_store</i>

</button>
<q-modal ref="basketModal">
  <div style="padding: 50px">
    <h4>Basket</h4>
    <div v-for="item in basket">
      {{item.quantity }} X {{item.title}} <br>price: {{ item.price * item.quantity }}元<br>
      <hr>
    </div>
    <br>
    <button class="red" @click="$refs.basketModal.close()">Close</button>
    <button class="primary" @click="submitOrder">Checkout</button>

  </div>
</q-modal>

</div>
</template>

<script>
import ItemCard from './ItemCard.vue'
import { Toast } from 'quasar'
import bus from 'bus.js'

export default {

  data() {
    return {
      items: [{
          title: 'Mousse Milk tea 慕斯奶茶',
          price: '13',
          imageUrl: '/statics/tea_with_milk.png',
          quantity: 0
        },
        {
          title: 'Ceylon milk tea 红豆锡兰奶茶',
          price: '13',
          imageUrl: '/statics/tea_with_milk.png',
          quantity: 0
        },
        {
          title: 'Matcha milk tea 抹香慕斯奶茶',
          price: '14',
          imageUrl: '/statics/tea_with_milk.png',
          quantity: 0
        },
        {
          title: 'chocolate milk tea 黑巧慕斯奶茶',
          price: '14',
          imageUrl: '/statics/tea_with_milk.png',
          quantity: 0
        },
        {
          title: 'matcha milk 特浓抹茶牛奶',
          price: '13',
          imageUrl: '/statics/tea_with_milk.png',
          quantity: 0
        },
        {
          title: 'Matcha milk with mango 芒果抹茶牛奶',
          price: '14',
          imageUrl: '/statics/tea_with_milk.png',
          quantity: 0
        },
        {
          title: 'Hot chocolate 厨师巧克力',
          price: '13',
          imageUrl: '/statics/tea_with_milk.png',
          quantity: 0
        },
        {
          title: 'Choco with cookies 曲奇奶香巧克力',
          price: '13',
          imageUrl: '/statics/tea_with_milk.png',
          quantity: 0
        },
        {
          title: 'honey choco beans 蜜汁红豆巧克力',
          price: '13',
          imageUrl: '/statics/tea_with_milk.png',
          quantity: 0
        }
      ],
      total: 0,
      basket: []
    }
  },

  components: {
    ItemCard
  },

  methods: {
    changeAmount(items) {
      // If no items in the basket add it to the basket
      if (this.basket.length === 0) {
        this.basket.push(items)
        bus.$emit('button')
      }
      // check for duplicates and update the quantity otherwise add new item
      else {
        for (var i = 0; i < this.basket.length; i++) {
          if (this.basket[i].id === items.id) {
            if (this.basket[i].quantity > items.quantity) {
              this.basket[i].quantity = items.quantity
              return
            }
            else {
              this.basket[i].quantity = items.quantity
              return
            }
          }
        }
        this.basket.push(items)
      }
    },
    checkout() {
      this.$refs.basketModal.open()
      var basketArray = []
      for (var item of this.basket) {
        console.log(item.title)
        basketArray.push('' + item.title + item.price + item.quantity + "" )
      }
    },
    submitOrder() {
      Toast.create('Order submitted')
    }
  }
}
</script>

<style>
.list {
  padding-top: 20px;
}
</style>
