<template>
  <b-navbar class="main_menu" toggleable="lg" type="dark" variant="dark">
    <nuxt-link to="/"><b-navbar-brand><div class="brand"><img src="/img/soske-logo.png" alt="SOS Camp E-Assistant (SOSKE)"/></div></b-navbar-brand></nuxt-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"></b-nav-item>
        <b-nav-item href="#" disabled></b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="loggedIn"><nuxt-link to="/problems"><font-awesome-icon icon="edit"/> Problems</nuxt-link></b-nav-item>
        <b-nav-item v-if="loggedIn"><nuxt-link to="/leaderboard"><font-awesome-icon icon="trophy"/> Leaderboard</nuxt-link></b-nav-item>
        <nuxt-link to="/login"><b-button v-if="!loggedIn" size="sm" class="my-2 my-sm-0" variant="outline-success"><font-awesome-icon icon="sign-in-alt"/> Sign in</b-button></nuxt-link>
        <b-nav-item-dropdown v-if="loggedIn" right>
          <template slot="button-content"><em>{{ username }}</em></template>
          <b-dropdown-item v-show="loggedIn" @click="logout()" href="#"><font-awesome-icon icon="sign-out-alt"/> Sign out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn
    },
    username() {
      return this.$store.state.username
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('destroyToken', {})
        .then((response) => {
          this.$router.push('/')
        })
        .catch((error) => {
          this.$router.push('/')
          console.error(error)
        })
    }
  },
  mounted() {
    if (this.$ua.browser() !== 'Chrome' && this.$ua.browser() !== 'Safari') {
      this.$toast.error('Looks like you are not browsing on Chrome or Safari.\nThis site is best displayed on Google Chrome or Safari.\nGo get a Chrome or just start browsing on Safari!')
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none !important;
  color:#ECA72C !important;
  -webkit-transition-duration: 0.39s;
  -moz-transition-duration: 0.27s;
  -o-transition-duration: 0.27s;
  transition-duration: 0.27s;
}
a:hover {
  color:white!important;
}

.icon {
    display: inline-flex;
    align-self: center;
}

.brand img {
    height: 70px;
    fill: currentColor;
}

.header_area {
  position: absolute;
  width: 100%;
  z-index: 99;
  transition: background 0.4s, all 0.3s linear;
}

.header_area .navbar {
  background: transparent !important;
  border: 0px;
  border-radius: 0px; }

.navbar_fixed .navbar {
  position: fixed;
  width: 100%;
  top: -70px;
  left: 0;
  right: 0;
  background: #343a40 !important;
  -webkit-transform: translateY(70px);
  -moz-transform: translateY(70px);
  -ms-transform: translateY(70px);
  -o-transform: translateY(70px);
  transform: translateY(70px);
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1); }

</style>
