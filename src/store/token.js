
export const token = {
    namespaced: true,
    actions: {
        getToken: ({ commit }, token) => {
            commit('addToken', token)
        }
    },
    state: {
        token: null,
    },

    mutations: {
        addToken: (state, newToken) => {
            state.token = newToken
            localStorage.setItem('token',newToken)
        },
        remove: (state) => {
            state.token = null
            localStorage.setItem('token', null);
        }
    },
    getters: {
        token: state => state.token
    }
}