<template>
  <h1 class="title">{{ text }}</h1>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
.title {
  font-family: var(--font-title);
  font-size: 3em;
}
</style>
