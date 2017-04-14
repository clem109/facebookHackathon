<template>
  <div>
    <router-link to="/order">
    <button>Click Me</button>
    <p> TODO: Add in a homescreen page
    {{ hello }}</p>
  </router-link>
</div>
</template>

<script>

import ItemCard from './ItemCard.vue'
import gql from 'graphql-tag'

export default {

  data () {
    return {
      hello: ''
    }
  },
  components: {
    ItemCard
  },
  apollo: {
  // Simple query that will update the 'hello' vue property
  hello: gql`{
    id
  }`,
  },
  methods: {

  }
}
</script>

<style>

.list {padding-top: 20px;}
</style>
