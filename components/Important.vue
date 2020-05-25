<template>
  <span class="important">{{ text }}</span>
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
<style scoped>
.important {
  font-style: italic;
  font-weight: 900;
}
</style>
