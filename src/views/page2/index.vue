<template>
  <div class="page2-frame">
    <div class="page2-container">
      <SideBar />
      <div class="main-content">
        <Header />
        <div class="main-body">
          <customer-list />
          <chat-history />
          <customer-detail />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SideBar from './SideBar'
import Header from './Header'
import CustomerList from './CustomerList'
import ChatHistory from './ChatHistory'
import CustomerDetail from './CustomerDetail'
export default {
  name: 'Page 2',
  components: { CustomerDetail, ChatHistory, CustomerList, Header, SideBar },
  props: {},

  data () {
    return {}
  }
}

</script>

<style lang="scss">
  .page2-frame {
    background: #f7f7f7;
    width: 100%;
    height: 100%;
  }

  .page2-container {
    width: 100%;
    height: 100%;
    display: flex;

    .main-content {
      width: 100%;
      display: flex;
      flex-direction: column;

      .main-body {
        width: 100%;
        height: 100%;
        display: flex;
      }
    }
  }

</style>
