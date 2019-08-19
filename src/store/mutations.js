export const addToken = (state, newToken) => {
    state.token = newToken
    localStorage.setItem('token', newToken)


}
export const addBoard = (state, newBoard) => {
    state.idBoard = newBoard
    localStorage.setItem('idBoard', newBoard)
    

}
export const removeToken = (state) => {
    state.token = ''
    state.idBoard = ''
    localStorage.setItem('token', '')
    localStorage.setItem('idBoard', '')

}