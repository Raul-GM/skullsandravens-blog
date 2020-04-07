<template>
  <div class="post-list">
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
      type: Array,
      default: () => []
    }
  }
}
</script>
<style>
.post-list {
  display: grid;
  grid-gap: 1em;
}
</style>
