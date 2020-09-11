<template>
  <div id="customer-detail-panel">
    <div class="header">
      <span class="avatar">W</span>
      <div class="name">
        <h6>White Bear from London</h6>
        <p>whitebear@gmail.com</p>
      </div>
      <span class="ellipsis-icon">
        <icon name="ellipsis-v" />
      </span>
    </div>
    <div class="details">
      <h6>Details</h6>
      <div class="list">
        <div class="list-item">
          <div class="label">Email:</div>
          <div class="content"><a href="#">whitebear@gmail.com</a></div>
        </div>
        <div class="list-item">
          <div class="label">Company:</div>
          <div class="content"><a href="#">Evil Corporation</a></div>
        </div>
        <div class="list-item">
          <div class="label">Phone number:</div>
          <div class="content"><p>+65 636 363 636</p></div>
        </div>
        <div class="list-item">
          <div class="label">Last Visit:</div>
          <div class="content"><p>Today at 12:09 PM</p></div>
        </div>
        <div class="list-item">
          <div class="label">First Visit:</div>
          <div class="content"><p>10 days ago</p></div>
        </div>
      </div>
    </div>
    <div class="recent">
      <h6>Recent Pageviews</h6>
      <div class="list">
        <div class="item border-line">
          <icon name="circle" />
          <div class="link-address">
            <a href="#">https://alla.com/iphonexs256</a>
          </div>
          <span class="time">Now</span>
        </div>
        <div class="item border-line">
          <icon name="circle" />
          <div class="link-address">
            <a href="#">https://alla.com/macbookpro</a>
          </div>
          <span class="time">2 min</span>
        </div>
        <div class="item border-line">
          <icon name="circle" />
          <div class="link-address">
            <a href="#">https://alla.com/macbookair</a>
          </div>
          <span class="time">5 min</span>
        </div>
        <div class="item">
          <icon name="circle" />
          <div class="link-address">
            <a href="#">https://alla.com/iphonexr64</a>
          </div>
          <span class="time">10min</span>
        </div>
      </div>
    </div>
    <div class="recent">
      <h6>Recent Conversation</h6>
      <div class="list">
        <div class="item border-line">
          <icon name="circle" />
          <div class="link-address">
            <a href="#">With <span>Marta Cacaco</span></a>
          </div>
          <span class="time">1 days</span>
        </div>
        <div class="item">
          <icon name="circle" />
          <div class="link-address">
            <a href="#">With <span>Frank Mankao</span></a>
          </div>
          <span class="time">2 days</span>
        </div>
      </div>
    </div>
    <div class="integrations">
      <h6>Integrations</h6>
      <div class="integration-item">
        <img src="../../assets/images/integration_jira.png" alt="img" />
        <span class="icon">
          <icon name="bars" />
        </span>
      </div>
      <div class="integration-item">
        <img src="../../assets/images/integration_slack.png" alt="img" />
        <span class="icon">
          <icon name="bars" />
        </span>
      </div>
      <div class="integration-item">
        <img src="../../assets/images/integration_stripe.png" alt="img" />
        <span class="icon">
          <icon name="bars" />
        </span>
      </div>
      <div class="integration-item">
        <img src="../../assets/images/integration_bigcartel.png" alt="img" />
        <span class="icon">
          <icon name="bars" />
        </span>
      </div>
      <div class="integration-item">
        <img src="../../assets/images/integration_twilio.png" alt="img" />
        <span class="icon">
          <icon name="bars" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CustomerDetail',
  components: { },
  props: {},

  data () {
    return {}
  }
}

</script>

<style lang="scss">
#customer-detail-panel {
  flex: 21% 0 0;
  height: 100%;
  background-color: white;
  border-top: 2px solid #f3f3f3;
  color: #272727;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .header {
    display: flex;
    padding: 25px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;

    span.avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #FD9786;
      overflow: hidden;
      width: 55px;
      height: 55px;
      color: white;
      font-size: 17px;
    }

    .name {
      margin-left: 15px;

      h6 {
        font-size: 16px;
        color: #272727;
        margin: 10px 0;
      }

      p {
        font-size: 13px;
        color: #a0a0a0;
      }
    }

    span.ellipsis-icon {
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s ease;
      border-radius: 50%;
      position: absolute;
      top: 25px;
      right: 20px;

      &:hover {
        background-color: #f7f7f7;
      }
      svg {
        height: 15px;
        color: #969696;
      }
    }
  }

  .details {
    padding: 25px;
    border-bottom: 1px solid #f0f0f0;

    h6 {
      font-size: 16px;
      color: #272727;
    }

    .list {
      .list-item {
        display: flex;
        margin-top: 20px;

        .label {
          width: 50%;
          font-size: 13px;

        }

        .content {
          width: 50%;
          font-size: 13px;
        }
      }
    }
  }

  .recent {
    padding: 25px 25px 0;
    border-bottom: 1px solid #f0f0f0;

    h6 {
      font-size: 16px;
      color: #272727;
      margin-bottom: 15px;
    }

    .list {
      .item {
        padding-bottom: 18px;
        display: flex;
        align-items: center;
        position: relative;

        &.border-line:before {
          content: '';
          position: absolute;
          left: 3px;
          width: 2px;
          top: 7px;
          bottom: -7px;
          background-color: #f3f3f3;
        }

        svg {
          color: #d1d1d1;
          width: 8px;
          z-index: 1;
        }

        .link-address {
          display: flex;
          align-items: center;
          padding-left: 10px;
          width: 83%;

          a {
            color: #272727;
            font-size: 13px;

            span {
              color: #1d4ffe;
            }
          }
        }

        .time {
          font-size: 13px;
          color: #aeaeae;
        }
      }
    }
  }

  .integrations {
    padding: 25px 15px;
    border-bottom: 1px solid #f0f0f0;

    h6 {
      font-size: 16px;
      color: #272727;
      margin-bottom: 15px;
      margin-left: 10px;
    }

    .integration-item {
      border-radius: 10px;
      overflow: hidden;
      background-color: white;
      box-shadow: 0 0 20px 7px #f5f5f5;
      padding: 23px 25px 23px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      .icon {
        cursor: pointer;

        svg {
          width: 20px;
          height: 15px;
          color: #9e9e9e;
        }
      }
    }
  }
}
</style>
