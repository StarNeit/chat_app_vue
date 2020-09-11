<template>
  <div id="chat-history-panel">
    <div class="history-view">
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
            src="../../assets/images/Wolf.jpg"
            alt="img"
          />
          <div class="img-info">
            <div class="name">
              <p>Wolf.Jpg</p>
              <span>1.2 mb</span>
            </div>
            <icon name="download" />
          </div>
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
    writer: 'me',
    type: 'img',
    img_src: '../../assets/images/Wolf.jpg',
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
  height: 100%;

  .history-view {
    padding: 30px 50px;
    display: flex;
    flex-direction: column;

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
}
</style>
