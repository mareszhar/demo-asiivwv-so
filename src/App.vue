<template lang="pug">
HelloWorld
</template>

<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<style lang="sass">
body
  @include GlobalStyles.useCenteredFlex(column)  // <- using a globally available mixin
  background-color: GlobalStyles.$deepSlateGray // <- using a globally available variable

  // Not relevant to demo:
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  min-height: 100vh
</style>

