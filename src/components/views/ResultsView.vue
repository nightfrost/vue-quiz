<template>
  <div id="app">
    <Header
      :numCorrect="answers.numCorrect"
      :numTotal="answers.numTotal"
    ></Header>
    <h1>Results</h1>
    {{ answers.numTotal }}
  </div>
</template>

<script>
import Header from "../Header.vue";
export default {
  name: "ResultsView",
  data() {
    return {
      answers: this.$route.params.answers,
    };
  },
  components: {
    Header,
  },
};
</script>

<style>
</style>
