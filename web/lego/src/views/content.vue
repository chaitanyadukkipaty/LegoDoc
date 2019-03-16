<template lang="html">
  <h1>{{this.tid}}</h1>
</template>

<script>
import axios from 'axios';
export default {
  tid: '',
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
