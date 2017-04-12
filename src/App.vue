<template>
<!-- Don't drop "q-app" class -->
<div id="q-app">
  <q-layout>
    <main-header slot="header" />
    <router-view class="layout-view"></router-view>
  </q-layout>
</div>
</template>

<script>
import MainHeader from './components/Header'

/*
 * Root component
 */
export default {
  name: 'app',
  components: {
    MainHeader
  }
}
</script>



<style></style>
