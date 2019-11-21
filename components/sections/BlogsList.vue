<template>
  <div>
    <h2>Listado de blogs</h2>
    <article v-for="blog in blogs" :key="blog.id">
      <PostCard
        :title="blog.title"
        :description="blog.description"
        :date="blog.date"
        :id="blog.id"
      />
    </article>
  </div>
</template>
<script>
import PostCard from '~/components/PostCard'
export default {
  components: { PostCard },
  props: {
    blogs: {
      type: Array
    }
  }
}
</script>
<style></style>
