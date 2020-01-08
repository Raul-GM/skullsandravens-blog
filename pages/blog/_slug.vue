<template>
  <div>
    <h1>{{ title }}</h1>
    <img :src="mainImage" />
    <DynamicMarkdown
      :render-func="renderFunc"
      :static-render-funcs="staticRenderFuncs"
    />
  </div>
</template>
<script lang="js">
import DynamicMarkdown from "~/components/Markdown/DynamicMarkdown.vue"

export default {
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
  components: { DynamicMarkdown },
  computed: {
    mainImage() {
      if (!this.id) return null
      return require(`~/assets/images/blog/${this.id}/_main.jpg`)
    }
  }
}
</script>
<style lang="scss"></style>
