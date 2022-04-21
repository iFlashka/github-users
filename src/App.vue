<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { getCookie } from '@/helpers/cookie'
import { mapMutations } from 'vuex'

export default {
  name: 'App',

  created () {
    const token = getCookie('access_token')

    if (token) {
      this.setToken(token)
    }
  },

  methods: {
    ...mapMutations('auth', [
      'setToken'
    ])
  }
}
</script>
