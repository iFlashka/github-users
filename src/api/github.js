import Instance from './instance'

const endpoint = 'https://api.github.com'

export const getToken = code => {
  return Instance.post('https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token', {
    client_id: process.env.VUE_APP_CLIENT_ID,
    code,
    client_secret: process.env.VUE_APP_CLIENT_SECRET
  })
}

export const getUsers = (params) => {
  return Instance.get(`${endpoint}/users`, {
    params
  })
}

export const getUser = (username) => {
  return Instance.get(`${endpoint}/users/${username}`)
}

export const getUserRepos = (username) => {
  return Instance.get(`${endpoint}/users/${username}/repos`)
}
