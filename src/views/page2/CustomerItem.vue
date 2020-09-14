<template>
  <div
    id="customer_item"
    @click="onClickCustomerItem"
    :class="{active: data.id === this.$store.state.selectedCustomerId}"
  >
    <div class="body">
      <span class="avatar">{{this.data.name[0]}}</span>
      <div class="name">
        <h6>{{this.data.name}}</h6>
        <p>{{this.data.chat_log}}</p>
      </div>
      <p class="time">{{this.data.time}}</p>
      <span
        class="ellipsis-icon"
        @click="onClickShowDetail"
      >
      <icon name="ellipsis-v" />
    </span>
    </div>
    <div class="footer">
      <div
        v-if="this.data.type === 'group-chat'"
        class="group-chat">
        <div class="members">
          <img src="../../assets/images/chat_member_1.png" alt="img" />
          <img src="../../assets/images/chat_member_2.png" alt="img" />
          <img src="../../assets/images/chat_member_3.png" alt="img" />
          <img src="../../assets/images/chat_member_4.png" alt="img" />
        </div>
        <div class="hockage-team">
          <icon name="github" />
          Hockage team
        </div>
      </div>
      <div
        v-else
        class="single-chat"
      >
        <icon name="reply" />
        <p>Thank you bro!</p>
        <img src="../../assets/images/owner.png" alt="img" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CustomerItem',
  components: { },
  props: ['data'],
  methods: {
    onClickCustomerItem () {
      this.$emit('handleClick')
    },
    onClickShowDetail (e) {
      e.stopPropagation()
      this.$setToggleMobileSideMenu(false)
      this.$setToggleMobileCustomerDetail(true)
    }
  },
  data () {
    return {}
  }
}

</script>

<style lang="scss">
#customer_item {
  width: 100%;
  padding: 25px;
  border: 2px solid #eeeeee;
  background: white;
  border-radius: 10px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px 2px #f5f5f5;

  &:hover, &.active {
    border-color: #2f5cfa;
  }

  .body {
    display: flex;
    border-bottom: 1px solid #ececec;
    position: relative;

    @media (max-width: 576px) {
      padding-right: 20px;
    }

    span.avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #FD9786;
      overflow: hidden;
      width: 30px;
      height: 30px;
      color: white;
      font-size: 13px;
    }

    .name {
      flex: 1;
      margin: 0 10px;
      color: #272727;

      h6 {
        font-size: 13px;
        margin: 10px 0;
      }

      p {
        font-size: 13px;
        margin: 10px 0;
      }
    }

    .time {
      margin-top: 10px;
      font-size: 13px;
      color: #272727;
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
      top: 5px;
      right: -9px;

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
  }

  .footer {
    display: flex;

    .group-chat {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding-left: 40px;

      .members {
        margin-top: 12px;

        img {
          margin-right: 2px;
        }
      }

      .hockage-team {
        display: flex;
        align-items: center;
        font-size: 13px;
        color: #a6a6a6;
        margin-top: 12px;

        svg {
          color: #9d9d9d;
          margin-right: 5px;
        }
      }
    }

    .single-chat {
      display: flex;
      align-items: center;
      margin-top: 12px;

      svg {
        color: #9d9d9d;
        width: 10px;
      }

      p {
        font-size: 13px;
        color: #9d9d9d;
        margin: 0 10px 0 7px;
      }
    }
  }

}
</style>
