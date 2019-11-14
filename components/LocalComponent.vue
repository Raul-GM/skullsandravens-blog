<template lang="pug">
v-btn(:color="color") Local button
</template>

<script>
export default {
  props: {
    color: {
      default: 'primary',
      type: String
    }
  }
}
</script>
