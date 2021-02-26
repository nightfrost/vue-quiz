<template>
  <div id="app">
<Header :numCorrect="numCorrect" :numTotal="numTotal"></Header>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="12" offset="0">
          <QuestionBox
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
            :increment="increment"
          ></QuestionBox>
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
    next() {
      this.index++;
      if(this.index === this.questions.length){
          this.$router.push({name: 'results', params: {answers:{numTotal: this.numTotal, numCorrect: this.numCorrect }}})
      }
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
      }
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
