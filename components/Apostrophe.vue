<template>
  <Link
    :label="setLabel()"
    :href="link"
    target="_blank"
    class="apostrophe dark"
  />
</template>
<script>
import Link from './../components/Link'
export default {
  components: { Link },
  props: {
    text: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  },
  methods: {
    setLabel() {
      return `* ${this.text}`
    }
  }
}
</script>
<style lang="scss">
.apostrophe {
  width: 100%;
  font-size: 0.7rem;
}
</style>
