<template>
  <div class="containerLeftContent">
                  <div class="intro">
                    <Title class="title" :introTitle=true level='2' text="Olá,"/>
                    <textContent :introText=true  text="Para continuar navegando de forma segura, efetue o login na rede" />
                   </div>

                <form @submit.prevent="loginAuth" class="login-form">
                    <Title level='3' text="Login" :formTitle=true />
                    <div class="login-input" >
                        <Input type="text" placeholder="Usuário"  class="login-box-input" :textInput=true />
                        <img draggable="false" src="@/assets/Vector.png" class="login-icon" alt="ícone de Usuário">
                    </div>
                    <div class="password-input">
                        <Input  type="password" placeholder="Senha" class="login-box-input" :textInput=true />
                        
                        <img draggable="false" src="@/assets/icon-password.png" class="login-icon" alt="ícone de Senha">
                    </div>
                    <div class="errorMsg">
                        <p v-if="loginError" class="error">Ops, usuário ou senha inválidos.<br> Tente novamente.</p>
                    </div>

                    <Input type="submit" :submitInput=true />

                 </form>
  </div>
</template>

<script>
import Title from '@/components/title/index.vue'
import textContent from '@/components/textContent/index.vue'
import Input from '@/components/input'
import { mapMutations, mapState } from 'vuex'

export default {
    name:'containerLeft',
    components:{
      Input,
      Title,
      textContent
    },

    computed: {
      ...mapState(["loginError"]),
    },

    methods: {
      ...mapMutations(["loginAuth"]),
    }



}
</script>

<style  lang="scss" scoped>
@import './index.scss';
</style>