export const setUsers = (state, users) => {
  state.users.push(...users)
}

export const setSearchQuery = (state, searchQuery) => {
  state.searchQuery = searchQuery
}

export const setLoading = (state, loading) => {
  state.isLoading = loading
}

export const setUsersSingle = (state, user) => {
  state.usersSingle = user
}

export const setUsersSingleRepos = (state, repos) => {
  state.usersSingleRepos = repos
}
