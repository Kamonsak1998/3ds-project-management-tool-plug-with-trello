export const sprint = {
    namespaced: true,
    actions: {
        getSprint: ({ commit }, sprint) => {
            commit('addSprint', sprint)
        },
        getStartDate: ({ commit }, startDate) => {
            commit('addStartDate', startDate)
        }
    },
    mutations: {
        addSprint: (state, newSprint) => {
            state.sprint = newSprint
        },
        addStartDate: (state, newDate) => {
            state.startDate = newDate
        },
        remove: (state) => {
            state.sprint = null
            state.startDate = null
            localStorage.setItem('sprint', null);
            localStorage.setItem('startDate', null);
        }
    },
    state: {
        sprint: null,
        startDate: null
    },
    getters: {
        sprint: state => state.sprint,
        startDate: state => state.startDate
    }
}