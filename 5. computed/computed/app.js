var app = new Vue({
    el: "#app",
    data:{
        title: "title",
        content: "content",
        published: 100
    },
    methods: {
        increase: function(x){
           this.published += x;
           console.log("run method increase")
        },
        downPublished: function(){
            return published
        }
    },
    computed: {
        increaseC: function(){
            this.published++;
            console.log("run computed increase");
        }
    }
});
var app2 = new Vue({
    el: "#app2",
    data:{
        a:0,
        b:0,
        number: 10
    },
    methods: {
        addA: function(a){
            console.log("run a" +a);
            return this.number + this.a;
        },
        addB: function(){
            console.log("run b");
            return this.number + this.b;
        },
        addC: function(){
            console.log("run c");
        }
    },
    computed: {
        
    }
});