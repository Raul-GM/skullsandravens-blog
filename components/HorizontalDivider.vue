<template>
  <hr class="horizontal-divider" />
</template>
<style lang="scss">
.horizontal-divider {
  margin: 1rem 0;
  &::after {
    content: '';
    margin-top: 0.3em;
    display: block;
  }
}
.horizontal-divider,
.horizontal-divider::after {
  border: 0;
  height: 1px;
  background: var(--background-color);
  background-image: linear-gradient(
    to right,
    var(--background-color),
    var(--alternative-color),
    var(--background-color)
  );
  margin: 2rem 0;
  width: 100%;
}
</style>
