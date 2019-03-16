<template lang="html">
  <div class="">
    <h1>{{this.tid}}</h1>
    <commets />
  </div>
</template>

<script>
import axios from 'axios';
import commets from '../components/comments.vue'
export default {
  name: 'content',
  tid: '',
  components: {
    commets
  },
  created() {
         this.tid = this.$route.params.tid;
         axios.post('http://10.0.0.1:8081/login', {
          })
            .then((res) => {
              console.log(res.data);
            })
            .catch();
     },
}
</script>

<style lang="css" scoped>
</style>
