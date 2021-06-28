<template>
  <div class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__col">
          2020 imitsolution.ru
        </div>
        <div class="footer__col">
          <div class="footer__item">
            <div>Звоните</div>
            <div>+7999999999</div>
          </div>
          <div class="footer__item">
            <div>Пишите</div>
            <div>ilemail123@email.ru</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
  background-color: $header-bg;
  padding: 20px 0;
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__item {
    & + & {
      margin-top: 10px;
    }
  }
}
</style>
