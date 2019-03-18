<template>
  <div class="">


  <v-app id="inspire">

    <vue-particles
    color="#dedede"
    :particleOpacity="1"
    :particlesNumber="100"
    shapeType="circle"
    :particleSize="5"
    linesColor="#000"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="150"
    :moveSpeed="3"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="push"
    >
    </vue-particles>
    <v-content>
      <v-container fluid fill-height>

        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-dialog
        v-model="dialog"
        width="500"
      >
            <v-card class="elevation-12">
              <v-form
              ref="form"
              v-model="valid"
              lazy-validation>
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-text-field
                    prepend-icon="person"
                    label="Login ID"
                    type="text"
                    v-model="id"
                    :rules="idRules"
                    required>
                    </v-text-field>
                    <v-text-field
                    prepend-icon="lock"
                    label="Password"
                    type="password"
                    v-model="password"
                    :rules="passwordRules"
                    required>
                    </v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                  :disabled="!valid"
                  color="primary"
                  @click="validate">
                    Validate
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
  </div>
</template>

<script>
import axios from 'axios';
var {ip} = require('../IP.js')
  export default {
    name: "login",
    data() {
      return {
        dialog: true,
        valid: true,
        id: '',

        category: 0,

        idRules: [
          v => !!v || 'Login ID is required'
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Password is required'
        ],
      }
    },
    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          const username=this.id;
          const password=this.password;
          //this.$router.app.$emit("authenticated",true);
          axios.post(`http://${ip}/login`, {
            username,
            password
          })
            .then((res) => {
              this.$emit("authenticated",true);
              this.$emit("username",this.id);
              this.$router.replace({ name: 'Home', params: { id: this.id } });
            })
            .catch();
        }
      },
    }
}
</script>
<style scoped>

</style>
