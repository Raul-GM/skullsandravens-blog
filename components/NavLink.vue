<template>
  <nuxt-link :to="'/'">
    <a v-bind:class="{ active: active }" class="nav-link">
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
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
.nav-link {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: color var(--transition-fast);
}
.nav-link:hover {
  color: var(--alternative-color);
}
.nav-link.active {
  background-size: 1px 1em;
  box-shadow: inset 0 -0.15em var(--background-color),
    inset 0 -0.2em var(--text-color);
  display: inline;
}
</style>
