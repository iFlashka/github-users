<template>
  <div class="auth-sign-in">
    <v-btn :href="href" color="primary" class="mt-5">
      Авторизоваться
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'SignIn',

  computed: {
    href () {
      return `https://github.com/login/oauth/authorize?client_id=${process.env.VUE_APP_CLIENT_ID}&redirect_uri=http://localhost:8080/auth/success`
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-sign-in {
  display: flex;
  justify-content: center;
}
</style>
