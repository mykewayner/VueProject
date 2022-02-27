<template>
    <section class="home-footer">

                <div id="footer-txt">
                    <textContent homeFooterText=true text="Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixa-a aberta em segundo plano e abra uma nova janela para continuar a navegar"/>
                </div>

                <div id="footer-bar"></div>

                <textContent homeFooterText=true id="footer-refresh-txt" text="Aplication refresh in" />

                <div id="refresh-box">
                    <p id="refresh-time">600</p>
                    <textContent homeFooterText=true text="seconds"/>

                </div>

                <div id="continuar-txt">
                    <textContent homeFooterText=true text="continuar navegando" />
                </div>

                <div id="logout-button">
                    <button>Logout</button>
                </div>


    </section>
  
</template>

<script>
import textContent from '@/components/textContent/index.vue'
export default {
    name:"homeFooter",
    components:{
        textContent
    }
    

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>