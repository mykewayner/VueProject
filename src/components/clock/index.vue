<template>
    <div>
        <div class="timeContainer">    
            <div class="time">{{ hours }}</div>
            <div class="time">:</div>
            <div class="time">{{ minutes }}</div>
        </div>
        <div class="date">{{ actualDate }}</div>
    </div>
</template>

<script>
//    import textContent from '@/components/textContent/index.vue'
    import {dayOfWeek} from '@/constants/dayOfWeek'
    import {monthOfYear} from '@/constants/monthOfYear'

export default {
    name: 'homeClock',
    components: {
//        textContent,
    },

    data() {
        return{
         minutes: 0,
         hours: 0,
         day: "",
         weekDay: "",
         month: "",
         year: "",
         actualDate: "",
      }
  },
   mounted() {
    setInterval(() => this.setTime(), 1000)
  },
  methods: {
    setTime() {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let weekDay = date.getDay();
      this.weekDay = weekDay
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getFullYear();
      hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours;
      minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes;
      this.hours = hours;
      this.minutes = minutes;

      let actualDate = `${dayOfWeek[weekDay]}, ${day<=9 ? "0" : ""}${day} de ${monthOfYear[month]} de ${year}`
      this.actualDate = actualDate
    }
  }


    

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>