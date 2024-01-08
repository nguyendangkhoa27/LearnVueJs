
var app = new Vue({
    el: "#app",
    data:{
        title: "title",
        content: "content",
        active: false,
        published: 100
    },
    methods: {
        increase: function(x){
           this.published += x;
           console.log("run method increase")
        },
        downPublished: function(){
            return published
        },
        changeStatus(){
            this.active = !this.active;
            this.test = !this.test;
        }
    },
    computed: {
        increaseC: function(){
            this.published++;
            console.log("run computed increase");
        },
        status(){
            return {
                active: this.active,
                "in-active": !this.active
            }
        },
    }
});
console.log(app.status);