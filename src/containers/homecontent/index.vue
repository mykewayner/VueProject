<template>
    <div id="mainContent">
        <img draggable="false" src="@/assets/bola-LogoCompasso1.png" />
        <div id="homeTextBox">
            <div>
            <Title class="title" firstHomeTitle=true level='3' text="Our mission is"/>
            <textContent homeText=true text="que permitam o crecimento dos nossos clientes"/>
            </div>
            <div>          
            <Title class="title" homeTitle=true level='1' text="to transform the world"/>
            <textContent homeText=true text="que permitam o crecimento dos nossos clientes"/>
            </div>
            <div>         
            <Title class="title" homeTitle=true level='1' text="building digital experiences"/>
            <textContent homeText=true text="que permitam o crecimento dos nossos clientes"/>
            </div>
            <div>              
            <Title class="title" homeTitle=true level='1' text="that enable our client's growth"/>
            <textContent homeText=true text="que permitam o crecimento dos nossos clientes"/>
            </div>
        </div>
        
        
    </div>
  
</template>

<script>
import Title from '@/components/title/index.vue'
import textContent from '@/components/textContent/index.vue'
export default {
    name: "HomeContent",
    components:{
        Title,
        textContent,

    }

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>