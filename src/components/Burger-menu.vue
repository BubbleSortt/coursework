<template>
  <div
    @click="$emit('toggleMenu', !value)"
    :class="[
      $style.root,
      {
        [$style.active]: value,
      },
    ]"
  >
    <span />
    <span />
    <span />
  </div>
</template>

<script>
export default {
  name: "Burger-menu",
  props: { value: { type: Boolean } },
};
</script>

<style lang="scss" module>
.root {
  width: 25px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  span {
    background: #fff;
    border-radius: 10px;
    height: 2px;
    margin: 2px 0;
    transition: 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  span:nth-of-type(1) {
    width: 50%;
  }
  span:nth-of-type(2) {
    width: 100%;
  }
  span:nth-of-type(3) {
    width: 75%;
  }
}

.active {
  span {
    opacity: 0;
  }
  span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(14px, 0px);
  }
  span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
  }
  span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(1px, -11px) rotatez(45deg);
  }
}
</style>
