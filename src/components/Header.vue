<!-- Header component --> 
<template>
  <div>
    <b-nav tabs>
      <b-nav-item style="font-size: 20px" disabled>Fancy quiz app</b-nav-item>
      <b-nav-item style="align-self: center" disabled
        >Counter: {{ numCorrect }}/{{ numTotal }}</b-nav-item
      >
    </b-nav>
  </div>
</template>

<script>
export default {
  props: ["numCorrect", "numTotal"],
};
</script>