<template>
  <nuxt-link :to="`blog/${id}`">
    <div :style="{ 'background-image': `url(${mainImage})` }" class="post-card">
      <span class="post-card__date">{{ date }}</span>
      <!-- <img :src="mainImage" data-loading="esperando" class="post-card__image" /> -->
      <div>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  },
  computed: {
    mainImage() {
      if (!this.id) return null
      return require(`../assets/images/blog/${this.id}/_main.jpg`)
    }
  }
}
</script>
<style>
.post-card {
  background-size: cover;
  background-position: center;
  border: 1px solid var(--text-color);
  border-radius: 6px;
  height: 300px;
  overflow: hidden;
  width: 250px;
}
.post-card__date {
  position: absolute;
}
</style>
