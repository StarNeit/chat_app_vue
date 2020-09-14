<template>
  <div
    id="chat-history-panel"
    :class="{show: $store.state.toggleMobileChatHistory}"
  >
    <div class="history-view">
      <span
        class="back-to-list__btn"
        @click="onClickBackBtn"
      >
        <icon name="angle-left" />
      </span>
      <div
        v-for="(chat, index) in chatHistory"
        :class="getClasses(chat, index)"
      >
        <p v-show="chat.type === 'text'">{{chat.msg}}</p>
        <img
          v-if="showAvatar(chat, index) && chat.writer === 'me'"
          src="../../assets/images/owner.png"
          class="avatar"
          alt="img"
        />
        <img
          v-else-if="showAvatar(chat, index) && chat.writer !== 'me'"
          src="../../assets/images/white_bear.png"
          class="avatar"
          alt="img"
        />
        <div
          v-if="chat.type === 'img'"
          class="chat-img"
        >
          <img
            src="../../assets/images/Grass.jpg"
            alt="img"
          />
          <div class="img-info">
            <div class="name">
              <p>Grass.Jpg</p>
              <span>1.2 mb</span>
            </div>
            <icon name="download" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="send-message">
        <input
          type="text"
          placeholder="Type a message..."
        />
        <div class="icons">
          <span>
            <icon name="file" />
          </span>
          <span>
            <icon name="star" />
          </span>
          <span>
            <icon name="long-arrow-up" />
          </span>
          <span>
            GIFs
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const mockChatHistory = [
  {
    writer: 'White Bear',
    type: 'text',
    msg: 'Hello! How are you?'
  },
  {
    writer: 'White Bear',
    type: 'text',
    msg: 'I\'m looking for new macbook air for my nepweh'
  },
  {
    writer: 'White Bear',
    type: 'text',
    msg: 'Can you help me?'
  },
  {
    writer: 'me',
    type: 'text',
    msg: 'Hello! How are you?'
  },
  {
    writer: 'me',
    type: 'text',
    msg: 'I\'m looking for new macbook air for my nepweh'
  },
  {
    writer: 'me',
    type: 'text',
    msg: 'Can you help me?'
  },
  {
    writer: 'White Bear',
    type: 'text',
    msg: 'Hello! How are you?'
  },
  {
    writer: 'White Bear',
    type: 'text',
    msg: 'I\'m looking for new macbook air for my nepweh'
  },
  {
    writer: 'White Bear',
    type: 'text',
    msg: 'Can you help me?'
  },
  {
    writer: 'me',
    type: 'text',
    msg: 'Hello! How are you?'
  },
  {
    writer: 'me',
    type: 'text',
    msg: 'I\'m looking for new macbook air for my nepweh'
  },
  {
    writer: 'me',
    type: 'text',
    msg: 'Can you help me?'
  },
  {
    writer: 'me',
    type: 'img',
    img_src: '../../assets/images/Grass.jpg',
    size: '1.2mb'
  }
]

export default {
  name: 'ChatHistory',
  components: { },
  props: {},
  methods: {
    getClasses (chat, index) {
      return {
        'owner-msg': chat.writer === 'me',
        'customer-msg': chat.writer !== 'me',
        'img-wrapper': chat.type === 'img',
        before: index > 0 && (this.chatHistory[index - 1].writer === chat.writer),
        after: index < this.chatHistory.length - 1 && (this.chatHistory[index + 1].writer === chat.writer)
      }
    },
    showAvatar(chat, index) {
      return index < this.chatHistory.length - 1 && (this.chatHistory[index + 1].writer !== chat.writer) || index === this.chatHistory.length - 1
    },
    onClickBackBtn () {
      this.$setToggleMobileChatHistory(false)
    }
  },
  data () {
    return {
      chatHistory: mockChatHistory
    }
  }
}

</script>

<style lang="scss">
#chat-history-panel {
  flex: 1;
  box-shadow: inset 0 0 16px 6px #f1efef;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  transition-delay: 0.2s;
  background: #fafafa;

  &.show {
    @media (max-width: 576px) {
      right: 0;
      position: absolute !important;
    }
  }

  @media (max-width: 576px) {
    position: fixed;
    right: -800px;
    width: 100%;
    height: calc( 100vh - 65px);
    overflow: auto;
  }

  .history-view {
    padding: 30px 50px;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    span.back-to-list__btn {
      width: 35px;
      height: 35px;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition: background-color 0.3s ease;
      display: none;
      background-color: #fafafa;
      overflow: hidden;
      z-index: 10;

      @media (max-width: 576px) {
        display: flex;
        position: absolute;
        top: 10px;
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

    > div {
      width: fit-content;
      margin: 12px 0 0;
      padding: 2px 10px;
      border-radius: 15px;
      max-width: 410px;
      position: relative;

      p {
        font-size: 13px;
        color: #152531;
        line-height: 1.6;
      }
    }

    .customer-msg {
      background-color: #ededed;
      align-self: flex-start;

      p {
        color: #152531;
      }

      img.avatar {
        position: absolute;
        bottom: 0;
        left: -30px;
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
      background-color: #4d84fb;
      align-self: flex-end;
      max-width: 374px;

      p {
        color: #d5ebf5;
      }

      img.avatar {
        position: absolute;
        bottom: 0;
        right: -30px;
      }

      &.before {
        border-top-right-radius: 0;
        margin-top: 8px;
      }

      &.after {
        border-bottom-right-radius: 0;
      }
    }

    .img-wrapper {
      padding: 0;
      background-color: unset;

      .chat-img {
        overflow: hidden;
        border-radius: 15px !important;
        max-width: 450px;
        max-height: 300px;

        img {
          width: 100%;
          height: 100%;
        }

        .img-info {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 54px;
          background-color: rgba(0,0,0,0.5);
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;

          .name {
            p {
              font-size: 13px;
              color: white;
            }

            span {
              color: white;
              font-size: 12px;
            }
          }

          svg {
            color: white;
            cursor: pointer;
          }
        }
      }
    }
  }

  .footer {
    padding: 15px 10px;

    .send-message {
      width: 100%;
      height: 65px;
      padding: 20px 25px;
      background-color: white;
      border-radius: 5px;
      display: flex;

      input {
        border: none;
        flex: 1;
        padding: 5px;

        &::placeholder {
          color: #a4a4a4;
          font-size: 13px;
        }
      }

      .icons {
        display: flex;

        span {
          border: 1px solid #eeeeee;
          height: 25px;
          padding: 0 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 3px;
          cursor: pointer;
          color: #b4b4b4;
          font-size: 13px;
          margin-left: 7px;

          svg {
            color: #b4b4b4;
            width: 15px;
            height: 15px;
          }
        }
      }
    }
  }
}
</style>
