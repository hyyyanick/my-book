import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

export default new Vuex.Store({
    state: {
        questions: []
    },
    actions: {
        getQuestionsList({ commit }) {
            axios.get("http://localhost:8080/items")
                .then(res => {
                    console.log(res.data);
                    const questions = res.data;
                    commit("setQuestions", questions);
                })
                .catch(error => { console.log(error) });
        }
    },
    mutations: {
        setQuestions(state, data) {
            state.questions = data;
        },
        anwserQuestion(state, qapayload) {
            state.questions.filter(q => {
                if (q.id == qapayload.id) q.response = qapayload.response;
            });
        }
    },

});