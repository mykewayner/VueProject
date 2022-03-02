<template>
  <div id=header>
    <img draggable="false" src="@/assets/LogoCompasso1.png" alt="Logo">
    <clock></clock>
    <Weather></Weather>

  </div>
</template>

<script>
import Clock from '@/components/clock/index.vue'
import Weather from '@/components/weather/index.vue'
export default {
  name: 'Header',
  components: {
    Clock,
    Weather,
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>

