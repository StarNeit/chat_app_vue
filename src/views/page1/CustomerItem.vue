<template>
  <div
    id="customer_item"
    @click="onClickCustomerItem"
  >
    <span class="customer-avatar">
      {{getShortName(this.data.name)}}
    </span>
    <div class="customer-name">
      <p class="name">{{this.data.name}}</p>
      <p class="chat-log">{{this.data.chat_log}}</p>
    </div>
    <div class="info">
      <span
        class="status"
        v-if="this.data.status"
      >{{this.data.status}}</span>
      <p
        class="date"
        v-else
      >{{this.data.chat_time}}</p>
      <span
        class="notification__icon"
        v-show="this.data.notification"
      >
        {{this.data.notification}}
      </span>
    </div>
    <span
      class="ellipsis-icon"
      @click="onClickShowDetail"
    >
      <icon name="ellipsis-v" />
    </span>
  </div>
</template>

<script>
  export default {
    name: 'CustomerItem',

    props: ['data'],
    methods: {
      getShortName (fullName) {
        const names = fullName.split(' ')
        const firstName = names[0]
        const lastName = names[names.length - 1]
        return firstName[0] + lastName[0]
      },
      onClickCustomerItem () {
        this.$emit('handleClick')
      },
      onClickShowDetail (e) {
        e.stopPropagation()
        this.$setToggleMobileCustomerDetail(true)
      }
    },

    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">
#customer_item {
  display: flex;
  padding: 17px 15px 15px 15px;
  border: 1px solid #f6f8f7;
  cursor: pointer;
  background-color: white;
  transition: background-color 0.3s ease;
  position: relative;

  &:hover {
    background-color: #f4f1f1;
  }

  @media (max-width: 576px) {
    padding-right: 40px;
  }

  span.ellipsis-icon {
    width: 25px;
    height: 25px;
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 50%;
    position: absolute;
    top: 14px;
    right: 7px;

    @media (max-width: 576px) {
      display: flex;
    }

    &:hover {
      background-color: #f7f7f7;
    }
    svg {
      height: 15px;
      color: #969696;
    }
  }

  span.customer-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #FD9786;
    overflow: hidden;
    width: 35px;
    height: 35px;
    color: white;
    font-size: 13px;
  }

  .customer-name {
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    p.name {
      font-size: 13px;
      color: #152531;
    }

    p.chat-log {
      font-size: 13px;
      line-height: 18px;
      color: #a6aeb8;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 130px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    p.date {
      font-size: 13px;
      color: #a6aeb8;
      margin-bottom: 6px;
    }

    span {
      font-size: 11px;
      color: #ecf8e7;
      padding: 4px 7px 6px;
      background-color: #80ca78;
      border-radius: 15px;
    }

    span.notification__icon {
      width: 16px;
      height: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: #3b9aec;
      color: #ebf9fa;
      font-size: 9px;
    }
  }
}
</style>
