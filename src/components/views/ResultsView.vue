<template>
  <div id="app">
  <h1>Results</h1>
  {{answers.numTotal}}
  </div>
</template>

<script>

export default {
  name: "ResultsView",
   data() {
    return {
      answers: this.$route.params.answers,
    };
  }
};
</script>

<style>

</style>
