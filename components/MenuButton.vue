<template>
  <div v-bind:class="{ 'menu-icon-open': isOpen }" class="menu-icon">
    <span class="menu-icon-bar menu-icon-top"></span>
    <span class="menu-icon-bar menu-icon-middle-top"></span>
    <span class="menu-icon-bar menu-icon-middle-bottom"></span>
    <span class="menu-icon-bar menu-icon-bottom"></span>
  </div>
</template>
<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
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
<style scoped lang="scss">
.menu-icon {
  display: flex;
  flex-direction: column;
  height: 20px;
  transition: transform var(--animation-menu-time) ease-in-out;
  width: 30px;
  &-bar {
    background-color: var(--raven);
    border-radius: 50px;
    height: 3px;
    position: absolute;
    width: 100%;
  }
  &-top {
    top: 0;
  }

  &-middle-top {
    top: 6px;
    width: 18px;
  }
  &-middle-bottom {
    top: 12px;
    width: 18px;
  }
  &-bottom {
    top: 18px;
  }
  &-middle-top,
  &-middle-bottom {
    opacity: 1;
    transition: opacity var(--animation-menu-time) var(--animation-menu-time)
      ease-in-out;
  }
  &-top,
  &-bottom {
    transition: top var(--animation-menu-time) var(--animation-menu-time)
        ease-in-out,
      transform var(--animation-menu-time) calc(var(--animation-menu-time) * 2)
        ease-in-out;
  }
  &-open {
    transform: rotate(-90deg);
    .menu-icon-middle-top,
    .menu-icon-middle-bottom {
      opacity: 0;
    }
    .menu-icon-top,
    .menu-icon-bottom {
      top: 10px;
    }
    .menu-icon-top {
      transform: rotate(-400deg);
    }
    .menu-icon-bottom {
      transform: rotate(40deg);
    }
  }
}
</style>
