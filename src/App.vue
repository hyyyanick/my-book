<template>
  <div id="app">
    <h3>{{title}}</h3>

    <router-view></router-view>
  </div>
</template>  

<script>
export default {
  name: "app",
  data() {
    return {
      title: ""
    };
  },
  mounted() {
    this.title = "This is a question form !";
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
</style>