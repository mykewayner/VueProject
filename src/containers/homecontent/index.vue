<template>
    <div id="mainContent">
        <img draggable="false" src="@/assets/bola-LogoCompasso1.png" />
        <div id="homeText">
            <div>
              <Title class="title" firstHomeTitle=true level='3' text="Our mission is"/>
            </div>
            
            <div>
                <Title class="title" homeTitle=true level='1' text="to transform the world"/>
            </div>

            <div>
                <Title class="title" homeTitle=true level='1' text="building digital experiences"/>
            </div>
               
            <div>
               <Title class="title" homeTitle=true level='1' text="that enable our client's growth"/>
            </div>
        </div>
        
        
    </div>
  
</template>

<script>
import Title from '@/components/title'
export default {
    name: "HomeContent",
    components:{
        Title

    }

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>