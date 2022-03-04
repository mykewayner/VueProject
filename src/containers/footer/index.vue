<template>
    <section class="home-footer">

                <div id="footer-txt">
                    <textContent :homeFooterText=true text="Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixa-a aberta em segundo plano e abra uma nova janela para continuar a navegar"/>
                </div>

                <div id="footer-bar"></div>

                <textContent :homeFooterText=true id="footer-refresh-txt" text="Aplication refresh in" />

                <timer />

                <div id="continuar-txt">
                    <textContent :homeFooterText=true text="continuar navegando" />
                </div>

                <div @click="logout" id="logout-button">
                    <button  >Logout</button>
                </div>


    </section>
  
</template>

<script>
import textContent from '@/components/textContent/index.vue'
import timer from '@/components/timer/index.vue'
import { mapMutations } from 'vuex'
export default {
    name:"homeFooter",
    components:{
        textContent,
        timer
    },
    
     methods: {
      
     ...mapMutations(['logout']),
    
    }
}

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>