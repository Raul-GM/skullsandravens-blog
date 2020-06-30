<template>
  <div>
    <Header title="Skulls and Ravens" />
    <div class="general-container">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '~/components/sections/Header'
import Footer from '~/layouts/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style>
.general-container {
  margin-top: var(--header-height-fixed);
}
</style>
