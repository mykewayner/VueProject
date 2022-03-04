<template>
  <div class="box">
      <Title class="title" text="Error 401 - Unauthorized" level='1' />
      <textContent class="text" text="Please make sure to login" />
      <button @click="redirect">Return</button>
  </div>
</template>

<script>
import Title from '@/components/title/index.vue'
import TextContent from '@/components/textContent'
import { mapMutations } from 'vuex'
export default {
    name: "unauthorized",
    components:{
        Title,
        TextContent
    },
    methods:{
     ...mapMutations(['redirect']),
    }

}
</script>

<style lang="scss" scoped>
    @import './index.scss';
</style>