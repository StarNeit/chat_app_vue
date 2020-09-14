import { $apis } from '@helper'

export default {
  async $getUserInfo ({commit, state}) {
    if (!state.userId) return
    let res = await $apis.getProfile({_id: state.userId})
    commit('$vuexSetUserInfo', res.value)
  },

  $setMenuList ({commit, state}, menuList) {
    commit('$vuexSetMenuList', menuList)
  },

  $setSelectedCustomerId ({commit, state}, id) {
    commit('$vuexSetSelectedCustomerId', id)
  },

  $setToggleMobileChatHistory ({commit, state}, val) {
    commit('$vuexSetToggleMobileChatHistory', val)
  },

  $setToggleMobileCustomerDetail({commit, state}, val) {
    commit('$vuexSetToggleMobileCustomerDetail', val)
  },

  $setToggleMobileSideMenu({commit, state}, val) {
    commit('$vuexSetToggleMobileSideMenu', val)
  }

}
