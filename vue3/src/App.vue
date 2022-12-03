<template>
  <h1 v-html="title"></h1>
  <p>Someting else</p>
</template>

<script>
  export default{
    data() {
      return {
        title:"<h1> hey vue3 from h1</h1>",
      }
    }
  }
</script>
