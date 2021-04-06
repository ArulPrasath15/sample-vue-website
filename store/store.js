import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        from:'',
        to:'',
        date:''
    },
    mutations: {
        from (state,from) {
            state.from=from
        },
        to (state,to) {
            state.to=to
        },
        date (state,date) {
            state.date=date
        }
    }
})
export default store;