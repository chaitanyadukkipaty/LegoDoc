<template lang="html">
  <v-app id="inspire">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <v-form
          ref="form"
          v-model="valid"
          lazy-validation>
                <v-text-field
                label="Title"
                type="text"
                v-model="name"
                required>
                </v-text-field>
                <v-textarea
                  outline
                  name="des"
                  label="Description"
                  v-model="des"
                ></v-textarea>
                <v-select
                  v-model="typeSelect"
                  :items="typeList"
                  label="Type"
                ></v-select>
          </v-form>
          <!-- <div class="heading">Your Important Document</div>
          <div id="calden" class="editor" contenteditable style="border-style: solid; border-width: 2px;">
            <p>Your document goes here</p>
          </div> -->
          <editor/>
        </v-flex>
        <v-btn @click="clickme" class="sai" block color="secondary" dark>Block Button</v-btn>
      </v-layout>
    </v-container>
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
      valid: false,
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
         })
         .catch();
    }
  }
}
</script>

<style lang="css" scoped>

</style>
