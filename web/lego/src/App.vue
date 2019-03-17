<template>
  <div id="app">
    <head>
      <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">

    </head>
    <v-app id="inspire">
      <v-toolbar dark color="#0356B3">
        <v-toolbar-title class="white--text">Lego Doc</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/home" v-if="authenticated == false" class="font-weight-regular">Home</v-btn>
          <v-btn flat to="/home" v-if="authenticated" class="font-weight-regular">Home</v-btn>
          <v-btn flat to="/upload" v-if="authenticated" class="font-weight-regular">Upload</v-btn>
          <v-btn flat to="/login" v-if="authenticated == false" class="font-weight-regular">Login</v-btn>
          <v-btn flat to="/register" v-if="authenticated == false" class="font-weight-regular">Register</v-btn>
          <v-btn flat v-if="authenticated" to="/" v-on:click.native="logout()" replace class="font-weight-regular">Logout</v-btn>
          <!-- <v-btn flat v-if="authenticated" to="/dashMembers" replace>Members</v-btn>
          <v-btn flat v-if="authenticated" to="/dashAdd" replace>Add Member</v-btn>
          <v-btn flat v-if="authenticated" to="/" v-on:click.native="logout()" replace>Logout</v-btn> -->
        </v-toolbar-items>
      </v-toolbar>
      <router-view v-bind:authenticated="authenticated" @authenticated="setAuthenticated"
                    v-bind:username="username" @username="setUsername"
       />
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      authenticated: false,
      username: '1234'
    }
  },
  mounted() {
          if(!this.authenticated) {
              this.$router.replace({ name: "Home" });
          }
      },
  methods: {
      setAuthenticated(status) {
          this.authenticated = status;
      },
      setUsername(username) {
          this.username = username;
      },
      logout() {
          this.authenticated = false;
      }
  }

}
</script>

<style>
#app {
background: #BBDEFB;
}
</style>
