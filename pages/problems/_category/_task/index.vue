<template>
    <div>
        {{ title }}
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$route.params.task
    }
  },
  asyncData({ store, params, layout }) {
    store.state.graderData.currentCategory = { text: params.category, href: '/tasks/' + params.category }
    store.state.graderData.currentTask = params.task
  },
  layout: 'nav/tasks'
}
</script>

<style>

</style>
