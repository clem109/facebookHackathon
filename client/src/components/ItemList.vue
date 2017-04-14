<template>
<div>
  <div>
    <q-parallax :src="'statics/coffee.jpg'" :speed="1">
      <h2 class="heading">Time Capsule</h2>
    </q-parallax>
  </div>

  <div class="total">

  </div>

  <div class="list">
    <item-card v-for="(item, index) in items" :card-title="item.titleEnglish" :price="item.priceLarge" :number="item.quantity" :id="index" v-on:increment="changeBasket">
    </item-card>
  </div>
  <br><br><br><br>
  <button
  class="primary circular absolute-bottom-right"
  @click="$refs.basketModal.open()"
  style="right: 18px; bottom: 18px"
  v-if="basketTotalItems > 0"
>
<i>local_grocery_store</i>
 <span class="floating label circular bg-dark text-white" >{{ basketTotalItems }}</span>

</button>
<q-modal ref="basketModal">
  <div style="padding: 50px">
    <h4>Basket</h4>
    <div v-for="item in basket">
      {{item.quantity }} X {{item.titleEnglish}} <br>price: {{ item.priceLarge * item.quantity }}元<br>
      <hr>
    </div>
    Total: {{ total }}元
    <br>
    <br>
    <button class="red" @click="$refs.basketModal.close()">Close</button>
    <router-link to="/checkout"><button class="primary">Checkout</button></router-link>

  </div>
</q-modal>

</div>
</template>

<script>
import ItemCard from './ItemCard.vue'
import { Toast } from 'quasar'

export default {

  computed: {
    items () {
      return this.$store.getters.shoppingItems
    },
    basket () {
      return this.$store.getters.basketItems
    },
    total () {
      return this.$store.getters.basketTotal
    },
    basketTotalItems () {
      return this.$store.getters.basketItemNumber
    }
  },
  components: {
    ItemCard
  },

  methods: {
    changeBasket (item) {
      var payload = [item.id, item.quantity]
      this.$store.commit('changeBasket', payload)
    },
    submitOrder () {
      Toast.create('Order submitted')
    }
  }
}
</script>

<style>
.list {
  padding-top: 20px;
}
.heading {
  color: white;
}
.q-parallax-text {
  text-shadow: 0 0 50px #000;
}
</style>
