<template>
  <div class="users-index mt-5">
    <v-text-field
      @input="setSearchQuery"
      :value="searchQuery"
      label="Поиск"
    ></v-text-field>

    <v-virtual-scroll
      class="users-index"
      height="600"
      item-height="150"
      :items="usersFilteredByNickname"
      bench="10"
    >
      <template #default="{ item }">
        <v-card
          class="my-2"
          max-width="800"
          outlined
          :href="`/users/${item.login}`"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                {{ item.login }}
              </v-list-item-title>

              <v-list-item-subtitle>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, et?</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="100"
              rounded
            >
              <v-img
                :src="item.avatar_url"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
        <v-btn
          class="mx-auto my-5"
          color="primary"
          block
          :disabled="isLoading"
          @click="loadUsers({
            since: usersLastId
          })"
        >
          Загрузить еще
        </v-btn>
      </template>
    </v-virtual-scroll>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'

export default {
  name: 'UsersIndex',

  data () {
    return {
      search: ''
    }
  },

  computed: {
    ...mapGetters('users', [
      'usersFilteredByNickname',
      'usersLastId'
    ]),

    ...mapState('users', [
      'searchQuery',
      'isLoading'
    ])
  },

  methods: {
    ...mapActions('users', [
      'loadUsers'
    ]),

    ...mapMutations('users', [
      'setSearchQuery'
    ])
  },

  created () {
    this.loadUsers()
  }
}
</script>

<style lang="scss" scoped>
.users-index {
  width: 800px;
  margin: 0 auto;
}
</style>
