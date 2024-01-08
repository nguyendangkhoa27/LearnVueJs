var vueInstance = new Vue({
    el: "#app",
    data:{
        title: "This is my vuejs webapp",
        content: "My name is khoa, i am handsome!!!",
        clientX: 0,
        clientY: 0
    },
    methods:{
        showLocationPointer: function(event){
            this.clientX = event.clientX;
            this.clientY = event.clientY;
            console.log(event);
        }
    }
});