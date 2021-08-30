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
<style lang="scss">
.general-container {
  margin-top: var(--header-height-fixed);
}
.main-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 9em 1em;
  @media (max-width: 700px) {
    padding: 4em 1em;
  }
}
</style>
