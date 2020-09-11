import Vue from 'vue'
import {mapState, mapActions} from 'vuex'

Vue.mixin({
  data () {
    return {
    }
  },

  computed: {
    $currentLang () {
      return Vue.config.lang || 'zh'
    },

    ...mapState([
      '$userInfo'
    ])
  },

  methods: {
    ...mapActions([
      '$getUserInfo',
      '$setMenuList',
      '$setSelectedCustomerId',
      '$setToggleMobileChatHistory',
      '$setToggleMobileCustomerDetail'
    ]),

    $triggerSidenav () {
      let app = document.getElementById('app')
      app.className = !app.className ? 'menu-expand' : ''
    }
  }
})
