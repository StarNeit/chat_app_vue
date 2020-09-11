<template>
  <div class="page1-frame">
    <div class="page1-container">
      <customer-list
        :customerList="customerList"
      />
      <chat-history-view
        :customerData="getCustomerData"
      />
      <customer-detail
        :customerData="getCustomerData"
      />
    </div>
  </div>
</template>

<script>
import CustomerList from './CustomerList'
import CustomerDetail from './CustomerDetail'
import ChatHistoryView from './ChatHistoryView'

const mockCustomerListData = [
  {
    id: 0,
    name: 'Wix Bot',
    chat_log: 'You just got a new order',
    chat_time: '5 min ago',
    notification: 1
  },
  {
    id: 1,
    name: 'Brandon Andrews',
    chat_log: 'Hello there!',
    chat_time: '3 hours ago'
  },
  {
    id: 2,
    name: 'Clayton Day',
    chat_log: 'Yes, of course. Thanks',
    chat_time: 'Yesterday'
  },
  {
    id: 3,
    name: 'Bernice Clark',
    chat_log: 'This is a question regarding the bernice',
    chat_time: 'Jul 29',
    status: 'online'
  },
  {
    id: 5,
    name: 'Christine Fields',
    chat_log: 'Do you need help with the price discount',
    chat_time: 'Jul 28'
  },
  {
    id: 6,
    name: 'Mike Morgan',
    chat_log: 'Choose The Perfect Accommodation',
    chat_time: 'Jul 27'
  },
  {
    id: 7,
    name: 'Callie Schmidt',
    chat_log: 'Yes, thanks!',
    chat_time: 'Jul 23'
  },
  {
    id: 8,
    name: 'Herbert Watkins',
    chat_log: 'Of course, send as an email to stat@gmail.com',
    chat_time: 'Jul 23'
  },
  {
    id: 9,
    name: 'Bessie Coleman',
    chat_log: 'Sorry you could not read it.',
    chat_time: 'Jul 23'
  },
  {
    id: 10,
    name: 'Lottie Jordan',
    chat_log: '728 Feeney Street.',
    chat_time: 'Jul 23'
  },
  {
    id: 11,
    name: 'Augusta Castillo',
    chat_log: 'Thanks for the discount!! :)',
    chat_time: 'Jul 23'
  },
  {
    id: 12,
    name: 'Brandon Andrews',
    chat_log: 'Hello there!',
    chat_time: '3 hours ago'
  }
]

export default {
  name: 'Page 1',
  components: { ChatHistoryView, CustomerDetail, CustomerList },
  props: {},
  computed: {
    getCustomerData () {
      return this.customerList.filter(item => item.id === this.$store.state.selectedCustomerId)[0]
    }
  },
  data () {
    return {
      customerList: mockCustomerListData
    }
  }
}

</script>

<style lang="scss">
  .page1-frame {
    width: 100%;
    height: 100%;
  }

  .page1-container {
    height: 100%;
    display: flex;
    background-color: white;
  }
</style>
