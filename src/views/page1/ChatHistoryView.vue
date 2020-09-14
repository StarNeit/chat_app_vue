<template>
  <div
    id="chat_history_view"
    :class="{show: $store.state.toggleMobileChatHistory}"
  >
    <div class="header">
      <span
        class="back-icon"
        @click="onClickBackBtn"
      >
        <icon name="angle-left" />
      </span>
      <div class="customer-info">
        <span class="customer-avatar">
         {{getShortName('Brandon Andrew')}}
        </span>
        <div class="info">
          <p class="name">{{customerData.name}} <span class="green-circle"></span></p>
          <p class="address">Phoenix, AZ, United States</p>
        </div>
      </div>
      <div class="header-right">
        <div>
          <icon name="eye" />
          the-humperdink
        </div>
        <div>
          <icon name="clock" />
          5m
        </div>
      </div>
    </div>
    <div class="body">
      <div class="date">
        <p>10:30 AM | Jan 23, 2017</p>
      </div>
      <div class="chat-list">
        <div
          v-for="(chat, index) in chatList"
          :class="getClasses(chat, index)"
        >
          <p>{{chat.msg}}</p>
        </div>
      </div>
      <div class="new-order">
        <div class="order-img">
          <img src="../../assets/images/order_icon.png" alt="img" />
        </div>
        <div class="order-info">
          <p class="title">New Order!</p>
          <p class="price-text">2 items</p>
          <p class="price-text">$18.50</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <input
        type="text"
        placeholder="Write Messages..."
        v-model="sendMsg"
      />
      <div class="footer-right">
        <div class="icons">
          <icon name="smile" />
          <icon name="paperclip" />
          <icon name="bookmark" />
        </div>
        <span
          class="send__btn"
          :class="{active: sendMsg !== '', disabled: sendMsg === ''}"
        >
          Send
        </span>
      </div>
    </div>
  </div>
</template>

<script>

const chatHistory = [
  {
    type: 1,
    msg: 'Hello !'
  },
  {
    type: 2,
    msg: 'Hi there! What can i help you with today?'
  },
  {
    type: 1,
    msg: 'My order number is #678 - I\'m wondering if it\'s too late to modify that order.'
  },
  {
    type: 2,
    msg: 'Ok, Perfect! Give me few moments to take a look. \nWhat was the change you were hoping to make on this order?'
  },
  {
    type: 1,
    msg: 'I\'d like to get a larger size in one of the shirts'
  },
  {
    type: 1,
    msg: 'if possible 😀'
  },
  {
    type: 2,
    msg: 'Sure, can you specify the shirts model?'
  },
  {
    type: 1,
    msg: 'BlackDeluxe 20'
  },
  {
    type: 2,
    msg: 'Thanks Brandon.'
  },
  {
    type: 2,
    msg: 'Your order has been modified.'
  },
  {
    type: 1,
    msg: 'I\'d like to get a larger size in one of the shirts'
  },
  {
    type: 1,
    msg: 'if possible 😀'
  },
  {
    type: 2,
    msg: 'Sure, can you specify the shirts model?'
  },
  {
    type: 1,
    msg: 'BlackDeluxe 20'
  },
  {
    type: 2,
    msg: 'Thanks Brandon.'
  },
  {
    type: 2,
    msg: 'Your order has been modified.'
  }
]

export default {
  name: 'ChatHistoryView',

  props: ['customerData'],
  methods: {
    getShortName (fullName) {
      const names = fullName.split(' ')
      const firstName = names[0]
      const lastName = names[names.length - 1]
      return firstName[0] + lastName[0]
    },
    getClasses (chat, index) {
      return {
        'owner-msg': chat.type === 2,
        'customer-msg': chat.type !== 2,
        before: index > 1 && (this.chatList[index - 1].type === chat.type),
        after: index < this.chatList.length - 1 && (this.chatList[index + 1].type === chat.type)
      }
    },
    onClickBackBtn () {
      this.$setToggleMobileChatHistory(false)
    }
  },
  data () {
    return {
      chatList: chatHistory,
      sendMsg: ''
    }
  }
}
</script>

<style lang="scss">
#chat_history_view {
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  transition-delay: 0.1s;

  &.show {
    @media (max-width: 576px) {
      right: 0;
      position: absolute !important;
      min-height: 100vh;
    }
  }

  @media (max-width: 576px) {
    position: fixed;
    right: -800px;
    width: 100%;
  }

  .header {
    padding: 15px;
    height: 64px;
    display: flex;
    justify-content: space-between;
    background-color: white;
    position: relative;

    @media (max-width: 576px) {
      flex-direction: column;
      height: unset;
      padding-left: 50px;
    }

    span.back-icon {
      width: 35px;
      height: 35px;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition: background-color 0.3s ease;
      display: none;

      @media (max-width: 576px) {
        display: flex;
        position: absolute;
        top: 29px;
        left: 8px;
      }

      &:hover {
        background-color: #f4f1f1;
      }

      svg {
        width: 30px;
        height: 30px;
        color: #707780;
      }
    }

    .customer-info {
      display: flex;

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

      .info {
        padding-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;

        p.name {
          font-size: 13px;
          color: #152531;
          display: flex;
          align-items: center;

          .green-circle {
            width: 9px;
            height: 9px;
            border-radius: 50%;
            display: block;
            background-color: #5ebd55;
            margin-left: 9px;
          }
        }

        p.address {
          font-size: 13px;
          color: #a6aeb8;
        }
      }
    }

    .header-right {
      display: flex;
      align-items: center;

      @media (max-width: 576px) {
        margin-top: 15px;
      }

      > div {
        display: flex;
        font-size: 13px;
        color: #152531;
        margin-left: 25px;
        align-items: center;

        svg {
          width: 15px;
          height: 15px;
          color: #a1abb5;
          margin-right: 5px;
        }
      }
    }
  }

  .body {
    background-color: #f0f8fb;
    flex: 1;
    padding: 15px;
    height: calc( 100vh - 64px - 55px);
    overflow: auto;

    @media (max-width: 576px) {
      height: calc( 100vh - 95px - 55px);
    }

    &::-webkit-scrollbar {
      display: none;
    }

    .date {
      text-align: center;

      p {
        font-size: 10px;
        color: #aab7c5;
      }
    }

    .chat-list {
      display: flex;
      flex-direction: column;

      > div {
        width: fit-content;
        margin: 12px 0 0;
        padding: 10px 15px;
        border-radius: 10px;
        max-width: 410px;

        p {
          font-size: 13px;
          color: #152531;
          line-height: 1.6;
        }
      }

      .customer-msg {
        background-color: white;
        align-self: flex-start;

        @media (max-width: 576px) {
          max-width: 80%;
        }

        p {
          color: #152531;
        }

        &.before {
          border-top-left-radius: 0;
          margin-top: 8px;
        }

        &.after {
          border-bottom-left-radius: 0;
        }
      }

      .owner-msg {
        background-color: #3898ec;
        align-self: flex-end;
        max-width: 374px;

        @media (max-width: 576px) {
          max-width: 80%;
        }

        p {
          color: #d5ebf5;
        }

        &.before {
          border-top-right-radius: 0;
          margin-top: 8px;
        }

        &.after {
          border-bottom-right-radius: 0;
        }
      }
    }

    .new-order {
      width: 200px;
      height: 83px;
      display: flex;
      border-radius: 15px;
      overflow: hidden;
      margin-top: 12px;

      .order-img {
        width: 85px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #e4d8ef;
      }

      .order-info {
        flex: 1;
        background-color: white;
        padding: 15px;

        .title {
          font-size: 13px;
          color: #223f5b;
          margin-bottom: 9px;
        }

        .price-text {
          font-size: 13px;
          color: #152531;
          margin-top: 5px;
        }
      }
    }
  }

  .footer {
    height: 55px;
    padding: 15px;
    background-color: white;
    border: 1px solid #f6f8f7;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      border: none;
      flex: 1;
      padding: 5px;

      &::placeholder {
        color: #3691d7;
      }
    }

    .footer-right {
      display: flex;
      height: 100%;
      align-items: center;

      .icons {
        min-width: 105px;

        svg {
          width: 18px;
          color: #a1abb5;
          cursor: pointer;
          margin: 0 7px;
        }

        span.send__btn {
          padding: 8px 10px 9px;
          font-size: 13px;
          transition: all 0.3s ease;

          &.disabled {
            color: #bdc2cc;
          }

          &.active {
            color: #56a2de;
            border-radius: 20px;
            background: #d9effd;
            cursor: pointer;
            transition: background-color 0.3s ease;

            &:hover {
              background-color: #cfe4f1;
            }
          }
        }
      }
    }
  }
}
</style>
