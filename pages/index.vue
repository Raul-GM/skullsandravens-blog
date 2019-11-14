<template lang="pug">
  v-card
    v-card-text
      //- Here we use/render the Markdown component
      //- just like we would do with any other
      my-markdown-post
</template>

<script>
import LocalComponent from '~/components/LocalComponent.vue'
// Here we simply import the .md file like any other component
// thanks to the frontmatter-markdown-loader
import MyMarkdownPost from '~/content/blog/hello-world.md'

// Let's make the local and async components available to our Markdown file
MyMarkdownPost.vue.component.components = {
  AsyncComponent: () => import('~/components/AsyncComponent.vue'),
  LocalComponent
}

export default {
  // And finally make the Markdown component available here in index.vue
  components: { MyMarkdownPost: MyMarkdownPost.vue.component }
}
</script>
