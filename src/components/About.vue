<template>
  <div class="about">
    <div class="container">
      <div class="about__title">О проекте</div>
      <div class="about__wrapper">
        <div class="about__block">
          <p>Съешь еще этих мягких французских булок, да выпей чаю.</p>

          <p>Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких французских булок, да выпей чаю.</p>

          <p>Съешь еще этих мягких французских булок, да выпей чаю. Съешь еще этих мягких французских булок, да выпей чаю.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about {
  flex-grow: 1;
  padding: 50px 0;
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #272731;
    box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.3);
    border-radius: 25px 25px 0px 0px;
    padding: 70px 10px;
  }

  &__block {
    padding: 30px;
    background: #20202A;
    border: 5px solid #464646;
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.25);
    border-radius: 25px;
    flex: 0 1 800px;
    p {
      margin-bottom: 10px;
    }
  }

  &__title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 50px;
  }
}
</style>
