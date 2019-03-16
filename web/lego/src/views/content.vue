<template lang="html">
  <h1>{{tid}}</h1>
</template>

<script>
export default {
  name: 'content',
  tid: '',
  created() {
         this.tid = this.$route.params.tid;
         axios.post('http://<roshans IP>:8081/login', {
            id,
            password
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
