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
    const post = await import(`~/content/${app.i18n.locale}/blog/${slug}.md`)
    const { attributes } = post
    return {
      name: slug,
      id: attributes.id,
      title: attributes.title,
      description: attributes.description,
      categories: attributes.categories,
      renderFunc: post.vue.render,
      staticRenderFuncs: post.vue.staticRenderFns,
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'author', name: 'author', content: 'RaúlGM' },
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:description', property: 'og:description', content: this.description },
        { hid: 'og:url', property: 'og:url', content: `www.skullsandravens.com${this.$route.fullPath}` },
        { hid: 'og:image', property: 'og:image', content: this.mainImage },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  }
}
</script>
<style lang="scss">
:root {
  --post-cols: 1.5rem 0 auto 0 1.5rem;
  --bg-size: cover;
  --bg-position: 55px;
  --image-gallery-cols: 1;
}
@media (min-width: 550px) {
  :root {
    --post-cols: 5rem 0 auto 0 5rem;
    --image-gallery-cols: 2;
  }
}
@media (min-width: 900px) {
  :root {
    --bg-size: 700px;
    --image-gallery-cols: 3;
  }
}
@media (min-width: 1200px) {
  :root {
    --image-gallery-cols: 4;
  }
}

.post-text {
  display: grid;
  grid-gap: 2rem 0;
  grid-template-columns: var(--post-cols);
  grid-template-rows: auto;
  padding: 1rem 0 4rem;
  text-align: left;
  & > * {
    grid-column: 3 / -3;
    justify-self: center;
  }
  & > p {
    width: 100%;
    max-width: 900px;
  }
}
.post-header__image {
  display: block;
  background-attachment: fixed;
  background-position: center calc(var(--header-height) - var(--bg-position));
  background-repeat: no-repeat;
  background-size: var(--bg-size);
  height: 55vh;
  position: relative;
  width: 100%;
  @media (max-width: 700px) {
    background-position: center var(--header-height-fixed);
    background-size: 100%;
    height: 40vh;
  }
}
@media (min-width: 700px) {
  .vue-fixed-header--isFixed + .general-container .post-header__image {
    background-position: center var(--header-height-fixed);
  }
}
.post-header__title {
  background-color: var(--background-color);
  font-size: 1.5em;
  padding: 1rem 0.5rem;
  position: sticky;
  text-align: center;
  top: var(--header-height-fixed);
  z-index: 1;
}
.image-gallery {
  align-items: center;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(Min(8em, 100%), 1fr));
  justify-items: center;
  width: 100%;
  .image__item {
    max-height: none;
    object-fit: cover;
    height: 20rem;
  }
}
h2 {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
