<template lang="html">
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-form
              ref="form"
              lazy-validation>
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Login form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-text-field
                    prepend-icon="person"
                    label="User Name"
                    type="text"
                    v-model="username"
                    required>
                    </v-text-field>
                    <v-text-field
                    prepend-icon="person"
                    label="name"
                    type="text"
                    v-model="name"
                    required>
                    </v-text-field>
                    <v-text-field
                    prepend-icon="email"
                    label="email"
                    type="email"
                    v-model="email"
                    required>
                    </v-text-field>
                    <v-text-field
                    prepend-icon="lock"
                    label="Password"
                    type="password"
                    v-model="password"
                    required>
                    </v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                  color="primary"
                  @click="validate">
                    Validate
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  name: 'register',
  data() {
    return {
      username: "",
      name:"",
      email: "",
      password: ""
    }
  },

  methods : {
    validate () {
        if (this.$refs.form.validate()) {
          const username=this.username;
          const name=this.name;
          const email = this.email;
          const password=this.password;
          const val = {username,name,email,password}
          console.log(typeof(val))
          //this.$router.app.$emit("authenticated",true);
          axios.post('http://10.42.0.61:8081/register', {
            username,
            name,
            email,
            password
          })
            .then((res) => {
              console.log('OK');
            })
            .catch((err)=>{
              console.log(err)
            });
        }
      },
    }
}
</script>

<style lang="css" scoped>
</style>
