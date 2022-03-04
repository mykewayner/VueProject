<template>
  <div class="box">
      <Title class="title" text="404 - Page not found" level='1' />
  </div>
</template>

<script>
import Title from '@/components/title'
export default {
    name: "notFound",
    components:{
        Title,
    },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>