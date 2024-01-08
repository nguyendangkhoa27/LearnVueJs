var vueInstance = new Vue({
    el:'#app',
    data: {
        title:"this is title",
        content: "this is content",
        hello: "",
    },
    methods:{
        sayHello: function(){
            this.hello = "Hello VueJs";
        }
    },
    computeds: {
        
    }
})