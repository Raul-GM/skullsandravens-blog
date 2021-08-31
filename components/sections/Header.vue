<template>
  <fixed-header>
    <header class="header-container">
      <div @click="onMenuButtonClick()" class="mobile-hamburguer">
        <MenuButton :isOpen="isMenuOpen" />
      </div>
      <div
        @click="onMenuOptionClick()"
        v-bind:class="{ 'mobile-menu-open': isMenuOpen }"
        class="mobile-menu"
      >
        <NavLink :text="$t('pages.home')" />
        <NavLink :text="$t('pages.news')" link-to="news" />
        <NavLink :text="$t('pages.concerts')" link-to="concerts" />
        <NavLink :text="$t('pages.reviews')" link-to="reviews" />
      </div>
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
import MenuButton from './../MenuButton'

export default {
  components: { NavLink, FixedHeader, LangSwitcher, MenuButton },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isMenuOpen: false
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
  },
  methods: {
    onMenuButtonClick() {
      this.isMenuOpen = !this.isMenuOpen
    },
    onMenuOptionClick() {
      this.isMenuOpen = false
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
    .logo-header:not(.logo-mobile) {
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
  .mobile-hamburguer {
    display: none;
    @media (max-width: 700px) {
      display: block;
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
  .mobile-menu {
    align-items: center;
    background-color: var(--background-color);
    border-top: 1px solid var(--skull);
    display: flex;
    flex-direction: column;
    left: -100vw;
    padding: 3rem;
    position: absolute;
    right: 0;
    top: calc(40px + (0.8rem * 2)); //pasar a variables
    transition: left 0.5s cubic-bezier(0.5, 0.9, 0, 0.9);
    height: 100vh;
    width: 100vw;
    @media (min-width: 700px) {
      display: none;
    }
    &-open {
      left: 0;
    }
    .nav-link {
      flex: unset;
      font-size: 1.5rem;
      margin-bottom: 1rem;
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
    @media (max-width: 700px) {
      top: 50%;
      bottom: unset;
      transform: translate(0, -50%);
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
      height: 40px;
    }
  }
  @media (max-width: 900px) {
    height: 120px;
  }
}
</style>
