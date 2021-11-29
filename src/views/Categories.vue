<template>
  <div class="home">
    <Background msg='okay' />
  </div>
</template>

<script>
// @ is an alias to /src
import Background from '@/components/Background.vue'

export default {
  name: 'Home',
  components: {
    Background
  }
}
</script>
<style scoped>
  h1{
    color:white
  }
</style>
