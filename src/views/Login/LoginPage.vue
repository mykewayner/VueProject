<template>
  <div class="login">
    <containerLeft/>
    <containerRight/>
  </div>
  
</template>

<script>
import containerLeft from '@/containers/containerLeft/index.vue'
import containerRight from '@/containers/containerRight/index.vue'
export default {
  name: 'LoginPage',
  components: {
    containerLeft,
    containerRight
  
  }

}
</script>

<style lang="scss" scoped>
@import './LoginPage.scss';
</style>
