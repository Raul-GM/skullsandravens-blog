import Vue from 'vue'
// Components
import Important from '~/components/Important'
import OrderedList from '~/components/OrderedList'
import PostImage from '~/components/PostImage'
import Apostrophe from '~/components/Apostrophe'
import YoutubeVideo from '~/components/YoutubeVideo'
import Link from '~/components/Link'
// Directives
import LazyLoadDirective from '~/directives/LazyLoadDirective'

Vue.component('Important', Important)
Vue.component('OrderedList', OrderedList)
Vue.component('PostImage', PostImage)
Vue.component('Apostrophe', Apostrophe)
Vue.component('YoutubeVideo', YoutubeVideo)
Vue.component('Link', Link)
Vue.directive('lazyload', LazyLoadDirective)
