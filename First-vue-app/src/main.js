const app = Vue.createApp({
    data(){
        return {
            title: 'Vue3 Tutorial',
        };
    },
    template: `<div>
        <h1> Hii {{ title }}</h1>
        </div>`
});
app.mount("#vue-app");