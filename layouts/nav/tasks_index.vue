<template>
    <div class="poster">
        <Navbar class="navbar_normal"/>
        <div class="container-fluid">
            <b-row class="mt-2">
              <b-col col>
                <b-breadcrumb :items="breadcrumbsLinks"/>
              </b-col>
              <!-- <b-col col lg="3" class="mt-1">
                <b-input-group prepend="Search anything..." disabled>
                  <b-form-input placeholder="Not implemented yet!" disabled></b-form-input>
                  <b-input-group-append>
                    <b-button variant="success" @click="searchAnything" disabled>Search</b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-col> -->
            </b-row>
            <nuxt/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  },
  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: '/js/navbar_tasks.js', defer: true }
    ],
    link: [
      { rel: 'stylesheet', href: '/css/cards.css' }
    ]
  },
  data() {
    return {
      items: null,
      category: null,
      task: null
    }
  },
  methods: {
    searchAnything() {

    }
  },
  mounted() {
    this.category = this.$store.state.graderData.currentCategory
    this.task = this.$store.state.graderData.currentTask
  },
  computed: {
    breadcrumbsLinks() {
      const tmp = [{
        text: 'Problem topics',
        href: '/problems'
      }]
      if (this.category !== null) {
        tmp.push(this.category)
      }
      if (this.task !== null) {
        tmp.push(this.task)
      }
      return tmp
    }
  },
  watch: {
    $route() {
      this.category = this.$store.state.graderData.currentCategory
      this.task = this.$store.state.graderData.currentTask
    }
  }
}
</script>

<style scoped>
  .breadcrumb > li + li:before {
      color: #ccc;
      content: "•";
      padding: 0 5px;
  }
  a {
    color: #ECA72C;
    text-decoration: none;
  }
  .poster {
    background-image: url("/img/bg-camp-poster.jpg") !important;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
</style>
