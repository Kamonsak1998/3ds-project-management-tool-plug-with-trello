export function getToken({ commit }, token) {
  commit('addToken', token)
}
export function getBoard({ commit }, idBoard) {
  commit('addBoard', idBoard)
}