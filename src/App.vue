<template>
  <div id="app">
    <Dashboard :msg="title"/>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'app',
  data(){
    return {
      title: ""
    }
  },
  mounted() {
    this.title = "This is a question form !"
  },
  components: {
    Dashboard
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
}
</style>
