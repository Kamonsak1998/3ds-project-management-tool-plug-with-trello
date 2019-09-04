export const sprint = {
    namespaced: true,
    actions: {
        getSprint: ({ commit }, Sprint) => {
            commit('addSprint', Sprint)
        },
        getStartDate: ({ commit }, startDate) => {
            commit('addStartDate', startDate)
        }
    },
    mutations: {
        addSprint: (state, newSprint) => {
            state.Sprint = newSprint
        },
        addStartDate: (state, newDate) => {
            state.startDate = newDate
        },
    },
    state: {
        sprint: null,
        startDate: null
    },
    getters: {
        Sprints: state => state.sprint,
        startDates: state => state.startDate
    }
}