<template>
  <section class="main-container">
    <img
      src="../assets/images/logo.jpg"
      alt="The Black Raven Blog"
      class="main-container__logo"
    />
    <Title text="The Black Raven" class="main-container__title" />
    <p>Descripción del blog</p>
    <HorizontalDivider />
    <BlogsList :blogs="blogs" />
  </section>
</template>
<script>
import blogsEs from '~/content/es/blogsEs.js'
import BlogsList from '~/components/sections/BlogsList'
import Title from '~/components/Title'
import HorizontalDivider from '~/components/HorizontalDivider'
export default {
  components: { BlogsList, Title, HorizontalDivider },
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
.main-container__logo {
  height: 200px;
  object-fit: cover;
  width: 200px;
}
.main-container__title {
  padding: 1rem 0;
}
</style>
