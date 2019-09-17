<template>
        <b-card
    img-src="https://picsum.photos/600/300/?image=7"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 22rem;"
    class="mt-2 mb-2 text-md-center">
    <b-card-title><b-badge variant="info">SKE17</b-badge> SOSKE Registration</b-card-title>
        <h2 class="login-heading"></h2>
        <transition name="slide-left" mode="out-in">
          <b-form v-if="verified" key="verified">
              <hr/>
              <h3>Verified ID</h3>
              <p>Your SOSKE-ID confirmation has been associated <code>{{ address }}</code> with this ID. You can now log in to SOSKE with your SOSKE-ID</p>
              <nuxt-link to="/login"><b-button variant="primary">Proceed to Login</b-button></nuxt-link>
          </b-form>
        </transition>
    </b-card>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 'register'
    }
  },
  methods: {
    signUpQuick() {
      this.$store.dispatch('signUpQuick', {
        username: this.cred.username,
        password: this.cred.password,
        email: this.cred.email,
        legal_name: this.cred.name
      }).then((response) => {
        this.verified = true
      })
    }
  },
  async asyncData({ $axios, route, params }) {
    const token = route.query.i
    const address = route.query.address
    const { data } = await $axios.get('/auth/verify/email', {
      params: {
        i: token,
        o: address
      }
    })
    return { verified: true, tasks: data, address: address }
  }
}
</script>

<style>
    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active {
        transition-duration: 0.35s;
        transition-property: height, opacity, transform;
        transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
        overflow: hidden;
    }

    .slide-left-enter,
    .slide-right-leave-active {
        opacity: 0;
        transform: translate(2em, 0);
    }

    .slide-left-leave-active,
    .slide-right-enter {
        opacity: 0;
        transform: translate(-2em, 0);
    }
</style>
