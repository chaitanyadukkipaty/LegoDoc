<template>
  <div id="app">
    <head>
      <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">
    </head>
    <v-app id="inspire">
      <v-toolbar dark color="primary">
        <v-toolbar-title class="white--text">CSI Management System</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/home" v-if="authenticated == false">Home</v-btn>
          <v-btn flat to="/upload" v-if="authenticated == false">Upload</v-btn>
          <v-btn flat to="/login" v-if="authenticated == false">Login</v-btn>
          <!-- <v-btn flat v-if="authenticated" to="/dashMembers" replace>Members</v-btn>
          <v-btn flat v-if="authenticated" to="/dashAdd" replace>Add Member</v-btn>
          <v-btn flat v-if="authenticated" to="/" v-on:click.native="logout()" replace>Logout</v-btn> -->
        </v-toolbar-items>
      </v-toolbar>
      <router-view @authenticated="setAuthenticated" />
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      authenticated: false
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
      logout() {
          this.authenticated = false;
      }
  }

}
</script>

<style>
#app {

}
</style>
