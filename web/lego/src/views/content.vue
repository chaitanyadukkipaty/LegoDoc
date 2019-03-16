<template lang="html">
  <div id="app">
    <v-app id="inspire">
      <v-container fluid grid-list-xl>
          <v-card>
            <v-card-title class="headline  text-lg-left blue--text">{{this.title}}</v-card-title>

            <v-card-text class="text-lg-left">
              <h3>Type: {{this.type}}<br />
              Description: {{this.des}}<br />
              Data: {{this.date}}<br />
              Username: {{this.username}}<br />
            </h3>
            </v-card-text>
            <editor/>
            <v-btn @click="clickme" class="sai" block color="primary" dark>Block Button</v-btn>
        </v-card>

    </v-container>
  </v-app>
</div>
</template>

<script>
import axios from 'axios';
import commets from '../components/comments.vue'
import editor from '../components/editor.vue'
export default {
  name: 'templatecontent',
  _id: '',
  components: {
    commets,
    editor
  },
  data() {
    return {
      title: 'Calden',
      des: 'Some Description',
      date: '12/02/1999',
      type: 'Chaitanya did not gave',
      username: 'calden',
      template: '<h1>Calde</h1>'
    }
  },
  methods: {
    clickme() {
      var editorContent = document.querySelector(".editor");
      //var s = editorContent.innerHTML;
      const old = editorContent.textContent;
      console.log(old);
      const body = document.body;
      let s = body.innerHTML;
      body.textContent = editorContent.textContent;
      document.execCommandShowHelp;
      body.style.whiteSpace = "pre";
      window.print();
      location.reload();
    }
  },
  created() {
         this._id = this.$route.params._id;
         const _id = this._id;
         axios.post('http://192.168.0.104:8081/viewtemplate', {
           _id
          })
            .then((res) => {
              console.log(res.data);
              this.title = res.data.name;
              this.type = res.data.type;
              this.username = res.data.username;
              this.des = res.data.des;
              document.getElementById('abc').innerHTML = res.data.template;
            })
            .catch((err)=>{
              console.log(err)
            });
     },
}
</script>

<style lang="css" scoped>
</style>
