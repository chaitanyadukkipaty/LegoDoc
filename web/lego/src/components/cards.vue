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
            :key="n.title"
          >
            <v-card
              class="mx-auto"
              color="#26c6da"
              dark
              max-width="400"
            >
              <v-card-title>
                <span class="headline font-weight-bold">{{n.title}}</span>
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
                    <span class="subheading mr-2">256</span>
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
export default {
  name: 'cards',
  data() {
    return {
      myname: 'caldem',
      array: [
        {
          tid: "1",
          name: "Some random title",
          des: "Some random Description",
          
        },
        {
          name: "Some other random title",
          des: "Some other random Description and ioewh igehoig hewio gfioew hgie hg i"
        },
      ],
    }
  }
}
</script>

<style lang="css" scoped>
</style>
