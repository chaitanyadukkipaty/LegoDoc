<template lang="html">
  <div id="app">
    <v-app id="inspire">
      <v-container fluid grid-list-xl>
        <v-layout row wrap>
          <v-flex
            xs12
            md6
            lg4
            v-for="n in array"
            :key="n.name"
          >
            <v-card
              class="mx-auto"
              color="#26c6da"
              dark
              max-width="400"

            >
              <v-card-title @click="myfun">
                <span class="headline font-weight-bold">{{n.name}}</span>
              </v-card-title>

              <v-card-text class="title">
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
                     <v-icon class="mr-1" large left>keyboard_arrow_up</v-icon>
                    </v-btn>

                    <v-btn v-if="n.upvoteflag == false" @click="upvote(n)" flat icon
                     slot="activator">
                     <v-icon  class="mr-1" large left>keyboard_arrow_up</v-icon>
                    </v-btn>

                    <span class="subheading mr-2">{{n.upvotes}}</span>

                    <v-btn v-if="n.downvoteflag == true" @click="downvote(n)" flat icon
                     :id="iconID"
                     slot="activator">
                     <v-icon  class="mr-1 myclass" large>keyboard_arrow_down</v-icon>
                    </v-btn>

                    <v-btn v-if="n.downvoteflag == false" @click="downvote(n)" flat icon
                     slot="activator">
                     <v-icon class="mr-1 myclass" large>keyboard_arrow_down</v-icon>
                    </v-btn>

                    <v-icon class="mr-1" large right>share</v-icon>

                  </v-flex>
                  </v-layout>
                </v-list-tile>
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
export default {
  name: 'cards',
  props: ["authenticated"],
  data() {
    return {
      myname: 'caldem',
      iconID: 'myID',
      array: [
        {
          tid: "1",
          name: "Some random title",
          type: "something",
          des: "Some random Description",
          upvotes: 100,
          percentage: 60
        },
        {
          tid: "2",
          name: "Some other random title",
          type: "something",
          des: "Some other random Description",
          upvotes: 50,
          percentage: 69
        },
      ],
    }
  },
  methods: {
    myfun() {
      if(this.authenticated == false){
        this.$router.replace({ name: 'Content', params: { tid: this.myname } });
      }
    },
    upvote(n) {
      if(n.upvoteflag == false){
        n.upvotes = n.upvotes + 1;
        n.upvoteflag = true;
        n.downvoteflag = false;
      }
    },
    downvote(n){
      if(n.downvoteflag == false){
      n.upvotes = n.upvotes - 1;
      n.upvoteflag = false;
      n.downvoteflag = true;
      }
    }
  },
  created() {
    this.tid = this.$route.params.tid;
    axios.post('http://10.42.0.61:8081/', {
     })
       .then((res) => {
         console.log(res.data);
         this.array = res.data;
       })
       .catch();
  }
}
</script>

<style lang="css" scoped>
#myID {
  color: red;
}
</style>
