<template>
  <div class="home">
    <Header></Header>
    <homecontent></homecontent>

    
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/containers/header/index.vue"
import homecontent from "@/containers/homecontent/index.vue"

export default {
  name: 'HomePage',
  components: {
    Header,
    homecontent
  
  }
}
</script>
