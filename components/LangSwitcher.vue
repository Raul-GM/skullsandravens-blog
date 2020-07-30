<template>
  <select v-model="selectedLang" @change="onChangeLang()">
    <option :value="selectedLang" selected>{{ $i18n.locale }}</option>
    <option
      v-for="locale in $i18n.locales"
      v-if="locale.code !== $i18n.locale"
      :key="locale.code"
    >
      {{ locale.code }}
    </option>
  </select>
</template>
<script>
export default {
  data() {
    return {
      selectedLang: ''
    }
  },
  methods: {
    onChangeLang() {
      this.$router.push(this.switchLocalePath(this.selectedLang))
    }
  }
}
</script>
