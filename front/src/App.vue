<template>
  <div id="nav">
    <router-link to="/">Create Ticket</router-link> |
    <router-link to="/listTickets">List Ticket</router-link>
  </div>
  <router-view />
</template>
<script>
export default {
  data: function () {
    return {
      data: "",
    };
  },
  methods: {
    async call() {
      this.data = await this.postData();
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
