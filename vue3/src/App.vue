<template>
 <h1> Dc Heros</h1>
 <ul>
  <li v-for="(hero,index) in dcHeros" v-bind:key="index" >{{index}} {{hero.name}}</li>
 </ul>
 <input v-bind:value="newHero">
</template>

<script>
  export default{
    data() {
      return {
        dcHeros:[
          {name:'Super Girl'},
          {name:'Arrow'},
          {name:'Flash'},
          {name:'Super man'},
          {name:'Bat Man'}
        ],
        newHero:"Aquaman"
      };
    },
  }
</script>
