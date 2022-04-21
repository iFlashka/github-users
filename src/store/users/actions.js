import { getUsers, getUser, getUserRepos } from '@/api/github'

export const loadUsers = async ({ commit }, query = {}) => {
  try {
    commit('setLoading', true)

    const { data } = await getUsers(query)

    commit('setUsers', data)
  } catch (error) {
    console.error(error)
  } finally {
    commit('setLoading', false)
  }
}

export const loadUsersSingleByUsername = async ({ commit }, nickname) => {
  try {
    commit('setLoading', true)

    const [{ data: user }, { data: userRepos }] = await Promise.all([
      getUser(nickname),
      getUserRepos(nickname)
    ])

    commit('setUsersSingle', user)
    commit('setUsersSingleRepos', userRepos)
  } catch (error) {
    console.error(error)
  } finally {
    commit('setLoading', false)
  }
}
