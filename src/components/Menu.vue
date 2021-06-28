<template>
  <div
    :class="[
      $style.root,
      {
        [$style.open]: activeMenu,
      },
    ]"
  >
    <div :class="$style.header">
      <div class="logo" @click="$emit('toggleMenu', !activeMenu)">
        <router-link to="/">IMIT_SOLUTION</router-link>
      </div>
      <div :class="$style.close" @click="$emit('toggleMenu', !activeMenu)">
        <span />
        <span />
      </div>
    </div>
    <div class="menu__body">
      <ul :class="$style.list">
        <li class="menu__item" @click="$emit('toggleMenu', !activeMenu)">
          <router-link :class="$style.link" to="/schedule"
            >Расписание</router-link
          >
        </li>
        <li class="menu__item">
          <a :class="$style.link" href="#">Мое расписание</a>
        </li>
        <li class="menu__item" @click="$emit('toggleMenu', !activeMenu)">
          <router-link :class="$style.link" to="/about"
          >О проекте</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Menu",
  props: ["activeMenu"],
};
</script>

<style lang="scss" module>
.root {
  transform: translateX(-100%);
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: $header-bg;
  overflow: hidden;
  @include media-breakpoint-up(lg) {
    display: none;
  }
}

.open {
  transform: translateX(0);
}

.header {
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 15px;
}

.list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.link {
  display: block;
  font-size: 16px;
  color: white;
  text-decoration: none;
  padding: 18px 15px;
  position: relative;

  &::after {
    content: " ";
    width: 100%;
    height: 1px;
    top: 100%;
    background-color: $purple-dark;
    position: absolute;
    left: 0;
  }
}

.close {
  width: 25px;
  height: 18px;
  position: absolute;
  right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  span {
    height: 2px;
    width: 100%;
    background: white;
    border-radius: 10px;
    margin: 2px;
  }

  span:first-child {
    transform: rotate(-45deg) translate(-4px, 2px);
  }

  span:last-child {
    transform: rotate(45deg) translate(-6px, -4px);
  }
}

//.menu {
//
//  &__header {
//    height: 60px;
//  }
//
//  &__list {
//    margin: 0;
//    padding: 0;
//    list-style: none;
//  }
//
//  &__item {
//  }
//
//  &__link {
//    display: block;
//    font-size: 16px;
//    color: white;
//    text-decoration: none;
//    padding: 18px 15px;
//    position: relative;
//
//    &::after {
//      content: ' ';
//      width: 100%;
//      height: 1px;
//      top: 100%;
//      background-color: $purple-dark;
//      position: absolute;
//      left: 0;
//    }
//  }
//
//}
</style>
