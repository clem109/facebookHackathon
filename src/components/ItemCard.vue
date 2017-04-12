<template>


    <div style="padding: 10px; width: 100%">
    <div class="card">
          <div class="card-title">
            <p>{{ cardTitle }}</p>
          </div>

      <div class="card-actions">
        <div class="price">
           {{ price }} 元
        </div>
        <div class="auto"></div>
        <div class="text-grey-6">
          <q-numeric
          v-model="number"
          :min="min"
          :max="max"
          @input="sendValue"
          >
          </q-numeric>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import bus from 'bus.js'

export default {
  data () {
    return {
      number: 0,
      min: 0,
      max: 8
    }
  },
  props: ['cardTitle', 'cardImage', 'price', 'id'],
  methods: {
    sendValue () {
      var data = {id: this.id, title: this.cardTitle, price: this.price, quantity: this.number}
      this.$emit('increment', data)
    }
  }
}

</script>

<style>
.price {
  font-size: 20px;
}
</style>
