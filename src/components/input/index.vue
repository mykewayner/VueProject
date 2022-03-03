<template>
    <div>
        <input v-model="user" @input="handleUser" v-if="type === 'text'" :type="type" :placeholder="placeholder" :class="{textInput}">
        <input v-model="password" @input="handlePassword" v-if="type === 'password'" :type="type" :placeholder="placeholder" :class="{textInput}">
        <input v-if="type === 'submit'" :type="type" :placeholder="placeholder" :class="{submitInput}">
    </div>  
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
    name: "Input",
    props:{
        type:{
            default: "text",
            type: String,
        },
        placeholder:{
            type: String,
            default: "PlaceHolder",
        },
        textInput:{
            type: Boolean,
            default: false,
        },
        submitInput:{
            type: Boolean,
            default: false,
        }

    },
    data(){
        return{
            user:"",
            password:"",
        }
    },
    computed:{
    
      ...mapState(["userData", "passwordData"])
    
    },
    methods: {
      ...mapMutations(["loginAuth", "setUser","setPassword"]),
      handleUser(){
        this.$store.commit("setUser", this.user)
      },
      handlePassword(){
        this.$store.commit("setPassword", this.password)
      }
      
          
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>