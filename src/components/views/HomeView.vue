<template>
  <div id="app">
    <Header :numCorrect="numCorrect" :numTotal="numTotal"></Header>
    <h1>Home</h1>
    <router-link to="/quiz">Start quiz</router-link>
  </div>
</template>

<script>
import Header from "../Header.vue";
export default {
  name: "HomeView",
  components: {
    Header,
  },
  data() {
    return {
      numCorrect: 0,
      numTotal: 0,
    };
  },
};
</script>

<style>
</style>
