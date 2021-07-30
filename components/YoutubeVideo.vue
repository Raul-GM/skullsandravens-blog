<template>
  <iframe
    :src="src"
    :title="title"
    class="youtube-player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
.youtube-player {
  width: 450px;
  height: 300px;
}
@media (max-width: 550px) {
  .youtube-player {
    width: 300px;
    height: 200px;
  }
}
</style>
