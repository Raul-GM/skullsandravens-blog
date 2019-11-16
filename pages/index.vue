<template>
  <section>
    <h1>Título del blog</h1>
    <p>Descripción del blog</p>
    <BlogsList :blogs="blogs" />
  </section>
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
