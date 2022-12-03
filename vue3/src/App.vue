<template>
  <h1 v-show="isShowing" >{{count}}</h1>

  <p>Someting else</p>
</template>

<script>
  export default{
    data() {
      return {
        title:"<h1> hey vue3 from h1</h1>",
        isShowing: true,
        count: 0,
      };
    },
    mounted() {
      setInterval( () => {
        this.count++;
      },1000);
    }
  }
</script>
