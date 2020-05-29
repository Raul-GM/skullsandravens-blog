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
:root {
  --num-cols: 1;
  --card-gap: 2rem;
}
@media (min-width: 550px) {
  :root {
    --num-cols: 2;
  }
}
@media (min-width: 1000px) {
  :root {
    --num-cols: 3;
    --card-gap: 3rem;
  }
}
@media (min-width: 1500px) {
  :root {
    --num-cols: 4;
    --card-gap: 5rem;
  }
}
.post-list {
  display: grid;
  grid-gap: var(--card-gap);
  grid-template-columns: repeat(var(--num-cols), 1fr);
}
</style>
