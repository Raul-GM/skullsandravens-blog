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
      renderFunc: post.vue.render,
      staticRenderFuncs: post.vue.staticRenderFns,
    }
  },
  head() {
    return {
      title: this.title,
      meta: [{
        hid: 'author',
        name: 'author',
        content: 'RaúlGM'
      },{
        hid: 'description',
        name: 'description',
        content: this.description
      }]
    }
  }
}
</script>
<style lang="scss">
:root {
  --post-cols: 1.5rem 0 auto 0 1.5rem;
  --bg-size: cover;
  --bg-position: 50px;
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
  & > * {
    grid-column: 3 / -3;
    justify-self: center;
  }
}
.post-header__image {
  display: block;
  background-size: var(--bg-size);
  background-repeat: no-repeat;
  background-position: center calc(var(--header-height) - var(--bg-position));
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
</style>
