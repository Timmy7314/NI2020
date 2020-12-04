<template>
  <div class="justify-center flex-1">
    <div class="container pt-8 mx-auto">
      <Register />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Register from './components/Register.vue'

export default defineComponent({
  components: {
    Register,
  },
})
</script>
