<template>
  <v-card
    :loading="isLoading"
    class="mx-auto my-12 users-single"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="usersSingle.avatar_url"
    ></v-img>

    <v-card-title>{{ usersSingle.name }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        Количество репозиториев: {{ usersSingle.public_repos }}
        <br>
        Количество гистов: {{ usersSingle.public_gists }}
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-icon
          class="mr-2"
          small
        >mdi-account-group</v-icon>
        {{ usersSingle.followers }} followers ·
        {{ usersSingle.following }} following
      </v-row>
    </v-card-text>

    <v-card-text
      v-if="usersSingle.email"
    >
      <v-row
        align="center"
        class="mx-0"
      >
        <v-icon
          class="mr-2"
          small
        >mdi-at</v-icon>
        {{ usersSingle.email }}
      </v-row>
    </v-card-text>

    <v-card-text
      v-if="usersSingle.location"
    >
      <v-row
        align="center"
        class="mx-0"
      >
        <v-icon
          class="mr-2"
          small
        >mdi-map-marker</v-icon>
        {{ usersSingle.location }}
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Репозитории:</v-card-title>

    <v-virtual-scroll
      :items="usersSingleRepos"
      item-height="62"
      height="300"
    >
      <template v-slot:default="{ item }">
        <v-list-item :key="item.id" :href="item.html_url">
          <v-list-item-content>
            <v-list-item-title>
              {{ item.name }}
            </v-list-item-title>

            <v-list-item-subtitle>
              {{ item.description }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'UsersSingle',

  computed: {
    ...mapState('users', [
      'isLoading',
      'usersSingle',
      'usersSingleRepos'
    ])
  },

  created () {
    const { username } = this.$route.params

    this.loadUsersSingleByUsername(username)
  },

  methods: {
    ...mapActions('users', [
      'loadUsersSingleByUsername'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
