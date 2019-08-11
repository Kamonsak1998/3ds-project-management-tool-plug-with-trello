export function getToken({ commit }, token) {
  commit('addToken', token)
}
export function getUser({ commit }, idUser) {
  commit('addUser', idUser)
}