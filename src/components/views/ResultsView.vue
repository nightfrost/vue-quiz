<template>
  <div id="app">
    <Header
      :numCorrect="answers.numCorrect"
      :numTotal="answers.numTotal"
    />
    <h1>Results</h1>
    <h2> You guessed {{answers.numCorrect}} correct out of {{ answers.numTotal }} questions</h2>
    <router-link style="margin: 20px" to="/quiz" class="btn btn-primary btn-lg">Play again</router-link>
    <ResultBox v-for="question in questions" v-bind:key="question.id" v-bind:question="question"/>
  </div>
</template>

<script>
import Header from "../Header.vue";
import ResultBox from "../ResultBox.vue"
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
    ResultBox
  },
};
</script>
