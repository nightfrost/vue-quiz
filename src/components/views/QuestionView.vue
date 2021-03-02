<!--  Component representing the quiz page --> 
<template>
  <div id="app">
    <Header :numCorrect="numCorrect" :numTotal="numTotal" />
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="12" offset="0">
          <QuestionBox
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
            :increment="increment"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import QuestionBox from "../QuestionBox";
import Header from "../Header.vue";
export default {
  name: "QuestionView",
  components: {
    Header,
    QuestionBox,
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
    };
  },
  methods: {
    /**
     * Behaviour for clicking next question. If there are no more questions, routerpush to ResultsView along with the questions state.
     */
    next() {
      this.index++;
      if (this.index === this.questions.length) {
        this.$router.push({
          name: "results",
          params: {
            questions: this.questions,
            answers: { numTotal: this.numTotal, numCorrect: this.numCorrect },
          },
        });
      }
    },
    /**
     * Increments the question and correct answer count. Also saves the users answer and whether the input was correct.
     */
    increment(isCorrect, selectedAnswer) {
      if (isCorrect) {
        this.numCorrect++;
      }
      this.questions[this.index].selectedAnswer = selectedAnswer;
      this.questions[this.index].isCorrect = isCorrect;
      this.numTotal++;
    },
  },
  mounted: function () {
    fetch("https://opentdb.com/api.php?amount=10&category=27&type=multiple", {
      method: "get",
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        this.questions = jsonData.results;
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>