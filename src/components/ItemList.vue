<template>
<div>
  <div>
    <q-parallax :src="'statics/coffeeshop.jpg'" :height="200">
    </q-parallax>
  </div>

  <div class="total">

  </div>

  <div class="list">
    <item-card v-for="(item, index) in items" :card-title="item.title" :price="item.price" :number="item.quantity" :id="index" v-on:increment="changeBasket">
    </item-card>
  </div>
  <button
  class="primary circular absolute-bottom-right"
  @click="$refs.basketModal.open()"
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
    Total: {{ total }}元
    <br>
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
      setTimeout(() => {
        window.location.replace('/')
      } ,2000);
    }
  }
}
</script>

<style>
.list {
  padding-top: 20px;
}
</style>
