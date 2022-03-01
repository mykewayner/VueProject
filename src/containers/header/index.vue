<template>
  <div id=header>
    <img draggable="false" src="@/assets/LogoCompasso1.png" alt="Logo">
    <clock></clock>
    <p>Placeholder</p>

  </div>
</template>

<script>
import Clock from '@/components/clock/index.vue'
export default {
  name: 'Header',
  components: {
    Clock,
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>

