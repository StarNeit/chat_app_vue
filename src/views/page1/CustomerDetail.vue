<template>
  <div
    id="customer_detail"
    :class="{show: $store.state.toggleMobileCustomerDetail}"
  >
    <div class="head">
      <img
        class="customer-img"
        src="../../assets/images/customer.png"
        alt="Img"
      />
      <p class="customer-name">
        {{customerData.name}}
      </p>
      <span
        class="sign-in__icon"
        @click="onClickHideIcon"
      >
        <icon name="sign-in" />
      </span>
    </div>
    <div class="body">
      <div class="content">
        <div class="info">
          <p class="label">Email</p>
          <p class="info-text">band@gmail.com</p>
        </div>
        <div class="info">
          <p class="label">Phone</p>
          <p class="info-text">34567897654</p>
        </div>
        <div class="info">
          <p class="label">Labels</p>
          <div class="label-items">
            <span class="label-item">March <icon name="close" /></span>
            <span class="label-item">Facebook <icon name="close" /></span>
            <span class="label-item">Christmas sale <icon name="close" /></span>
            <span class="label-item">2017 <icon name="close" /></span>
          </div>
        </div>
        <div class="info">
          <p class="label">Invoices</p>
          <a href="#">Create new invoice</a>
        </div>
        <div class="info">
          <p class="label">Attachments</p>
          <p class="attachment-item"><icon name="paperclip" /> Guest list March.csv</p>
          <p class="attachment-item"><icon name="image" /> BlackDeluxe.jpg</p>
        </div>
        <a href="#">View all</a>
      </div>
      <div class="edit-contract__btn">Edit Contract</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerDetail',

  props: ['customerData'],
  methods: {
    onClickHideIcon () {
      this.$setToggleMobileCustomerDetail(false)
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
#customer_detail {
  background: white;
  flex: 22% 0 0;
  min-width: 190px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  min-height: 100vh;

  &.show {
    right: 0;
    position: absolute !important;
  }

  @media (max-width: 576px) {
    position: fixed;
    right: -800px;
    width: 100%;
  }

  .head {
    background: #4eb8f6;
    padding: 50px 20px 20px 22px;
    position: relative;

    .customer-name {
      font-size: 17px;
      color: #f4fcfb;
      margin-top: 12px;
      margin-left: 5px;
    }

    .sign-in__icon {
      position: absolute;
      top: 20px;
      right: 18px;

      svg {
        color: white;
      }
    }
  }

  .body {
    padding: 30px 20px 40px 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    .content {
      a {
        font-size: 13px;
        color: #6aace2;
      }

      .info {
        margin-bottom: 30px;

        .label {
          font-size: 13px;
          color: #7e8a92;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .info-text {
          font-size: 13px;
          color: #152531;
        }
      }

      .label-items {
        display: flex;
        flex-wrap: wrap;

        span.label-item {
          display: flex;
          align-items: center;
          font-size: 13px;
          color: #08283f;
          padding: 0 10px;
          height: 23px;
          background-color: #d9effd;
          border-radius: 20px;
          margin-right: 8px;
          margin-bottom: 10px;

          svg {
            margin-left: 6px;
            cursor: pointer;
            width: 10px;
          }
        }
      }

      .attachment-item {
        font-size: 13px;
        color: #152531;
        margin-top: 15px;
        display: flex;
        align-items: center;

        svg {
          width: 14px;
          margin-right: 10px;
          color: #a1abb5;
        }
      }
    }

    .edit-contract__btn {
      font-size: 14px;
      color: #56a2de;
      padding: 10px 30px;
      border-radius: 20px;
      background: #d9effd;
      margin: 0 auto;
      transition: background-color 0.3s ease;
      cursor: pointer;

      &:hover {
        background-color: #cfe4f1;
      }
    }
  }
}
</style>
