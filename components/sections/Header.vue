<template>
  <fixed-header>
    <header class="header-container">
      <h1 class="title">{{ title }}</h1>
      <nav class="header-container_nav">
        <NavLink :text="$t('pages.home')" />
        <NavLink :text="$t('pages.news')" link-to="news" />
        <NavLink :text="$t('pages.concerts')" link-to="concerts" />
        <NavLink :text="$t('pages.reviews')" link-to="reviews" />
        <!-- <NavLink text="Women of Rock" /> -->
      </nav>
      <LangSwitcher class="lang-switcher" />
    </header>
  </fixed-header>
</template>
<script>
import FixedHeader from 'vue-fixed-header'
import NavLink from './../NavLink'
import LangSwitcher from './../LangSwitcher'

export default {
  components: { NavLink, FixedHeader, LangSwitcher },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
.header-container {
  align-items: center;
  background-color: var(--text-color);
  color: var(--background-color);
  display: flex;
  flex-direction: column;
  left: 0;
  max-height: var(--header-height);
  padding: 0.8rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
  transition: var(--transition-fast) max-height;
  z-index: 10;
  &.vue-fixed-header--isFixed {
    flex-direction: row;
    max-height: var(--header-height-fixed);
    .title {
      font-size: 1.2rem;
    }
    .nav-link {
      font-size: 0.9rem;
    }
    .lang-switcher {
      position: relative;
      right: 0;
      bottom: 0;
    }
  }
  &_nav {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .lang-switcher {
    position: absolute;
    right: 1rem;
    bottom: 0.3rem;
  }
}

.title {
  font-family: var(--font-title);
  font-size: 2.2em;
}
</style>
