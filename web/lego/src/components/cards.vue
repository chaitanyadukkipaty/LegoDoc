<template lang="html">
  <div id="app">
    <v-app id="inspire">
      <v-container fluid grid-list-xl style="background: #e3f2fd">
        <v-container fluid>
          <v-layout row>
            <v-flex xs6>
              <v-combobox
                v-model="fieldselect"
                label="Select your field"
                v-on:change="changeField()"
                :items="fields"
              ></v-combobox>
            </v-flex>
        <v-flex xs6>
          <v-combobox
            v-model="name"
            :items="sortedArray1"
            label="Search for your template"
            item-text="name"
            single-line
            return-object
            v-on:change="changeArray()"
          ></v-combobox>
        </v-flex>

      </v-layout>
    </v-container>
        <v-layout row wrap>
          <v-flex
            xs12
            md6
            lg4
            v-for="n in sortedArray1"
            :key="n._id"
          >
            <v-card
              class="mx-auto"
              color="#1565c0"
              dark
              max-width="400"
              min-height="200"
            >
              <v-card-title class="myclass" @click="myfun(n)">
                <span class="headline font-condensed">{{n.name}}</span>
              </v-card-title>

              <v-card-text class="title font-condensed font-weight-light">
                {{n.des}}
              </v-card-text>

              <v-card-actions>
                <v-list-tile class="grow">
                  <v-layout
                    align-center
                    justify-start
                  >
                  <v-flex xs12>

                    <v-btn  v-if="n.upvoteflag == true" @click="upvote(n)" flat icon
                     :id="iconID"
                     slot="activator">
                     <v-icon class="mr-1"  left>arrow_upward</v-icon>
                    </v-btn>

                    <v-btn v-if="n.upvoteflag == false" @click="upvote(n)" flat icon
                     slot="activator">
                     <v-icon  class="mr-1"  left>arrow_upward</v-icon>
                    </v-btn>

                    <span class="subheading mr-2">{{n.upvotes}}</span>

                    <v-btn v-if="n.downvoteflag == true" @click="downvote(n)" flat icon
                     :id="iconID2"
                     slot="activator">
                     <v-icon  class="mr-1 myclass" >arrow_downward</v-icon>
                    </v-btn>

                    <v-btn v-if="n.downvoteflag == false" @click="downvote(n)" flat icon
                     slot="activator">
                     <v-icon class="mr-1 myclass" >arrow_downward</v-icon>
                    </v-btn>

                    <!-- <v-icon class="mr-1" large right>share</v-icon> -->

                  </v-flex>
                  </v-layout>
                </v-list-tile>


            <v-spacer></v-spacer>
            <h4 class="font-weight-light">{{n.type}}</h4><pre> | </pre><h4 class="font-weight-light">{{n.username}}</h4>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import axios from 'axios';
var {ip} = require('../IP.js')
export default {
  name: 'cards',
  props: ["authenticated"],
  data() {
    return {
      show: false,
      myname: 'caldem',
      iconID: 'myID',
      iconID2: 'myID2',
      name: '',
      fieldselect: '',
      fields: [
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
      ],
      array: [
      ],
      array1: [

      ],
    }
  },
  computed: {
    sortedArray: function() {
      function compare(a, b) {
        if (a.upvotes < b.upvotes)
          return 1;
        if (a.upvotes > b.upvotes)
          return -1;
        return 0;
      }

      return this.array.sort(compare);
    },
    sortedArray1: function() {
      function compare(a, b) {
        if (a.upvotes < b.upvotes)
          return 1;
        if (a.upvotes > b.upvotes)
          return -1;
        return 0;
      }

      return this.array1.sort(compare);
    }
  },
  methods: {
    changeArray() {
      this.myFunction();
    },
    changeField() {
      this.myFunction();
    },
    myFunction() {
      if(this.fieldselect){
        var temp = this.array.filter((elm) => {
          if(elm.type == this.fieldselect){
            return elm;
          }
        });
        this.array1 = temp;
        if(this.name.name != null){
          var temp = this.array1.filter((elm) => {
              if(elm.name == this.name.name){
                return elm;
              }
            });
            this.array1 = temp;
        }
      }
      else{
        this.array1 = this.array;
        this.name.name = '';
      }
    },
    myfun(n) {
      if(this.authenticated == true){
        this.$router.replace({ name: 'TemplateContent', params: { _id: n._id} });
      }
    },
    clickme() {
      var btn = document.querySelector(".sai");
      var content = document.querySelector(".getcontent");
      var editorContent = document.querySelector(".editor");
      var s = editorContent.innerHTML;
      content.style.display = "block";
      content.textContent = s;
    },
    upvote(n) {
      if(n.upvoteflag == false){
        n.upvotes = n.upvotes + 1;
        n.upvoteflag = true;
        n.downvoteflag = false;
      }
      else{
        n.upvotes = n.upvotes - 1;
        n.upvoteflag = false;
      }
    },
    downvote(n){
      if(n.downvoteflag == false){
      n.upvotes = n.upvotes - 1;
      n.upvoteflag = false;
      n.downvoteflag = true;
      }
      else{
        n.upvotes = n.upvotes + 1;
        n.downvoteflag = false;
      }
    }
  },
  created() {
    //this.tid = this.$route.params.tid;
    axios.post(`http://${ip}/`, {
     })
       .then((res) => {
         console.log(res.data);
         this.array = res.data;
         this.array1 = res.data;
       })
       .catch();
  }
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
#myID {
  color: #FF4500;
}
#myID2 {
  color: #1e88e5;
}
#cardtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
font-weight: 800;
line-height: 1 !important;
letter-spacing: .02em !important;
}
#app{
  background: #BBDEFB
}
.myclass{
  cursor: pointer;
}
</style>
