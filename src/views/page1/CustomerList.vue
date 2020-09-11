<template>
  <div id="customer_list_panel">
    <div class="header">
      <div class="dropdown">
        ALL MESSAGES <icon name="dropdown" />
      </div>
      <span class="settings__btn">
        <icon name="settings" />
      </span>
    </div>
    <div class="customer-list">
      <customer-item
        v-for="data in customerList"
        :data="data"
        :key="data.id"
        @handleClick="handleClickCustomerItem(data.id)"
      />
    </div>
  </div>
</template>

<script>
import CustomerItem from './CustomerItem'

export default {
  name: 'CustomerList',
  components: { CustomerItem },
  props: ['customerList'],

  methods: {
    handleClickCustomerItem (id) {
      this.$setSelectedCustomerId(id)
      this.$setToggleMobileChatHistory(true)
    }
  },

  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#customer_list_panel {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  flex: 25% 0 0;
  min-width: 290px;

  @media (max-width: 576px) {
    flex: 1;
  }

  .header {
    height: 65px;
    border-right: 1px solid #f5f6f7;
    border-bottom: 1px solid #f5f6f7;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .dropdown {
      color: #82939e;
      font-size: 13px;
      display: flex;
      align-items: center;
      cursor: pointer;

      svg {
        width: 10px;
        margin-left: 8px;
      }
    }

    .settings__btn {
      cursor: pointer;

      svg {
        width: 17px;
      }
    }
  }

  .customer-list {
    flex: 1;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
