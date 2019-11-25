<script lang="js">
import InlineCode from './InlineCode.vue'

export default {
props: ["renderFunc", "staticRenderFuncs"],

components: {
    InlineCode
},

computed: {
},

render (createElement) {
    return this.templateRender ? this.templateRender() : createElement("div", "Rendering");
},

created () {
    this.templateRender = this.renderFunc
    this.$options.staticRenderFns = this.staticRenderFuncs
}
}
</script>
