<template>
  <div>
    <b-jumbotron :class="[question.isCorrect ? 'correct' : 'incorrect'] ">
        <h3>{{question.question}}</h3>
        <p>You answered: {{question.selectedAnswer}}</p>
        <p>The correct answer is: {{question.correct_answer}}</p>
    </b-jumbotron>
  </div>
</template>

<script>

export default {
  props: {
    ['question']: Object},
  data() {
    return {

    };
  },
  methods: {
  },
  computed: {
  },
};
</script>

<style scoped>
p{font-size: 20px; padding: 5px}

.correct {
  background-color: lightgreen;
}

.incorrect {
  background-color: red;
}
</style>