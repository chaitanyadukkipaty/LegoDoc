<template lang="html">
  <div class="">
  <cards v-bind:authenticated="authenticated"/>
  </div>

</template>

<script>
import cards from '../components/cards.vue'
export default {
  name:'home',
  components: {
    cards
  },
  props: ["authenticated"],
  data() {
    return {
    }
  },
  created() {
    //this.authenticated = this.$route.params.authenticated;
  }
}
</script>

<style lang="css" scoped>
</style>
