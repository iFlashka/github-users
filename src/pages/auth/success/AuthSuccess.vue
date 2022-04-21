<template>
  <div class="auth-success">
    редиректим...
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { getToken } from '@/api/github'
import { setCookie } from '@/helpers/cookie'
import { parse } from 'qs'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Success',

  created () {
    const { code } = this.$route.query

    getToken(code).then(({ data }) => {
      const { access_token: accessToken } = parse(data)

      this.setToken(accessToken)
      setCookie('access_token', accessToken)

      this.$router.push('/users')
    })
  },

  methods: {
    ...mapMutations('auth', [
      'setToken'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
