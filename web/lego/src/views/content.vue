<template lang="html">
  <div id="app">
    <v-app id="inspire">
      <v-container fluid grid-list-xl style="background: #e3f2fd">
        <v-container fluid>
          <v-layout row>
            <v-flex xs9>
          <v-card>
            <editor/>

        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title class="headline"  text-lg-left style="color:#0356B3;">{{this.title}}</v-card-title>
          <v-card-text class="text-lg-left">
              <h2  style="display: inline-block;">Username</h2><pre style="display: inline-block;"> : </pre>
              <h5 class="headline" style="color:#0356B3; display: inline-block;">{{this.username}}</h5><br />
              <h2 style="display: inline-block;">Type</h2><pre style="display: inline-block;"> : </pre>
              <h5 class="headline" style="color:#0356B3; display: inline-block;">{{this.type}}</h5><br />
              <h2 style="display: inline-block;">Date</h2><pre style="display: inline-block;"> : </pre>
              <h5 class="headline" style="color:#0356B3; display: inline-block;">{{this.date}}</h5><br />
              <br />
            </h6>
            </v-card-text>
            <v-btn @click="clickme" class="sai" block color="primary" dark>Download<pre> </pre><v-icon small>save_alt</v-icon></v-btn>
      </v-card>
      </v-flex>
      </v-layout>
      </v-container>
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
      date: '17/03/2019',
      type: 'Chaitanya did not gave',
      username: 'calden',
      template: '<h1>Calde</h1>'
    }
  },
  methods: {
    clickme() {
      var editorContent = document.querySelector(".editor");
      const htmldata = editorContent.innerHTML;
      axios.post('http://192.168.43.229:8081/printPDF', {
        htmldata
      })
        .then((res) => {
          const filename = res.data
          axios({
            url: 'http://192.168.43.229:8081/printPDF/'+filename,
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
             const url = window.URL.createObjectURL(new Blob([response.data]));
             const link = document.createElement('a');
             link.href = url;
             link.setAttribute('download', 'file.pdf'); //or any other extension
             document.body.appendChild(link);
             link.click();
          });
        })
        .catch()
    }
  },
  created() {
         this._id = this.$route.params._id;
         const _id = this._id;
         axios.post('http://192.168.43.229:8081/viewtemplate', {
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
