<template>
 <h1> Dc Heros</h1>
 <ul>
  <li v-for="(hero,index) in dcHeros" v-bind:key="index" >{{index}} {{hero.name}}</li>
 </ul>
 <input :value="newHero">
 <button v-bind:disabled="isDisabled" >Add hero</button>
 <br> <br>
 <input :[attribute]="newHero2"> <!-- dynamic attribute binding -->

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
        newHero:"Aquaman",
        newHero2:"SpiderMan",
        isDisabled: true,
        attribute: "value"
      };
    },
  }
</script>
