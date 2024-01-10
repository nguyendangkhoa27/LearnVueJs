<template>
     <div>
        <div>
            id: {{ user.id }}
        </div>
        <div>
            name: {{ user.name }}
        </div>
        <div>
            age: {{ user.age }}
        </div>
     </div>
</template>

<script>
    var User = {
        name: "User",
        props:{
            user: {
              type: Object,
              default: null
            }
        },
        data(){
            return {
            }
        },
    }
    export default  User; 
</script>

<style scoped>

</style>