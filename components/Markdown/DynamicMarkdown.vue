<script lang="js">
import InlineCode from './InlineCode.vue'

export default {
  components: {
      InlineCode
  },
  props: {
    renderFunc: {
      type: Function,
      default: () => {},
    },
    staticRenderFuncs: {
      type: Object,
      default: () => {},
    }
  },

  computed: {
  },

  created () {
      this.templateRender = this.renderFunc
      this.$options.staticRenderFns = this.staticRenderFuncs
  },
  render (createElement) {
      return this.templateRender ? this.templateRender() : createElement("div", "Rendering");
  },

}
</script>
