<template>
  <div>
    <b-jumbotron :class="[question.isCorrect ? 'correct result shadow' : 'incorrect result shadow'] ">
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
};
</script>

<style scoped>
p{font-size: 20px; padding: 5px}
.result {
  margin: auto;
  width: 66%;
  padding: 20px;
  margin-top: 20px;
}

.correct {
  background-color: lightgreen;
}

.incorrect {
  background-color: red;
}
</style>