<template>
  <ol class="ordered-list">
    <li v-for="(item, index) in list" :key="index">
      <Important :text="item.title" />
      <p>{{ item.text }}</p>
    </li>
  </ol>
</template>
<script>
import Important from '~/components/Important'
export default {
  components: { Important },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style scoped>
.ordered-list {
  --number-list: 3rem;
  counter-reset: list;
  display: flex;
  flex-wrap: wrap;
}
.ordered-list li {
  counter-increment: list;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  margin-left: var(--number-list);
  position: relative;
  width: 100%;
}

.ordered-list li::before {
  content: counter(list);
  left: calc(var(--number-list) * -1);
  line-height: 0.7;
  font-family: var(--font-title);
  font-size: calc(var(--number-list) - 1rem);
  font-weight: bold;
  margin: auto 0.5rem;
  opacity: 0.7;
  position: absolute;
  text-align: right;
  width: calc(var(--number-list) - 1rem);
}
</style>
