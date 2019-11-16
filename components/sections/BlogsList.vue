<template>
  <div>
    <h2>Listado de blogs</h2>
    <article v-for="blog in blogs" :key="blog.name">
      <h2>{{ blog.title }}</h2>
    </article>
  </div>
</template>
<script>
export default {
  props: {
    blogs: {
      type: Array
    }
  }
}
</script>
<style></style>
