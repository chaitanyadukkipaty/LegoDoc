<template lang="html">
  <textinput v-bind:username="username" />
</template>

<script>
import textinput from '../components/textinput.vue'
export default {
  name: 'upload',
  components: {
    textinput
  },
  props: ["username"]
}
</script>

<style lang="css" scoped>
</style>
