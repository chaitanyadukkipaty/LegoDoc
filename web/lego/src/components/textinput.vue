<template lang="html">
  <v-app id="inspire">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <v-form
          ref="form"
          v-model="valid"
          lazy-validation>
          <v-container >
            <v-flex xs10 offset-xs1>
                <v-text-field
                label="Title"
                type="text"
                v-model="name"
                required>
                </v-text-field>
            </v-flex>
            <v-flex xs10 offset-xs1>
                <v-select
                  v-model="typeSelect"
                  :items="typeList"
                  label="Type"
                ></v-select>
            </v-flex>
            <v-flex xs10 offset-xs1>
                <v-textarea
                  outline
                  name="des"
                  label="Description"
                  v-model="des"
                ></v-textarea>
            </v-flex>

            </v-container>
          </v-form>

          <editor/>
          <v-flex xs8 offset-xs2>
          <v-alert
        :value="true"
        type="info"
      >
        Use ~ to create input text, eg: ~Name~
      </v-alert>
    </v-flex>
          <v-flex xs10 offset-xs9>
          <v-btn @click="clickme" class="sai" color="primary" dark right large>Upload</v-btn></v-flex>
        </v-flex>



      </v-layout>
    </v-container>
    <v-snackbar
       v-model="snackbar"
       :timeout="4000"
       :top="true"
     >
       {{ this.text }}
       <v-btn
         color="pink"
         flat
         @click="snackbar = false"
       >
         Close
       </v-btn>
     </v-snackbar>
  </v-app>
</template>

<script>
import editor from './editor.vue'
import axios from 'axios';
export default {
  name: 'textinput',
  components: {
    editor
  },
  props: ["username"],
  data() {
    return {
      snackbar: false,
      valid: false,
      text: '',
      name: '',
      des: '',
      typeSelect: '',
      typeList: [
          'Freelancer',
          'Software',
          'Writers',
          'Photography',
          'Wills',
          'Real Estate',
          'Personal',
          'Designer',
          'Sales & Purchase',
          'MBA'
        ]
    }
  },
  methods: {
    clickme() {
      //var btn = document.querySelector(".sai");
    //  var content = document.querySelector(".getcontent");
      var editorContent = document.querySelector(".editor");
      var s = editorContent.innerHTML;
      console.log(this.username);
      const username = this.username;
      const name = this.name;
      const des = this.des;
      const type = this.typeSelect;
      const template = s;
      axios.post('http://192.168.43.229:8081/uploadtemplate', {
        username,
        name,
        des,
        type,
        template
       })
         .then((res) => {
           console.log(res.data);
           this.array = res.data;
           this.text = "Successful upload";
         })
         .catch((err) => {
           this.text = "Unsucessful upload";
         });
         this.snackbar = true;
    }
  }
}
</script>

<style lang="css" scoped>

</style>
