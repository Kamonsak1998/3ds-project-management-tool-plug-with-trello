export const addToken = (state, newToken) => {
    state.token = newToken
    localStorage.setItem('token', newToken)
    

}
export const addUser = (state, newUser) => {
    state.idUser = newUser
    localStorage.setItem('token', newUser)
    

}
export const removeToken = (state) => {
    state.token = ''
    state.idUser= ''
    localStorage.setItem('token', '')
    localStorage.setItem('idUser', '')

}