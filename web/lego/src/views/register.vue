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
                    <!-- <vue-recaptcha sitekey="Your key here">
                      <button>Click me</button>
                    </vue-recaptcha> -->
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
import VueRecaptcha from 'vue-recaptcha';
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
  // mounted() {
  //   let recaptchaScript = document.createElement('script')
  //   recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit')
  //   document.head.appendChild(recaptchaScript);
  //   let recaptchaScript1 = document.createElement('script')
  //   recaptchaScript1.setAttribute('src', 'https://unpkg.com/vue-recaptcha@latest/dist/vue-recaptcha.js')
  //   document.head.appendChild(recaptchaScript1);
  // },
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
          axios.post('http://192.168.43.229/register', {
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
