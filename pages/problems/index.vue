<template>
    <div class="row">
        <div v-for="task in tasks" v-bind:key="task.id" class="col-sm-6">
        <b-card
            :img-src="`/img/cat/${task.route}.png`"
            img-alt="Image"
            img-top
            class="card card--1">
            <div class="card-body">
            <b-card-title>{{ task.name }}</b-card-title>
            <b-card-text v-html="task.note"/>
            <nuxt-link :to="task.route" append><a href="#" class="card-link">Go to this topic</a></nuxt-link>
            </div>
        </b-card>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: null
    }
  },
  async asyncData({ store, params, layout, $axios }) {
    const { data } = await $axios.post(`/tasks/getCategories`)
    return { tasks: data }
  },
  fetch({ store }) {
    store.commit('setCategoryGrader', null)
    store.commit('setCategoryTask', null)
  },
  layout: 'nav/tasks_index'
}
</script>

<style>

</style>
