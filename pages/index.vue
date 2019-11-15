<template>
  <section>
    <p>HOLA</p>
    <article v-for="blog in blogs" :key="blog.name">
      <h2>{{ blog.title }}</h2>
    </article>
  </section>
</template>
<script>
import blogsEs from '~/content/es/blogsEs.js'
export default {
  // And finally make the Markdown component available here in index.vue
  // components: { MyMarkdownPost: MyMarkdownPost.vue.component }
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
