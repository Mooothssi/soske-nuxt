<template>
  <div class="container">
    <b-row>
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
    </b-row>
    <b-row>
      <nuxt-link to="/"><b-button variant="warning">Home page</b-button></nuxt-link>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default'
}
</script>
