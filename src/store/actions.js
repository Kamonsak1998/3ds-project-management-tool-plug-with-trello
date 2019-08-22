export function getToken({ commit }, token) {
  commit('addToken', token)
}
export function getBoard({ commit }, idBoard) {
  commit('addBoard', idBoard)
}
export function getStartDate({ commit }, startDate) {
  commit('addStartDate', startDate)
}
export function getSprint({ commit }, Sprint) {
  commit('addSprint', Sprint)
}