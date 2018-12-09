<template>
  <ol>
    <li v-for="item in questions" :key="item.id">
      <h4>
        <router-link :to="{name: 'question-detail', params: {id:item.id}}">{{item.question}}</router-link>
      </h4>
      <p v-if="item.response.length>0">My answser is: {{item.response}}</p>
    </li>
    <button @click="addQuestion()">Add a question</button>
    <router-view></router-view>
  </ol>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Questions",
  //   computed: mapGetters({
  //     questions: "getQuestionsList"
  //   })

  // computed: {
  //   ...mapGetters({
  //     questions: "getQuestionsList"
  //   })
  // },
  computed: {
    ...mapState(["questions"])
  },
  mounted() {
    this.$store.dispatch("getQuestionsList");
  }
};
</script>

