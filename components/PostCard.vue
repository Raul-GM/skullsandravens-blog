<template>
  <nuxt-link :to="`blog/${id}`">
    <div>
      <h3>{{ title }}</h3>
      <img
        :src="mainImage"
        width="200px"
        height="200px"
        data-loading="esperando"
      />
      <span>{{ date }}</span>
      <p>{{ description }}</p>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    id: {
      type: String
    },
    date: {
      type: String
    }
  },
  computed: {
    mainImage() {
      console.log('====>', this.id)
      if (!this.id) return null
      return require(`../assets/images/blog/${this.id}/_main.jpg`)
    }
  }
}
</script>
<style></style>
