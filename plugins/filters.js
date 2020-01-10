import Vue from 'vue'

Vue.filter('formateDate', (value) => {
  const date = new Date(value)
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
})
