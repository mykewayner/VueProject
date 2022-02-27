<template>
  <div class="home">
    <Header></Header>
    <homecontent></homecontent>
    <homeFooter></homeFooter>


    
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/containers/header/index.vue"
import homecontent from "@/containers/homecontent/index.vue"
import homeFooter from "@/containers/footer/index.vue"

export default {
  name: 'HomePage',
  components: {
    Header,
    homecontent,
    homeFooter
  
  }
}
</script>
