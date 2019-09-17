<template>
    <div class="poster">
    <b-card
    img-src="https://picsum.photos/600/300/?image=5"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 22rem;"
    class="mt-2 mb-2 text-md-center">
    <b-card-title><b-badge variant="info">SKE17</b-badge> SOSKE Registration</b-card-title>
        <h2 class="login-heading"></h2>
        <transition name="slide-left" mode="out-in">
          <b-form v-if="currentStep === 'register'" @submit.stop.prevent @submit.prevent="signUpQuick" key="register">
              <b-form-group label="SOSKE-ID"> <!-- randomly generated -->
                <b-form-input
                  type="username"
                  id="username"
                  v-model="cred.username"
                  placeholder="Please enter your desired ID for SOSKE credentials"
                  :state="validUsername"
                  required/>
                <b-form-invalid-feedback :state="validUsername">
                  Your SOSKE-ID must be 5-25 alphanumeric characters long.
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="Password" class="mb-more">
                <b-form-input
                type="password"
                id="password"
                placeholder="Please enter your desired password"
                v-model="cred.password"
                :state="validPassword"
                required/>
                <b-form-invalid-feedback :state="validPassword">
                  Your password must be 8-65 characters long.
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="Confirm Password" class="mb-more">
                <b-form-input
                type="password"
                id="confirm_password"
                placeholder="Please re-enter your desired password"
                v-model="cred.confirmPassword"
                :state="validCPassword"
                required/>
                <b-form-invalid-feedback :state="validCPassword">
                  Confirm Password does not match your desired password.
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="ชื่อ-นามสกุล (ภาษาไทย)">
                <b-form-input
                  type="text"
                  v-model="cred.name"
                  placeholder="เป็นภาษาไทย (ไม่ใส่คำนำหน้า)"
                  :state="validLegalName"
                  required/>
                <b-form-invalid-feedback :state="validLegalName">
                  โปรดกรอกชื่อ-นามสกุลเป็นภาษาไทย (ไม่ใส่คำนำหน้า) โดยเคาะ 1 วรรคระหว่างชื่อ-นามสกุล
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="Email address">
                <b-form-input
                  type="email"
                  id='email'
                  v-model="cred.email"
                  placeholder="โปรดกรอกที่อยู่อีเมลที่ได้แจ้งกับรุ่นพี่ไว้"
                  required/>
              </b-form-group>
              <b-form-group>
                <nuxt-link to="/login"><b-button class="btn-submit" variant="outline-success"><font-awesome-icon icon="sign-in-alt"/> Sign in</b-button></nuxt-link>
                <b-button type="submit" class="btn-submit" variant="success"><b-badge variant="outline-light">SKE17</b-badge> Register</b-button>
              </b-form-group>
          </b-form>
          <b-form v-else key="verify">
              <hr/>
              <h3>Thank you for registration, please check your email</h3>
              <p>Your registration confirmation has been sent to <code>{{ cred.email }}</code></p>
              <nuxt-link to="/login"><b-button variant="primary">Proceed to Login</b-button></nuxt-link>
          </b-form>
        </transition>
    </b-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
      cred: {
        username: '',
        password: '',
        email: '',
        name: '',
        confirmPassword: ''
      },
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
        this.currentStep = 'verify'
        // this.$router.push('/login')
      })
    }
  },
  computed: {
    validUsername() { return this.cred.username.length > 4 && this.cred.username.length < 26 && /^[a-z0-9]+$/i.test(this.cred.username) },
    validPassword() { return this.cred.password.length > 7 && this.cred.password.length < 66 },
    validCPassword() { return this.cred.password === this.cred.confirmPassword && this.cred.confirmPassword.length > 0 },
    validLegalName() { return this.cred.name.length > 3 && /[\u0E00-\u0E7F]/.test(this.cred.name) && this.cred.name.split(' ').length > 1 && this.cred.name.split(' ').length < 5 }
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
    .poster {
      background-image: url("/img/bg-camp-poster.jpg") !important;
    }
</style>
