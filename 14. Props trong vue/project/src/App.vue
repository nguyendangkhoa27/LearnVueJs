<template>
  <div id="app">
    <div>{{ title }}</div>
      <ListUser v-bind:title="title" v-on:changeTitle="changeTitle"/>
  </div>
</template>

<script>
import ListUser from "./Components/ListUserComponent.vue"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'title of app'
    }
  },
  components:{
    ListUser
  },
  methods:{
    changeTitle(data){
        this.title = data.title;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
</style>
