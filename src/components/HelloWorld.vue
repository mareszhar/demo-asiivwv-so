<template lang="pug">
h1 Hello world!
</template>

<script lang="ts" setup></script>

<style lang="sass" scoped>
// We can also define component styles in one or more separate files:
@use './styles/HelloWorld'

h1
  border-bottom: 1px solid GlobalStyles.$faintAqua // <- global styles are available here too
</style>

