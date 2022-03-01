<template>
  <div class="containerLeftContent">
                  <div class="intro">
                    <Title class="title" :introTitle=true level='2' text="Olá,"/>
                    <textContent :introText=true  text="Para continuar navegando de forma segura, efetue o login na rede" />
                   </div>

                <div class="login-form">
                    <Title level='3' text="Login" :formTitle=true />
                    <div class="login-input" >
                        <Input type="text" placeholder="Usuário"  class="login-box-input" :textInput=true />
                        <img draggable="false" src="@/assets/Vector.png" class="login-icon" alt="ícone de Usuário">
                    </div>
                    <div class="password-input">
                        <Input type="text" placeholder="Senha" class="login-box-input" :textInput=true />
                        <img draggable="false" src="@/assets/icon-password.png" class="login-icon" alt="ícone de Senha">
                    </div>
                    <!--  <div id="error-msg">
                        <p class="error-msg-visibility">Ops, usuário ou senha inválidos.<br> Tente novamente.</p>
                    </div> -->

                    <Input type="submit" :submitInput=true />

                 </div>
  </div>
</template>

<script>
import Title from '@/components/title/index.vue'
import textContent from '@/components/textContent/index.vue'
import Input from '@/components/input'
export default {
    name:'containerLeft',
    components:{
      Input,
      Title,
      textContent
    }

}
</script>

<style  lang="scss" scoped>
@import './index.scss';
</style>