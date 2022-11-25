const template = `<div>
    <h1> Hii {{ title }}</h1>
    </div>`;

const data = function data(){
    return {
        title: 'Vue3 Tutorial',
    };
}
const APP = { data,template };
const app = Vue.createApp(APP).mount("#vue-app");