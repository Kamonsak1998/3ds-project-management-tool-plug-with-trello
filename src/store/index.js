import Vue from 'vue';
import Vuex from 'vuex'

import { token } from './token'
import { sprint } from './sprint'
import { user } from './user'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        token,
        sprint,
        user
    },
    plugins: [createPersistedState()],
})
