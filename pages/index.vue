<template>
  <div>
    <section class="main-container">
      <BlogsList :blogs="blogs" />
    </section>
  </div>
</template>

<script>
import blogsEs from '~/content/es/blogsEs.js'
import BlogsList from '~/components/sections/BlogsList'

export default {
  components: { BlogsList },
  async asyncData({ app }) {
    const blogs = blogsEs
    async function asyncImport(blogName) {
      const post = await import(`~/content/es/blog/${blogName}.md`)
      return post.attributes
    }
    const allPosts = await Promise.all(
      blogs.map((blog) => asyncImport(blog))
    ).then((res) => {
      return {
        blogs: res
      }
    })

    return allPosts
  }
}
</script>
<style>
.main-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 3em 1em;
}
</style>
