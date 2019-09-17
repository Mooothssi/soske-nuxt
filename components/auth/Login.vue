<template>
  <div class="row">
    <b-card
    title="Sign in to SOSKE"
    img-src="https://picsum.photos/600/300/?image=19"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 22rem;"
    class="mt-2 mb-2 text-md-center">
        <h2 class="login-heading"></h2>
        <b-form @submit.prevent="login" @reset="reset">
            <b-form-group label="SOSKE-ID">
              <b-form-input
               type="text"
               id='username'
               v-model="cred.username"
               placeholder="Please enter your registered SOSKE-ID"
               required/>
            </b-form-group>
            <b-form-group label="Password" class="mb-more">
              <b-form-input
              type="password"
              id="password"
              placeholder="Please enter your password"
              v-model="cred.password"
              required/>
            </b-form-group>
            <b-form-group>
              <b-button type="submit" class="btn-submit" variant="success"><font-awesome-icon icon="sign-in-alt"/> Sign me in</b-button>
              <nuxt-link to="/register"><b-button class="btn-submit" variant="outline-success">SKE17 Registration</b-button></nuxt-link>
            </b-form-group>
            <transition name="fade">
              <b-alert v-model="showDismissibleAlert" :variant="alertVariant" dismissible>
                {{ loginMessage }}
              </b-alert>
            </transition>
        </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      cred: {
        username: '',
        password: ''
      },
      loginMessage: '',
      alertVariant: 'danger'
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        username: this.cred.username,
        password: this.cred.password
      }).then((response) => {
        if (response.status === 200) {
          this.alertVariant = 'success'
          this.$router.push('/problems')
        } else {
          this.alertVariant = 'danger'
        }
        this.loginMessage = response.statusText
        this.$toast.success('From now on SOSKE have entered its grace period of 2 days, meaning that there is still 2 days until the closure of SOSKE grader for 8th SOS Camp.')
        this.$toast.error('ATTENTION: SOSKE grader will be shut off on 2nd July 00:00 or sooner.')
      }).catch((error) => {
        this.loginMessage = error.response.statusText
      })
    },
    reset() {
      this.cred.username = ''
      this.cred.password = ''
    }
  },
  computed: {
    showDismissibleAlert() {
      return this.loginMessage !== ''
    }
  }
}
</script>

<style>
.card {
  margin: 0 auto; /* Added */
        float: none; /* Added */
        margin-bottom: 10px; /* Added */
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
