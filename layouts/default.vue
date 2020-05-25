<template>
  <div>
    <Header title="Skulls and Ravens" />
    <div class="general-container">
      <nuxt />
    </div>
  </div>
</template>
<script>
import Header from '~/components/Header'
export default {
  components: {
    Header
  }
}
</script>
<style>
.general-container {
  margin-top: var(--header-height);
}
</style>
