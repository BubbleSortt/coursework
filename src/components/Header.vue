<template>
  <div class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__logo">
          <div class="logo">
            <router-link to="/">IMIT_SOLUTION</router-link>
          </div>
        </div>
        <div class="header__burger-menu">
          <BurgerMenu
            :value="activeMenu"
            @toggleMenu="(value) => (activeMenu = value)"
          />
        </div>
        <div class="header__nav">
          <Nav />
        </div>
        <div class="header__user">
          <User></User>
        </div>
        <Menu
          :activeMenu="activeMenu"
          @toggleMenu="(value) => (activeMenu = value)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import User from "@/components/User";
import Nav from "@/components/Nav";
import Menu from "@/components/Menu";
import BurgerMenu from "@/components/Burger-menu";
export default {
  name: "header",
  components: {
    User,
    Nav,
    Menu,
    BurgerMenu,
  },

  data() {
    return {
      activeMenu: false,
    };
  },
};
</script>

<style lang="scss">
.logo {
  display: flex;
  flex: 0 0 163px;
  a {
    text-decoration: none;
    color: #fff;
    display: block;
    padding: 10px 20px 10px 0;
  }
}

.header {
  background-color: $header-bg;

  &__burger-menu {
    @include media-breakpoint-up(lg) {
      display: none;
    }
  }

  &__nav {
    @include media-breakpoint-down(lg) {
      display: none;
    }
  }

  &__logo {
    flex: 0 1 200px;
    margin-right: auto;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
  }

  &__menu {
    display: none;
  }

  &__user {
    margin-left: auto;
    flex: 0 1 200px;
    display: flex;
    justify-content: flex-end;
    @include media-breakpoint-down(lg) {
      display: none;
    }
  }
}
</style>
