<template>
  <div class="menu-icon">
    <span class="menu-icon-bar menu-icon-top"></span>
    <span class="menu-icon-bar menu-icon-middle-top"></span>
    <span class="menu-icon-bar menu-icon-middle-bottom"></span>
    <span class="menu-icon-bar menu-icon-bottom"></span>
  </div>
</template>
<script></script>
<style scoped lang="scss">
.menu-icon {
  display: flex;
  flex-direction: column;
  height: 20px;
  width: 30px;
  &-bar {
    background-color: var(--raven);
    border-radius: 50px;
    height: 3px;
    position: absolute;
    width: 100%;
  }
  &-top {
    top: 0;
  }
  &-middle-top {
    top: 6px;
    width: 18px;
  }
  &-middle-bottom {
    top: 12px;
    width: 18px;
  }
  &-bottom {
    top: 18px;
  }
}
</style>
