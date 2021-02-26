<template>
  <div>
    <b-jumbotron>
        {{currentQuestion.question}}
    </b-jumbotron>
  </div>
</template>

<script>

export default {
  props: {
    currentQuestion: Object,
  },
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
.list-group {
  margin-bottom: 15px;
}
.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}

.btn {
  margin: 0 5px;
}

.selected {
  background-color: lightblue;
}

.correct {
  background-color: lightgreen;
}

.incorrect {
  background-color: red;
}
</style>