<template>
  <div class="poster">
    <Login/>
  </div>
</template>

<script>
import Login from '~/components/auth/Login.vue'
export default {
  components: { Login },
  asyncData({ store, redirect }) {
    if (store.state.actk) {
      return redirect('/')
    }
  }
}
</script>

<style scoped>
  .poster {
    background-image: url("/img/bg-camp-poster.jpg") !important;
  }
</style>
