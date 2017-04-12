<template>
  <div slot="header">
    <div class="toolbar">
      <button
      class="hide-on-drawer-visible"
      @click="$refs.drawer.open()"
      >
      <i>menu</i>
    </button>
      <q-toolbar-title :padding="2">
        Time Capsule
      </q-toolbar-title>
    </div>

    <!-- Left side Drawer -->
   <q-drawer ref="drawer">
     <div class="list platform-delimiter">
       <div class="list-header list-label">
         Services
       </div>
       <div class="text-black">
           <div class="item item-link" @click="openWaiterModal()"><i class="item-primary">room_service</i><div class="item-content">Call Waiter</div></div>
           <div class="item item-link" @click="openBasicModal()"><i class="item-primary">wifi</i><div class="item-content">Wi-Fi</div></div>
            <div class="item item-link" @click="openTimesModal()"><i class="item-primary">event_available</i><div class="item-content">Opening Times</div></div>
      </div>
   </div>

   </q-drawer>
   <q-modal ref="basicModal">
     <div style="padding: 50px">
       <h4>Wi-Fi</h4>
       <p>Connect to 'DIVI' without a password, otherwise login to 'Tsinghua' with your student credentials.</p>
       <button class="primary" @click="$refs.basicModal.close()">Close</button>
     </div>
   </q-modal>
   <q-modal ref="waiterModal">
     <div style="padding: 50px">
       <h4>Waiter has been called</h4>
       <p>Please be patient and signal the waiter so that they can be of service.</p>
       <br>
       <button class="primary" @click="$refs.waiterModal.close()">Close</button>
     </div>
   </q-modal>
   <q-modal ref="timesModal">
     <div style="padding: 50px">
       <h4>Opening Times</h4>
       <table class="q-table">
        <thead>
          <tr>
            <th class="text-left">Day</th>
            <th class="text-right">Open</th>
            <th class="text-right">Close</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">Mon</td>
            <td class="text-right">8:00AM</td>
            <td class="text-right">10:00PM</td>
          </tr>
          <tr>
            <td class="text-left">Tues</td>
            <td class="text-right">8:00AM</td>
            <td class="text-right">10:00PM</td>
          </tr>
          <tr>
            <td class="text-left">Wed</td>
            <td class="text-right">8:00AM</td>
            <td class="text-right">10:00PM</td>
          </tr>
          <tr>
            <td class="text-left">Thu</td>
            <td class="text-right">8:00AM</td>
            <td class="text-right">10:00PM</td>
          </tr>
          <tr>
            <td class="text-left">Fri</td>
            <td class="text-right">8:00AM</td>
            <td class="text-right">10:00PM</td>
          </tr>
          <tr>
            <td class="text-left">Sat</td>
            <td class="text-right">8:00AM</td>
            <td class="text-right">10:00PM</td>
          </tr>
          <tr>
            <td class="text-left">Sun</td>
            <td class="text-right">8:00AM</td>
            <td class="text-right">10:00PM</td>
          </tr>
        </tbody>
        </table>
        <br>
       <button class="primary" @click="$refs.timesModal.close()">Close</button>
     </div>
   </q-modal>
  </div>
</template>

<script>

export default {
  methods: {
    closeBasicModal () {
      this.$refs.basicModal.close()
    },
    openBasicModal () {
      this.$refs.drawer.close(() => {
        this.$refs.basicModal.open()
      })
    },
    openWaiterModal () {
      this.$refs.drawer.close(() => {
        this.$refs.waiterModal.open()
      })
    },
    openTimesModal () {
      this.$refs.drawer.close(() => {
        this.$refs.timesModal.open()
      })
    }
  }
}

</script>

<style lang="styl">
.logo-container
  width 192px
  height 268px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d

</style>
