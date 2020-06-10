<template>
  <fixed-header>
    <header class="header-container">
      <h1 class="title">{{ title }}</h1>
      <nav class="header-container_nav">
        <NavLink :active="true" text="Inicio" />
        <NavLink text="Women of Rock" />
      </nav>
    </header>
  </fixed-header>
</template>
<script>
import FixedHeader from 'vue-fixed-header'
import NavLink from './../NavLink'

export default {
  components: { NavLink, FixedHeader },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
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
}
.header-container.vue-fixed-header--isFixed {
  flex-direction: row;
  max-height: var(--header-height-fixed);
}
.header-container.vue-fixed-header--isFixed .title {
  font-size: 1.2rem;
}
.header-container.vue-fixed-header--isFixed .nav-link {
  font-size: 0.9rem;
}
.header-container_nav {
  display: flex;
  justify-content: center;
  width: 100%;
}
.title {
  font-family: var(--font-title);
  font-size: 2.2em;
}
</style>
