<template>
  <a :href="href" :target="target" class="link">{{ label }}</a>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="scss">
.link {
  color: var(--background-color);
  transition: color var(--transition-fast) ease-in-out;
  &:hover,
  &.dark:hover {
    color: var(--alternative-color);
  }
  &.dark {
    color: var(--text-color);
  }
}
</style>
