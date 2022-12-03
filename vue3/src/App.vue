<template>
  <h1 v-if="(2*3 == 5)" v-html="title"></h1>
  <h3 v-else-if="(2*2 === 4)">this is else if</h3>
  <h2 v-else >This is v-else part</h2>

  <p>Someting else</p>
</template>

<script>
  export default{
    data() {
      return {
        title:"<h1> hey vue3 from h1</h1>",
        isShowing: true,
      }
    }
  }
</script>
