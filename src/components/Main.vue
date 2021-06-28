<template>
  <div class="main">
    <div class="container">
      <h1 class="main__title">IMIT_SOLUTION - простое решение сложных задач</h1>
      <span class="main__subtitle">
        Все, что вам нужно - в одном месте. Калькуляторы, расписание, лекции,
        задачники...
        <br />
        Ничего лишнего
      </span>
      <CubeList />
    </div>
  </div>
</template>

<script>
import CubeList from "./Cube-list";
export default {
  name: "Main",
  components: {
    CubeList,
  },
};
</script>

<style lang="scss">
.main {
  padding-bottom: 80px;
  &__title {
    margin-top: 80px;
    font-size: 35px;
    line-height: 1;
    text-align: center;
    @include media-breakpoint-down(lg) {
      margin-top: 50px;
      font-size: 28px;
    }

    @include media-breakpoint-down(sm) {
      font-size: 23px;
      margin-top: 35px;
    }
  }

  &__subtitle {
    color: $purple-primary;
    font-size: 20px;
    text-align: center;
    display: block;
    margin-bottom: 80px;
    @include media-breakpoint-down(lg) {
      font-size: 17px;
    }

    @include media-breakpoint-down(sm) {
      font-size: 17px;
    }
  }
}
</style>
