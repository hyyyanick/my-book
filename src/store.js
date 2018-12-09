import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

export default new Vuex.Store({
    state: {
        questions: [],
        questionDetail: {}
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
        },
        getQuestionDetail({ commit }, qId) {
            axios.get("http://localhost:8080/items/" + qId)
                .then(res => {
                    commit("setQuestionDetail", res.data);
                })
                .catch(error => { console.log(error) });
        },
        answerQuestion({ commit }, payLoad) {
            axios.put("http://localhost:8080/items/" + payLoad.id, payLoad)
                .then(res => {
                    commit("answerQuestion", res.data);
                })
                .catch(error => { console.log(error) });
        }
    },
    mutations: {
        setQuestions(state, data) {
            state.questions = data;
        },
        setQuestionDetail(state, data) {
            state.questionDetail = data;
            console.log(data);
        },
        answerQuestion(state, qapayload) {
            state.questions.filter(q => {
                if (q.id == qapayload.id) q.response = qapayload.response;
            });
        }
    },

});