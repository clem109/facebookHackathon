<template>
  <div>

  <div class="card">
  <div class="card-title">
    Thank you for ordering!
  </div>
  <div class="card-content">
    This application is in beta, for now we will bring your order over to you and you can pay via WeChat/Alipay or if you need to pay by cash or card please make your way to the counter showing this screen with your order.
  </div>
</div>

<div class="card">
<div class="card-title">
  Your Order
</div>
<div class="card-content">
  <div v-for="item in basket">
    {{item.quantity }} X {{item.titleEnglish}} <br>price: {{ item.priceLarge * item.quantity }}元<br>
    <hr>
  </div>
  Total: {{ total }}元
</div>
</div>

<div class="card">
<div class="card-title">
  Questionaire
</div>
<div class="card-content">
  It would be of great help if you could fill out this questionnaire, please click the button below to give us your feedback.<br><br>
  <button class="red">Go to questionnaire</button>

</div>
</div>
</div>

</template>


<script>
import axios from 'axios'


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
  methods: {
    sendOrder () {
      var orderBasket = this.$store.getters.basketItems
      axios.post('/api', orderBasket)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      console.log('posted', orderBasket)
    }
  }
}
</script>
