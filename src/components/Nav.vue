<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link class="nav__link" to="/Schedule">Расписание</router-link>
      </li>
      <li class="nav__item"><a class="nav__link" href="#">Мое расписание</a></li>
      <li class="nav__item"><router-link class="nav__link" to="/About">О проекте</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss">
.nav {
  &__list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    padding: 0 30px;
  }

  &__link {
    font-size: 16px;
    line-height: 20px;
    color: #bfbfbf;
    text-decoration: none;
    display: block;
    padding: 10px 0;
  }
}
</style>
