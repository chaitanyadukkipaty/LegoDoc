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
                  <v-toolbar-title>Upload Document</v-toolbar-title>
                </v-toolbar>
                <v-card-text>

                    <v-text-field
                    label="Name of file"
                    type="text"
                    v-model ="name"
                    required>
                    </v-text-field>

                    <v-select
                    :items="items"
                    v-model="type"
                    label="Type of Document"
                    ></v-select>

                    <v-text-field
                    label="Description"
                    type="text"
                    v-model ="des"
                    required>
                    </v-text-field>
                    <v-flex>
                    <v-btn raised class="primary" @click="onPickFile">Select File</v-btn> <p v-if="filename "> {{filename}} </p>
                    </v-flex>
                    <input type="file" style="display: none" ref="fileInput" @change="onFilePicked">
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                  color="primary"
                  @click="validate">
                    Upload
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
  name: 'btn',
  data() {
    return {
    name:"",
    des :"",
    type:"",
    userfile:null,
    filename :"",
    items: ['Designers', 'Freelancer', 'Developers', 'Small Business']
    }
  },
  methods: {
    validate() {
      //console.log(this.name,this.des,this.type)
      if (this.$refs.form.validate()) {
          const name=this.name;
          const des=this.des;
          const type = this.type;
          const userfile = this.userfile;
          //this.$router.app.$emit("authenticated",true);
          axios.post('http://10.42.0.61:8081/fileupload', {
            name,
            des,
            type,
            userfile
          })
            .then((res) => {
              console.log('OK');
            })
            .catch();
        }
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },

    onFilePicked(event) {
      const files = event.target.files;
      this.userfile = files[0];
      let filename = files[0].name;
      console.log(this.filename);
      this.filename = filename;
      console.log(this.filename);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
