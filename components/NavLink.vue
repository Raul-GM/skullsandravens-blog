<template>
  <nuxt-link :to="`/${langPrefix}${linkTo}`">
    <a v-bind:class="{ active: isActive }" class="nav-link">
      {{ text }}
    </a>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    linkTo: {
      type: String,
      default: ''
    }
  },
  computed: {
    langPrefix() {
      const locale = this.$i18n.locale
      return locale === 'en' ? 'en/' : ''
    },
    isActive() {
      const { path } = this.$route
      const homePaths = ['/', '/en', '/en/']
      if (this.text === this.$t('pages.home')) return homePaths.includes(path)
      return this.$route.path.includes(this.linkTo)
    }
  }
}
</script>
<style lang="scss">
.nav-link {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: color var(--transition-fast);
  &:hover {
    color: var(--alternative-color);
  }
  &.active {
    background-size: 1px 1em;
    box-shadow: inset 0 -0.15em var(--background-color),
      inset 0 -0.2em var(--text-color);
    display: inline;
  }
}
</style>
