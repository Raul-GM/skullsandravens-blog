<template>
  <footer class="footer-container">
    <p class="footer-container__row">
      Si quieres contactar conmigo puedes hacerlo a través de mi correo
      <!-- <a href="mailto:skullsandravensblog@gmail.com"> -->
      <Link
        href="mailto:skullsandravensblog@gmail.com"
        label="skullsandravensblog@gmail.com"
      />
      <!-- </a> -->
      y a través de mi cuenta de
      <Link
        label="Instagram"
        target="_blank"
        href="https://www.instagram.com/skullsandravens/"
      />
    </p>
    <p class="footer-container__row">
      &copy; {{ getYear() }} - La web ha sido diseñada y desarrollada en VueJS y
      Nuxt por
      <Link
        label="RaúlGM"
        target="_blank"
        href="https://twitter.com/RaulGM_83"
      />.
    </p>
    <p class="footer-container__row">
      Para la realización de esta web ha sido necesaria una suscripción a
      Spotify, varios vinilos y cds, un cuaderno y muchos bolis de colores, una
      pandemia, un ventilador, varias entradas a conciertos, mucho café y alguna
      que otra cerveza y sobre todo, mucho &#x1F49C; y mucho &#x1F918;
    </p>
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
