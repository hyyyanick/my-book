<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
    <BookList :questions="Questions" />
  </div>
</template>

<script>
import BookList from './BookList.vue';
import Questions from '../assets/questions-data.json';

export default {
  name: 'Dashboard',
  props: {
    msg: String
  },
  data(){
    return {
      Questions
    }
  },
  components: {
    BookList
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
