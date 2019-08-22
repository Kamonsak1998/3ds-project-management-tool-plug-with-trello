export const addToken = (state, newToken) => {
    state.token = newToken
    localStorage.setItem('token', newToken)
}
export const addBoard = (state, newBoard) => {
    state.idBoard = newBoard
    localStorage.setItem('idBoard', newBoard)
}
export const addStartDate = (state, newDate) => {
    state.startDate = newDate
    localStorage.setItem('startDate', newDate)
}
export const addSprint = (state, newSprint) => {
    state.Sprint = newSprint
    localStorage.setItem('Sprint', newSprint)
}

export const removeToken = (state) => {
    state.token = ''
    state.idBoard = ''
    state.startDate = ''
    state.Sprint = ''
    localStorage.setItem('token', '')
    localStorage.setItem('idBoard', '')
    localStorage.setItem('startDate', '')
    localStorage.setItem('Sprint', '')

}