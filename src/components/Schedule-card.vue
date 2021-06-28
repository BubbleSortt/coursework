<template>
  <div :class="$style.root">
    <div :class="$style.time">
      <span :class="$style['time-start']">{{ timeStart }}</span>
      <div :class="$style['time-divider']">-</div>
      <div :class="$style['time-end']">{{ timeEnd }}</div>
    </div>
    <div :class="$style.subject">{{ subject }}</div>
    <div :class="$style.type">{{ typeSubject }}</div>
    <div :class="$style.meta">
      <div :class="$style.audience">{{ audience }}</div>
      <div :class="$style.teacher">{{ teacher }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "scheduleCard",
  props: [
    "timeStart",
    "timeEnd",
    "subject",
    "typeSubject",
    "audience",
    "teacher",
  ],
};
</script>

<style lang="scss" module>
.root {
  border-radius: 25px;
  background: $header-bg;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 15px 30px 15px;

  & + .root {
    margin-top: 10px;
  }
}

.time {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-bottom: 25px;
}

.time-start {
}

.time-divider {
  margin: 0 7px;
}

.time-end {
}

.subject {
  font-size: 20px;
  margin-bottom: 5px;
  text-align: center;
}

.type {
  font-size: 15px;
  margin-bottom: 15px;
  text-align: center;
}

.meta {
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    background: linear-gradient(95.53deg, #5d5be2 0%, #482ea9 100.66%);
    padding: 10px 20px;
    border-radius: 30px;
    text-align: center;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}

.audience {
}

.teacher {
}
</style>
