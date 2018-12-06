<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
    <Questions :questions="questionsData" />
  </div>
</template>

<script>
import Questions from './Questions.vue';
import questionsData from '../assets/questions-data.json';

export default {
  name: 'Dashboard',
  props: {
    msg: String
  },
  data(){
    return {
      questionsData
    }
  },
  components: {
    Questions
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
