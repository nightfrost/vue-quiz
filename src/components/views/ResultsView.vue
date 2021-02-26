<template>
  <div id="app">
    <Header
      :numCorrect="answers.numCorrect"
      :numTotal="answers.numTotal"
    ></Header>
    <h1>Results</h1>
    {{ answers.numTotal }}
    <div v-for="question in questions" v-bind:key="question.id">
      <p>{{question.selectedAnswer}}</p>
      <p>{{question.correct_answer}}</p>
    </div>
  </div>
</template>

<script>
import Header from "../Header.vue";
export default {
  name: "ResultsView",
  data() {
    return {
      answers: this.$route.params.answers,
      questions: this.$route.params.questions
    };
  },
  components: {
    Header,
  },
};
</script>

<style>
</style>
