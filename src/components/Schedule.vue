<template>
  <div>
    <div class="container">
      <h1>Расписание</h1>
      <div class="current">
        <div class="current__word">
          Пара сейчас
        </div>
        <div class="current__lesson">
          <ScheduleCard
              timeStart="10:10"
              timeEnd="11:40"
              subject="Математический анализ"
              typeSubject="Лекция"
              audience="3-07 А"
              teacher="Зенович А.В."
          />
        </div>
      </div>
      <v-tabs v-model="tabType" background-color="primary" dark>
        <v-tab v-for="item in type" :key="item.tab">
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabType">
        <v-tab-item v-for="item in (tabType === 0 ? itemsNumerator: itemsDenominator)" :key="item.tab">
          <v-tabs v-model="tabDay" background-color="primary" dark>
            <v-tab v-for="item in (tabType === 0 ? itemsNumerator: itemsDenominator)" :key="item.tab">
              {{ item.tab }}
            </v-tab>
          </v-tabs>
        </v-tab-item>
      </v-tabs-items>

      <v-tabs-items v-model="tabDay">
        <v-tab-item v-for="day in (tabType === 0 ? itemsNumerator: itemsDenominator)" :key="day.tab">
          <ScheduleCard
            v-for="lesson in day.content"
            :key="lesson.timeStart"
            :timeStart="lesson.timeStart"
            :timeEnd="lesson.timeEnd"
            :subject="lesson.subject"
            :typeSubject="lesson.typeSubject"
            :audience="lesson.audience"
            :teacher="lesson.teacher"
          />
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
import ScheduleCard from "@/components/Schedule-card";
export default {
  name: "schedule",
  components: {
    ScheduleCard,
  },
  data() {
    return {
      tabType: 0,
      tabDay: null,
      type: [{ tab: "Числитель" }, { tab: "Знаменатель" }],
      itemsNumerator: [
        {
          tab: "Понедельник",
          content: [
            {
              timeStart: "10:10",
              timeEnd: "11:40",
              subject: "Инорматика и программирование",
              typeSubject: "Лабораторная",
              audience: "1-12 М",
              teacher: "Штельмах Т.В.",
            },
            {
              timeStart: "12:00",
              timeEnd: "13:30",
              subject: "Кодирование и криптография",
              typeSubject: "Практика",
              audience: "3-07 А",
              teacher: "Григорьева Е.Г.",
            },
            {
              timeStart: "13:40",
              timeEnd: "15:10",
              subject: "История математики и информатики",
              typeSubject: "Лекция",
              audience: "4-07 А",
              teacher: "Помельников Ю.В.",
            },
          ],
        },
        {
          tab: "Вторник",
          content: [
            {
              timeStart: "10:10",
              timeEnd: "11:40",
              subject: "Структуры и алгоритмы",
              typeSubject: "Лабораторная",
              audience: "3-07 А",
              teacher: "Ватюкова О.Ю.",
            },
            {
              timeStart: "12:00",
              timeEnd: "13:30",
              subject: "Структуры и алгоритмы",
              typeSubject: "Лекция",
              audience: "3-07 А",
              teacher: "Зенович А.В.",
            },
            {
              timeStart: "13:40",
              timeEnd: "15:10",
              subject: "Кодирование и криптография",
              typeSubject: "Лекция",
              audience: "3-07 А",
              teacher: "Клячин В.А.",
            },
          ],
        },
        {
          tab: "Среда",
          content: [
            {
              timeStart: "10:10",
              timeEnd: "11:40",
              subject: "Структуры и алгоритмы",
              typeSubject: "Лабораторная",
              audience: "3-07 А",
              teacher: "Ватюкова О.Ю.",
            },
            {
              timeStart: "12:00",
              timeEnd: "13:30",
              subject: "Инорматика и программирование",
              typeSubject: "Лекция",
              audience: "1-12 М",
              teacher: "Штельмах Т.В.",
            },
          ],
        },
        {
          tab: "Суббота",
          content: [
            {
              timeStart: "8:30",
              timeEnd: "10:00",
              subject: "Экономика",
              typeSubject: "Лекция",
              audience: "Дистанционно",
              teacher: "Светлов А. В.",
            },
          ],
        },
      ],
      itemsDenominator: [
        {
          tab: "Вторник",
          content: [
            {
              timeStart: "10:10",
              timeEnd: "11:40",
              subject: "Математический анализ",
              typeSubject: "Лекция",
              audience: "3-12 Б",
              teacher: "Светлов А. В.",
            },
          ],
        },
        {
          tab: "Среда",
          content: [
            {
              timeStart: "10:10",
              timeEnd: "11:40",
              subject: "Математический анализ",
              typeSubject: "Практика",
              audience: "3-07 А",
              teacher: "Светлов А. В.",
            },
          ],
        },
        {
          tab: "Пятница",
          content: [
            {
              timeStart: "10:10",
              timeEnd: "11:40",
              subject: "Математический анализ",
              typeSubject: "Лекция",
              audience: "3-33 А",
              teacher: "Светлов А. В.",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.root {
}

.current {
  display: flex;
  align-items: center;
  background-color: #272731;
  border-radius: 25px 25px 0px 0px;
  padding: 30px;
  margin-bottom: 25px;
  &__lesson {
    flex: 1 1 100%;
  }

  &__word {
    flex: 1 1 500px;
    font-size: 30px;
  }

  @include media-breakpoint-down(md) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
    &__word {
      flex: 1 1 auto;
      margin-bottom: 15px;
    }
  }
}

.theme--dark.v-tabs > .v-tabs-bar,
.theme--light.v-tabs-items {
  background-color: $main-bg !important;
}

.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)
  > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes)
  .v-slide-group__prev {
  display: none !important;
}

.title {
}
</style>
