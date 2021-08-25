<template>
  <nuxt-link
    :to="`/${langPrefix}${linkTo}`"
    v-bind:class="{ active: isActive }"
    class="nav-link"
  >
    {{ text }}
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
  flex: 1 1 0;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  text-align: center;
  transition: color var(--transition-fast);
  @media (max-width: 900px) {
    font-size: 1rem;
  }
  &:hover {
    color: var(--alternative-color);
  }
  &.active {
    background-size: 1px 1em;
    box-shadow: inset 0 -0.15em var(--alternative-color),
      inset 0 -0.2em var(--alternative-color);
    display: inline;
  }
}
</style>
