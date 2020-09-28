<template>
  <a @click="$router.back()" class="back-button">
    <svg
      class="back-button__img"
      style="enable-background:new 0 0 16 16;"
      version="1.1"
      viewBox="0 0 16 16"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M15,6H8V3c0-0.484-0.375-1-1-1C6.539,2,6.305,2.287,6,2.54L0.625,7C0.242,7.313,0,7.555,0,8s0.242,0.688,0.625,1L6,13.46  C6.305,13.713,6.539,14,7,14c0.625,0,1-0.516,1-1v-3h7c0.55,0,1-0.45,1-1V7C16,6.45,15.55,6,15,6z"
      />
    </svg>
  </a>
</template>
<script>
export default {}
</script>
<style lang="scss">
.back-button {
  background-color: var(--raven);
  border-radius: 3px;
  bottom: 0;
  box-shadow: 2px 2px 4px var(--text-color);
  height: 3rem;
  margin: 1rem;
  opacity: 0.5;
  padding: 0.5rem;
  position: fixed;
  right: 0;
  transition: var(--transition-fast) opacity ease-in-out;
  width: 3rem;
  &:hover {
    opacity: 1;
  }
  &__img path {
    fill: var(--skull);
  }
}
</style>
