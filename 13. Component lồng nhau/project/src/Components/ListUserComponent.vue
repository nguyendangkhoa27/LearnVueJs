<template>
    <div>
        <ul>
            <li v-for="user in listUser" v-bind:key="user.id">{{ user.name }}</li>
        </ul>
    </div>
</template>


<script>
export default {
  name: "List-User",
  data() {
    return {
      listUser: [
        { id: 1, name: "User 1", age: 25, email: "user1@example.com" },
        { id: 2, name: "User 2", age: 30, email: "user2@example.com" },
        { id: 3, name: "User 3", age: 22, email: "user3@example.com" },
        { id: 4, name: "User 4", age: 28, email: "user4@example.com" },
        { id: 5, name: "User 5", age: 35, email: "user5@example.com" },
        { id: 6, name: "User 6", age: 27, email: "user6@example.com" },
        { id: 7, name: "User 7", age: 32, email: "user7@example.com" },
        { id: 8, name: "User 8", age: 29, email: "user8@example.com" },
        { id: 9, name: "User 9", age: 26, email: "user9@example.com" },
        { id: 10, name: "User 10", age: 31, email: "user10@example.com" },
      ],
    };
  },
};
</script>

<style scoped>
</style>