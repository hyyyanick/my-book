<template>
  <ol>
    <li v-for="item in questions" :key="item.id">
      <h4>{{item.question}}</h4>
      <div v-for="(choice, index) in item.choices" :key="index">
        <input type="checkbox" :id="choice" :value="choice" v-model="item.response">
        <label :for="choice">{{choice}}</label>
      </div>

      <button @click="answerQuestion(item)">Answser</button>
    </li>

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
  },

  methods: {
    answerQuestion(item) {
      this.$store.commit("anwserQuestion", item);
    }
  }
};
</script>

