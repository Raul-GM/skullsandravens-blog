<template>
  <figure v-lazyload class="image__wrapper">
    <ImageSpinner class="image__spinner" />
    <img :data-url="imageSource" :alt="title" class="image__item" />
  </figure>
</template>
<script>
import ImageSpinner from './ImageSpinner'
export default {
  components: { ImageSpinner },
  props: {
    source: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    imageSource() {
      return require(`~/assets/images/blog/${this.source}.jpg`)
    }
  }
}
</script>
<style scoped lang="scss">
.image {
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 6rem;
    min-height: 3rem;
    &.loaded {
      .image {
        &__item {
          visibility: visible;
          opacity: 1;
        }
        &__spinner {
          display: none;
          width: 100%;
        }
      }
    }
  }
  &__item {
    width: 100%;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }
}
</style>
