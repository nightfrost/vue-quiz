<template>
  <div id="app">
    <Header :numCorrect="numCorrect" :numTotal="numTotal"></Header>
    <h1 class="center">Welcome to the fancy quiz app!</h1>
    <h3>
      You will be guided through 10 questions, where you will have multiple
      answers available.
    </h3>
    <div class="center">
      <router-link class="btn btn-primary btn-lg" to="/quiz">Start quiz</router-link>
    </div>
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

<style scoped>
body {
  background-color: blue;
}
.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>
