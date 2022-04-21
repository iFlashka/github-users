export const usersFilteredByNickname = state => {
  const searchQuery = state.searchQuery ?? ''

  return state.users.filter(item => item.login.includes(searchQuery))
}

export const usersLastId = state => {
  return state.users[state.users.length - 1]?.id
}
