<template>
 <h1> Dc Heros</h1>
 <ul>
  <li v-for="(hero,index) in dcHeros" v-bind:key="index" >{{index}} {{hero.name}}</li>
 </ul>
 <!-- <input v-model.trim="newHero"> --> <!-- removes white spaces -->  
 <!--  <input v-model.lazy="newHero"> --> <!-- updates after defccus --> 
 <!-- <textarea v-model.lazy="newHero"></textarea> -->
 <textarea v-model.number="newHero"></textarea>
 <button v-bind:disabled="isDisabled" >Add hero</button>
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
        isDisabled: false,
        attribute: "value"
      };
    },
  }
</script>
