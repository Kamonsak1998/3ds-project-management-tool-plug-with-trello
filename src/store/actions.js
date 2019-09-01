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
export function getNameBoard({ commit }, nameBoard) {
  commit('addNameBoard', nameBoard)
}
export function getUsername({ commit }, Username) {
  commit('addUsername', Username)
}
export function getIduser({ commit }, iduser) {
  commit('addIduser', iduser)
}