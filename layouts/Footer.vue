<template>
  <footer class="footer-container">
    <p class="footer-container__row">
      {{ $t('footer.phrase1') }}
      <Link
        href="mailto:skullsandravensblog@gmail.com"
        label="skullsandravensblog@gmail.com"
      />
      <!-- </a> -->
      {{ $t('footer.phrase2') }}
      <Link
        label="Instagram"
        target="_blank"
        href="https://www.instagram.com/skullsandravens/"
      />
    </p>
    <p class="footer-container__row">
      &copy; {{ getYear() }} - {{ $t('footer.phrase3') }}
      <Link
        label="RaúlGM"
        target="_blank"
        href="https://twitter.com/RaulGM_83"
      />.
    </p>
    <p v-html="$t('footer.phrase4')" class="footer-container__row" />
  </footer>
</template>
<script>
import Link from './../components/Link'
export default {
  components: { Link },
  methods: {
    getYear() {
      return new Date().getFullYear()
    }
  }
}
</script>
<style lang="scss">
:root {
  --padding-footer: 1rem 2rem;
}
@media (min-width: 550px) {
  :root {
    --padding-footer: 1rem 3rem;
  }
}
@media (min-width: 1000px) {
  :root {
    --padding-footer: 1.5rem 4rem;
  }
}
.footer-container {
  background-color: var(--text-color);
  color: var(--background-color-semitransparent);
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  justify-content: center;
  min-height: 150px;
  padding: var(--padding-footer);
  text-align: center;
  width: 100%;
  &__row:not(:first-of-type) {
    padding-top: 0.5rem;
  }
}
</style>
