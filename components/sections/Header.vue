<template>
  <fixed-header>
    <header class="header-container">
      <span class="mobile-hamburguer">Menu</span>
      <img
        :data-url="logoInlineSource"
        :src="logoInlineSource"
        alt="Skulls N Ravens Logo"
        title="Skulls N Ravens"
        class="logo-header logo-mobile"
      />
      <nav class="header-container_nav">
        <NavLink :text="$t('pages.home')" />
        <NavLink :text="$t('pages.news')" link-to="news" />
        <img
          :data-url="logoSource"
          :src="logoSource"
          alt="Skulls N Ravens Logo"
          title="Skulls N Ravens"
          class="logo-header"
        />
        <img
          :data-url="logoSourceSmall"
          :src="logoSourceSmall"
          title="Skulls N Ravens"
          alt="Skulls N Ravens Logo small"
          class="logo-header__small"
        />
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
  },
  computed: {
    logoSource() {
      return require(`~/assets/images/LogoGrandeTransRosa.png`)
    },
    logoSourceSmall() {
      return require(`~/assets/images/LogoSmall.png`)
    },
    logoInlineSource() {
      return require('~/assets/images/LogoInline.png')
    }
  }
}
</script>
<style lang="scss">
.header-container {
  align-items: center;
  background-color: var(--background-color);
  border-bottom: 1px solid var(--skull);
  color: var(--raven);
  display: flex;
  flex-direction: column;
  left: 0;
  max-height: var(--header-height);
  padding: 0.8rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
  //transition: var(--transition-fast) max-height;
  z-index: 10;
  &.vue-fixed-header--isFixed {
    max-height: var(--header-height-fixed);
    .title {
      font-size: 1.2rem;
    }
    .logo-header {
      display: none;
    }
    .logo-header__small {
      display: block;
      height: 60px;
      margin: 0 1rem;
    }
  }
  &_nav {
    align-items: flex-end;
    display: flex;
    justify-content: center;
    max-width: 800px;
    width: 100%;
    @media (max-width: 700px) {
      display: none;
    }
  }
  .lang-switcher {
    position: absolute;
    right: 1rem;
    bottom: 0.3rem;
    @media (max-width: 900px) {
      top: 0.3rem;
      bottom: unset;
    }
  }
}

.title {
  font-family: var(--font-title);
  font-size: 2.2em;
}

.logo-header {
  height: 160px;
  &__small,
  &.logo-mobile {
    display: none;
    @media (max-width: 700px) {
      display: block;
      height: 50px;
    }
  }
  @media (max-width: 900px) {
    height: 120px;
  }
}
</style>
