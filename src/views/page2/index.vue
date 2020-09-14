<template>
  <div class="page2-frame">
    <div class="page2-container">
      <SideBar />
      <div
        class="main-content"
        :class="{'change-width': this.$store.state.toggleMobileSideMenu}"
      >
        <Header
          :customerData="getCustomerData"
        />
        <div class="main-body">
          <customer-list
            :customerList="customerList"
          />
          <chat-history />
          <customer-detail
            :customerData="getCustomerData"
          />
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

const mockListData = [
  {
    id: 0,
    type: 'group-chat',
    name: 'Peter Volkolso',
    chat_log: 'Hello! What a great design',
    time: '20m',
    notification: 3
  },
  {
    id: 1,
    type: 'single-chat',
    name: 'White Bear from London',
    chat_log: 'Hello! What a great design',
    time: '20m',
    status: 'online'
  },
  {
    id: 2,
    type: 'single-chat',
    name: 'Blue cat from London',
    chat_log: 'Hello! What a great design',
    time: '20m',
    notification: 3,
    status: 'online'
  },
  {
    id: 3,
    type: 'single-chat',
    name: 'Red Lobster from Moscow',
    chat_log: 'Hello! What a great design',
    time: '20m'
  },
  {
    id: 4,
    type: 'single-chat',
    name: 'Black Diamond from Paris',
    chat_log: 'Hello! What a great design',
    time: '20m',
    status: 'online'
  },
  {
    id: 5,
    type: 'single-chat',
    name: 'Green Dog from London',
    chat_log: 'Hello! What a great design',
    time: '20m'
  }
]

export default {
  name: 'Page 2',
  components: { CustomerDetail, ChatHistory, CustomerList, Header, SideBar },
  props: {},
  computed: {
    getCustomerData () {
      return this.customerList.filter(item => item.id === this.$store.state.selectedCustomerId)[0]
    }
  },
  data () {
    return {
      customerList: mockListData
    }
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
      transition: all 0.3s ease;
      transition-delay: 0.2s;

      &.change-width {
        width: calc( 100% - 50px);
        margin-left: 50px;
      }

      .main-body {
        width: 100%;
        height: calc(100% - 65px);
        display: flex;
      }
    }
  }

</style>
