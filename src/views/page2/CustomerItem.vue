<template>
  <div id="customer_item">
    <div class="body">
      <span class="avatar">{{this.data.name[0]}}</span>
      <div class="name">
        <h6>{{this.data.name}}</h6>
        <p>{{this.data.chat_log}}</p>
      </div>
      <p class="time">{{this.data.time}}</p>
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

  &:hover {
    border-color: #2f5cfa;
  }

  .body {
    display: flex;
    border-bottom: 1px solid #ececec;

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
  }

  .footer {
    display: flex;
    padding-top: 12px;

    .group-chat {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .members {
        margin-left: 40px;

        img {
          margin-right: 2px;
        }
      }

      .hockage-team {
        display: flex;
        align-items: center;
        font-size: 13px;
        color: #a6a6a6;

        svg {
          color: #9d9d9d;
          margin-right: 5px;
        }
      }
    }

    .single-chat {
      display: flex;
      align-items: center;

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
