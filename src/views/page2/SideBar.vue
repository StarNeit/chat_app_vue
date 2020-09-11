<template>
  <div id="sidebar">
    <div class="sidebar-top">
      <span class="main-icon">
        <icon name="university" />
      </span>
      <div class="sidebar-menu">
        <span class="menu-icon">
          <icon name="code" />
        </span>
        <span class="menu-icon active">
          <icon name="users" />
        </span>
        <span class="menu-icon">
          <icon name="sort" />
        </span>
        <span class="menu-icon">
          <icon name="random" />
        </span>
      </div>
    </div>
    <div class="sidebar-bottom">
      <span class="icon">
        <icon name="bell" />
      </span>
      <span class="icon">
        <icon name="cog" />
      </span>
      <span class="user-menu">
        <img src="../../assets/images/user1.png" alt="img" />
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SideBar',
  components: { },
  props: {},

  data () {
    return {}
  }
}

</script>

<style lang="scss">
#sidebar {
  width: 50px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .sidebar-top {
    .main-icon {
      width: 32px;
      height: 32px;
      margin: 9px;
      border-radius: 3px;
      background-color: #4d84fb;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #4b7eef;
      }

      svg {
        color: white;
        width: 16px;
      }
    }

    .sidebar-menu {
      margin-top: 75px;

      .menu-icon {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: white;
        }

        &.active {
          background-color: white;
        }

        svg {
          width: 18px;
          color: #272727;
        }
      }
    }
  }

  .sidebar-bottom {
    .icon {
      width: 32px;
      height: 32px;
      margin: 0 auto;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s ease;

      svg {
        color: #717274;
        width: 16px;
      }
    }

    .user-menu {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 5px 0 15px;
    }
  }
}
</style>
