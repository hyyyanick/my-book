<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <router-link to="/question-list">Start questions</router-link>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  props: {
    msg: String
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
