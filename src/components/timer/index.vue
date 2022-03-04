<template>
  <div class='refreshBox'>
    <h1>{{ seconds }}</h1>
    <p>seconds</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  name: 'Timer',
  computed:{
   ...mapState(['logged']),
  },
  data() {
    return {
      seconds:'',
      timerRunning: true,
    }
  },
  methods: {
      
    ...mapMutations(['logout']),
    
    setTimer(){
      if(this.timerRunning){
        this.seconds --;
        if(this.seconds == 0){
          this.timeout()
        }
      }
    },
    timeout(){
      this.logout()
      this.timerRunning = false;

    }
  },
  created(){
    this.seconds = 600
    setInterval(() => {
      this.setTimer()
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>