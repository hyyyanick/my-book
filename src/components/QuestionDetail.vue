<template>
  <div>
    <h3>{{ questionDetail.question }}</h3>
    <div v-for="(choice, index) in questionDetail.choices" :key="index">
      <input type="checkbox" :id="choice" :value="choice" v-model="questionDetail.response">
      <label :for="choice">{{choice}}</label>
    </div>
    <button @click="answerQuestion">Submit my answer</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "QuestionDetail",
  beforeCreate() {
    this.$store.dispatch("getQuestionDetail", this.$route.params.id);
  },
  computed: mapState(["questionDetail"]),
  methods: {
    answerQuestion() {
      this.$store.dispatch("answerQuestion", this.questionDetail);
    }
  }
};
</script>