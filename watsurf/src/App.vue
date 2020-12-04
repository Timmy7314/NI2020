<template>
  <div class="justify-center flex-1">
    <Navbar />
    <div class="container pt-8 mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'
export default defineComponent({
  components: {
    Navbar
  },
})
</script>
