<template>
  <div class="image-canvas">
    <div>
      <div class="image-container">
        <div class="image-border-bottom-right">
          <a @click="toggleModalIsOpen()" class="image-border-top-left">
            <ImageItem :title="title" :source="thumbSource" class="image" />
          </a>
        </div>
        <p v-if="!footerLink" class="image-footer">{{ footer }}</p>
      </div>
      <Link
        v-if="footerLink"
        :href="footerLink"
        :label="footer"
        target="_blank"
        class="image-footer dark"
      />
    </div>
    <div v-if="isModalOpen" class="image-modal">
      <a
        :style="{ 'background-image': `url(${closeImage})` }"
        @click="toggleModalIsOpen()"
        class="image-modal__close"
      >
      </a>
      <div class="image-modal_container">
        <img :src="imageSource" class="image-modal_image" />
      </div>
    </div>
  </div>
</template>
<script>
import ImageItem from './ImageItem'
import Link from './Link'
export default {
  components: { ImageItem, Link },
  props: {
    source: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    footer: {
      type: String,
      default: ''
    },
    footerLink: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isModalOpen: false
    }
  },
  computed: {
    thumbSource() {
      return `${this.source}-thumb`
    },
    imageSource() {
      return require(`~/assets/images/blog/${this.source}.jpg`)
    },
    closeImage() {
      return require('~/assets/icons/close.svg')
    }
  },
  methods: {
    toggleModalIsOpen() {
      this.isModalOpen = !this.isModalOpen
    }
  }
}
</script>
<style lang="scss">
.image-canvas {
  display: flex;
  justify-content: center;
}
.image-border-bottom-right {
  --border-size: 3px;
  --image-line-x: 10px;
  --image-line-y: 10px;
  position: relative;
  width: min-content;
}
.image-border-bottom-right {
  position: relative;
  width: 100%;
}
.image-border-bottom-right::before,
.image-border-bottom-right::after,
.image-border-top-left::before,
.image-border-top-left::after {
  background-color: var(--alternative-color);
  content: '';
  position: absolute;
  transition: transform var(--transition-fast);
}
.image-border-top-left::before,
.image-border-bottom-right::before {
  height: 50%;
  width: var(--border-size);
}
.image-border-top-left::before {
  top: calc(var(--image-line-y) * -1);
  left: calc(var(--border-size) * -1);
}
.image-border-bottom-right::before {
  bottom: calc((var(--image-line-y) - 3px) * -1);
  right: calc(var(--border-size) * -1);
}
.image-border-top-left::after,
.image-border-bottom-right::after {
  width: 50%;
  height: var(--border-size);
}
.image-border-top-left::after {
  left: calc(var(--image-line-x) * -1);
  top: calc(var(--border-size) * -1);
}
.image-border-bottom-right::after {
  right: calc(var(--image-line-x) * -1);
  bottom: -2px;
}
.image-container {
  display: block;
  max-width: max-content;
  position: relative;
  width: 100%;
  z-index: 0;
  &:hover {
    .image-border-bottom-right {
      &::after {
        transform: translateX(calc(-100% - calc(var(--image-line-x) * 2)));
      }
      &::before {
        transform: translateY(
          calc(-100% + 2px - calc(var(--image-line-y) * 2))
        );
      }
    }
    .image-border-top-left {
      &::before {
        transform: translateY(calc(100% - 2px + calc(var(--image-line-y) * 2)));
      }
      &::after {
        transform: translateX(calc(100% + calc(var(--image-line-x) * 2)));
      }
    }
  }
}
.image {
  .image__item {
    height: auto;
    max-height: 300px;
    width: auto;
    max-width: 100%;
  }
  &-modal {
    background-color: var(--raven-semitransparent);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;
    &__close {
      --close-icon-size: 1.5rem;
      background-image: url('/assets/icons/close.svg');
      background-repeat: no-repeat;
      background-size: cover;
      height: var(--close-icon-size);
      margin: 1rem;
      position: absolute;
      right: 0;
      top: 0;
      width: var(--close-icon-size);
      z-index: 10;
    }
    &_container {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
      position: relative;
      width: 100%;
    }
    &_image {
      height: auto;
      max-height: 100vh;
      padding: 1rem;
      width: auto;
    }
  }
  &-footer {
    font-size: 0.7rem;
    padding: 3px 0;
  }
}
</style>
