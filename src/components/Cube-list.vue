<template>
  <div :class="$style.root">
    <div :class="$style.item" v-for="(cube, idx) in cubeList" :key="idx">
      <router-link :to="cube.link">
        <CubeLink :text="cube.text" :title="cube.title" />
      </router-link>
    </div>
  </div>
</template>

<script>
import CubeLink from "./Cube-link";

export default {
  name: "cube-list",
  components: {
    CubeLink,
  },
  data() {
    return {
      cubeList: [
        {
          title: "Расписание",
          text: "На осенне-зимний семестр 2020 года",
          link: "/schedule",
        },
        // {
        //   title: "Калькулятор матриц",
        //   text: "Метод Гаусса, сложение, вычитание, умножение, поиск определителя",
        //   link: "/",
        // },
        // {
        //   title: "Задачник Демидовича",
        //   text: "Полный сборник + решебники",
        //   link: "/",
        // },
        // {
        //   title: "Калькулятор многочленов",
        //   text: "Сложение, умножени на маногочлен и число. Пошаговое описание действий",
        //   link: "/",
        // },
      ],
    };
  },
};
</script>

<style lang="scss" module>
.root {
  background: #272731;
  border-radius: 25px;
  padding: 20px;
  margin: -15px;
  display: flex;
  flex-flow: row wrap;
}

.item {
  padding: 15px;
  flex: 0 0 100%;

  @include media-breakpoint-up(sm) {
    flex: 0 0 50%;
  }

  @include media-breakpoint-up(lg) {
    flex: 0 0 33.3333%;
  }
}
</style>
