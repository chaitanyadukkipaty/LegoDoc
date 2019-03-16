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
              @click="myfun"
            >
              <v-card-title>
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
                    <v-icon class="mr-1" large left>keyboard_arrow_up</v-icon>
                    <span class="subheading mr-2">{{n.upvotes}}</span>
                    <v-icon class="mr-1" large>keyboard_arrow_down</v-icon>
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
  data() {
    return {
      myname: 'caldem',
      array: [
        {
          tid: "1",
          name: "Some random title",
          type: "something",
          des: "Some random Description",
          upvotes: "100",
          percentage: "69"
        },
        {
          tid: "2",
          name: "Some other random title",
          type: "something",
          des: "Some other random Description",
          upvotes: "50",
          percentage: "69"
        },
      ],
    }
  },
  methods: {
    myfun() {
      this.$router.replace({ name: 'Content', params: { tid: this.myname } });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
