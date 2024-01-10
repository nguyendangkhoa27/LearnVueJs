const vueInstance = new Vue({
    el:"#app",
    data: {
          title: "đây là title của app",
          content: "đây là content",
          style: {
              display: "flex",
              alignItems: "center",
              justifuContent: "Center"
          },
          status: {
            active: true,
          },
          hello(){
            alert(this.title);
          }
    },
    methods: {
        ChangeStatus(event){
            alert(event.target)
            this.status.active = !this.status.active;
        },
    },
    computed: {
        ChangeStatuss(){
            return this.status.active ? "active" : "in-active";
          }
    }
});