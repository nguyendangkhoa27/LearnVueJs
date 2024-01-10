const vueInstance = new Vue({
    el:"#app",
    data: {
        posts:[
          {
            id: Math.random(),
            title: "đây là title của app",
            content: "đây là content",
            status: {
              active: true,
              activeName: "active"
            },
          },
          {
            id: Math.random(),
            title: "đây là title của app",
            content: "đây là content",
            status: {
              active: true,
              activeName: "active"
            },
          },
          {
            id: Math.random(),
            title: "đây là title của app",
            content: "đây là content",
            status: {
              active: true,
              activeName: "active"
            },
          }
        ]
          
    },
    methods: {
      ChangeStatus(post){
        post.status.active = !post.status.active;
        post.status.activeName =  post.status.active ? "active" : "in-active";
      },
    },
    computed: {
        postsActive(){
          return this.posts.filter(x=>{
            return x.status.active;
          })
        }
  }
});
console.log(vueInstance);