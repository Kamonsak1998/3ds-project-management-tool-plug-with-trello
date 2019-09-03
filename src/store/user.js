export const user = {
    namespaced: true,
    actions: {
        getIduser: ({ commit }, idMember) => {
            commit('addIduser', idMember)
        },
        getUsername: ({ commit }, Username) => {
            commit('addUsername', Username)
        },
        getNameBoard: ({ commit }, nameBoard) => {
            commit('addNameBoard', nameBoard)
        },
        getBoard: ({ commit }, idBoard) => {
            commit('addBoard', idBoard)
        }
    }, state: {
        idMember: null,
        username: null,
        nameBoard: null,
        idBoard: null
    }, mutations: {
        addIduser: (state, idMember) => {
            state.idMember = idMember
        },
        addUsername: (state, newUsername) => {
            state.username = newUsername
        },
        addNameBoard: (state, newNameBoard) => {
            state.nameBoard = newNameBoard
        },
        addBoard: (state, idBoard) => {
            state.idBoard = idBoard
        },
        remove: (state) => {
            state.idBoard = null
            state.nameBoard = null
            state.username = null
            state.idMember = null
            localStorage.setItem('idBoard', null)
            localStorage.setItem('nameBoard', null)
            localStorage.setItem('username', null)
            localStorage.setItem('idMember', null)
        }

    }, getters: {
        idMember: state => state.idMember,
        username: state => state.username,
        nameBoard: state => state.nameBoard,
        idBoard: state => state.idBoard
    }
}