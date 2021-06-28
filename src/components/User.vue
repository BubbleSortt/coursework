<template>
  <div class="user">
    <div class="user__name">Дима</div>
    <div class="user__avatar">
      <img src="https://placehold.it/40x40" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
};
</script>

<style lang="scss">
.user {
  display: flex;
  align-items: center;
  &__name {
    font-size: 16px;
    line-height: 20px;
    color: #fff;
    text-align: right;
  }

  &__avatar {
    margin-left: 25px;
    overflow: hidden;
    border-radius: 50%;
    min-width: 40px;
    height: 40px;
    width: 40px;
  }
}
</style>
