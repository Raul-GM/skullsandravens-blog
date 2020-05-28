<template>
  <div class="post">
    <div
      :style="{ 'background-image': `url(${mainImage})` }"
      class="post-header__image"
    />
    <Title :text="title" class="post-header__title" />
    <DynamicMarkdown
      :render-func="renderFunc"
      :static-render-funcs="staticRenderFuncs"
      class="post-text"
    />
    <BackButton />
  </div>
</template>
<script lang="js">
import DynamicMarkdown from "~/components/Markdown/DynamicMarkdown.vue"
import Title from '~/components/Title'
import BackButton from '~/components/BackButton'
export default {
  components: { DynamicMarkdown, Title, BackButton },
  computed: {
    mainImage() {
      if (!this.id) return null
      return require(`~/assets/images/blog/${this.id}/_main.jpg`)
    }
  },
  async asyncData ({params, app}) {
    const { slug } = params
    const post = await import(`~/content/es/blog/${slug}.md`)
    const { attributes } = post
    return {
      name: slug,
      id: attributes.id,
      title: attributes.title,
      renderFunc: post.vue.render,
      staticRenderFuncs: post.vue.staticRenderFns,
    }
  },
}
</script>
<style>
:root {
  --post-cols: 1.5rem 0 auto 0 1.5rem;
}
.post-text {
  display: grid;
  grid-gap: 2rem 0;
  grid-template-columns: var(--post-cols);
  grid-template-rows: auto;
  padding: 1rem 0 4rem;
}
.post-text > * {
  grid-column: 3 / -3;
}
.post-header__image {
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center calc(var(--header-height) - 50px);
  background-attachment: fixed;
  height: 55vh;
  position: relative;
  width: 100%;
}
.post-header__title {
  background-color: var(--background-color);
  font-size: 1.8em;
  padding: 1rem 0.5rem;
  position: sticky;
  text-align: center;
  top: var(--header-height-fixed);
  z-index: 50;
}
</style>
