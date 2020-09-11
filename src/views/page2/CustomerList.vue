<template>
  <div id="customer-list-panel">
    <div class="header">
      <h3 class="title">Messages <span class="custom-badge">6</span></h3>
      <a class="create-group" href="#">
        <icon name="plus" />
        Create a group
      </a>
    </div>
    <div class="tab-bar">
      <span class="tab-item active">All Chats</span>
      <span class="tab-item">People Chats</span>
      <span class="tab-item">Group Chats</span>
    </div>
    <div class="customer-list">
      <customer-item
        v-for="item in customerList"
        :data="item"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script>
import CustomerItem from './CustomerItem'
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
  name: 'SideBar',
  components: { CustomerItem },
  props: {},

  data () {
    return {
      customerList: mockListData
    }
  }
}

</script>

<style lang="scss">
#customer-list-panel {
  flex: 21% 0 0;
  background-color: white;
  border-top: 2px solid #f3f3f3;
  display: flex;
  flex-direction: column;

  .header {
    padding: 20px 15px 17px;
    display: flex;
    justify-content: space-between;

    .title {
      display: flex;
      font-size: 18px;
      color: #272727;

      span {
        width: 19px;
        height: 19px;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #4a84fb;
        border-radius: 50%;
        color: white;
        font-weight: normal;
        margin-left: 5px;
      }
    }

    .create-group {
      display: flex;
      align-items: center;
      color: #272727;

      svg {
        color: #4a84fb;
        width: 9px;
        margin-right: 4px;
      }
    }
  }

  .tab-bar {
    height: 25px;
    padding: 0 15px;

    .tab-item {
      font-size: 13px;
      color: #a9a9a9;
      border-bottom: 2px solid white;
      cursor: pointer;
      margin-right: 20px;
      padding: 3px 0;

      &.active {
        color: #272727;
        border-color: #272727;
      }
    }
  }

  .customer-list {
    overflow: auto;
    padding: 15px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
