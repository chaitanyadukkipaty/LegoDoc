<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-form
              ref="form"
              v-model="valid"
              lazy-validation>
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Login form</v-toolbar-title>
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
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';
  export default {
    name: "login",
    data() {
      return {
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
          axios.post('http://192.168.0.104:8081/login', {
            username,
            password
          })
            .then((res) => {
              this.$emit("authenticated",true);
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
