
var app = new Vue({
    el: "#app",
    data:{
        title: "title",
        content: "content",
        color: "red",
        marginTop: "10px",
        width: "100px",
        height: "100px",
        image: "https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.6435-1/172233688_1193275917797110_8507875311041240790_n.jpg?stp=dst-jpg_p240x240&_nc_cat=111&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=tvgybazwwnQAX86KseG&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfAmRTcziI62O5o3a0Z1UTQID96cfO3efX7mpoU1upcPjw&oe=65C3B8C4"
    },
    methods: {
        
    },
    computed: {
      objectStyle(){
        return {
            width: this.width,
            height: this.height, 
            backgroundImage:`url(${this.image})`};
      }
    }
});