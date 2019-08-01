export const addToken = (state, newToken) => {
    state.token = newToken
    localStorage.setItem('token',newToken)
}
export const removeToken = (state) => {
    state.token = ''
    localStorage.setItem('token','')
}