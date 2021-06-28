<template>
  <a href="#" class="cube-link">
    <div class="cube-link__content">
      <span class="cube-link__title">
        {{ title }}
      </span>
      <span class="cube-link__text">
        {{ text }}
      </span>
    </div>
  </a>
</template>

<script>
export default {
  name: "cube-link",
  props: {
    title: { type: String },
    text: { type: String },
  },
};
</script>

<style lang="scss">
.cube-link {
  position: relative;
  display: block;
  color: white;
  background: linear-gradient(135deg, #5d5be2 0%, #482ea9 100%);
  border-radius: 25px;
  border: 1px solid #6b54ce;

  &::after {
    content: "";
    display: block;
    padding-top: 100%;
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 80px 30px 30px 30px;
  }

  &__title {
    font-size: 21px;
    line-height: 1;
  }

  &__text {
    font-size: 16px;
    line-height: 1;
  }
}
</style>
