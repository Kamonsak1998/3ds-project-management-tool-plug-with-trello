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
export const addNameBoard = (state, newNameBoard) =>{
    state.nameBoard = newNameBoard
    localStorage.setItem('nameBoard', newNameBoard)
}
export const addUsername = (state, newUsername) =>{
    state.userName = newUsername
    localStorage.setItem('userName', newUsername)
}
export const addIduser = (state, newIdUser) =>{
    state.idUser = newIdUser
    localStorage.setItem('idUser', newIdUser)
}

export const remove = (state) => {
    state.token = ''
    state.idBoard = ''
    state.startDate = ''
    state.Sprint = ''
    state.nameBoard = ''
    state.userName = ''
    state.idUser = ''
    localStorage.setItem('token', '')
    localStorage.setItem('idBoard', '')
    localStorage.setItem('startDate', '')
    localStorage.setItem('Sprint', '')
    localStorage.setItem('nameBoard', '')
    localStorage.setItem('userName', '')
    localStorage.setItem('idUser', '')

}