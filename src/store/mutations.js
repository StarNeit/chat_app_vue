// import {STORAGE_KEY} from '@constants/index'
// import { $utils } from '@helper'

export default {
  $vuexSetUserInfo (state, info) {
    state.userId = info._id
    state.userInfo = info
  },

  $vuexSetMenuList (state, menuList) {
    // $utils.setStorage(STORAGE_KEY, menuList)
    state.menuList = menuList
  },

  $vuexSetSelectedCustomerId(state, customerId) {
    state.selectedCustomerId = customerId
  },

  $vuexSetToggleMobileChatHistory(state, val) {
    state.toggleMobileChatHistory = val
  },

  $vuexSetToggleMobileCustomerDetail(state, val) {
    state.toggleMobileCustomerDetail = val
  },

  $vuexSetToggleMobileSideMenu(state, val) {
    if (!state.toggleMobileChatHistory && !state.toggleMobileCustomerDetail) {
      state.toggleMobileSideMenu = val
    }
  }
}
