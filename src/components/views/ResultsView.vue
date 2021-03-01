<template>
  <div id="app">
    <Header
      :numCorrect="answers.numCorrect"
      :numTotal="answers.numTotal"
    />
    <h1>Results</h1>
    <h2> You guessed {{answers.numCorrect}} correct out of {{ answers.numTotal }} questions</h2>
    <router-link to="/quiz" style="font-size: 30px">Play again</router-link>
    <QuestionResult v-for="question in questions" v-bind:key="question.id" v-bind:question="question"/>
  </div>
</template>

<script>
import Header from "../Header.vue";
import QuestionResult from "../QuestionResult.vue"
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
    QuestionResult
  },
};
</script>

<style>
</style>
