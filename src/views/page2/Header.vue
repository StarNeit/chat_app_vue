<template>
  <div id="header">
    <div class="left">
      <div class="header-search">
        <input
          type="text"
          placeholder="Search"
        />
        <icon name="search" />
      </div>
    </div>
    <div class="center">
      <h6>{{customerData.name}}</h6>
      <p><span>•Online</span> on <a href="#">Product/MacBookAir</a></p>
      <span
        class="menu-icon"
        @click="handleClickMenuIcon"
      >
        <icon name="bars" />
      </span>
      <span class="search-icon">
        <icon name="search" />
      </span>
    </div>
    <div class="right">
      <span>
        <icon name="Angle-right" />
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  components: { },
  props: ['customerData'],
  methods: {
    handleClickMenuIcon () {
      this.$setToggleMobileSideMenu(!this.$store.state.toggleMobileSideMenu)
    }
  },
  data () {
    return {}
  }
}

</script>

<style lang="scss">
#header {
  height: 65px;
  min-height: 65px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;

  .left {
    display: flex;
    flex: 21% 0 0;
    height: 100%;

    @media (max-width: 576px) {
      display: none;
    }

    .header-search {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 15px;

      input {
        border: none;
        flex: 1;
        padding: 5px 5px 10px;
        border-bottom: 1px solid #eaeaea;

        &::placeholder {
          color: #a4a4a4;
          font-size: 12px;
        }
      }

      svg {
        width: 15px;
        color: #909090;
        cursor: pointer;
      }
    }

  }

  .center {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    h6 {
      font-size: 18px;
      color: #272727;
      margin-bottom: 5px;
    }

    p {
      font-size: 13px;
      color: #969696;

      span {
        color: #3fc433;
      }

      a {
        color: #969696;
        text-decoration: underline;
      }
    }

    .menu-icon {
      display: none;
      position: absolute;
      left: 15px;
      cursor: pointer;

      @media (max-width: 576px) {
        display: block;
      }
    }

    .search-icon {
      display: none;
      position: absolute;
      right: 15px;
      cursor: pointer;

      @media (max-width: 576px) {
        display: block;
      }
    }
  }

  .right {
    flex: 21% 0 0;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 576px) {
      display: none;
    }

    span {
      margin-right: 5px;
      cursor: pointer;

      svg {
        height: 30px;
        width: 30px;
        color: #4f4f4f;
      }
    }
  }
}
</style>
