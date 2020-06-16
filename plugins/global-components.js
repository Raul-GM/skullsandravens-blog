import Vue from 'vue'
// Components
import Important from '~/components/Important'
import OrderedList from '~/components/OrderedList'
import PostImage from '~/components/PostImage'
// Directives
import LazyLoadDirective from '~/directives/LazyLoadDirective'

Vue.component('Important', Important)
Vue.component('OrderedList', OrderedList)
Vue.component('PostImage', PostImage)
Vue.directive('lazyload', LazyLoadDirective)
