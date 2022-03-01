<template>
  <input :type="type" :placeholder="placeholder" :class="{textInput, submitInput}">  
</template>

<script>
export default {
    name: "Input",
    props:{
        type:{
            required: true,
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
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>