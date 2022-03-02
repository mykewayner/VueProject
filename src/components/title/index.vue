<template>
    <h1 v-if="level === '1'" :class="{homeTitle, firstHomeTitle, introTitle, formTitle}"> {{ text }}</h1>
    <h2 v-else-if="level === '2'" :class="{homeTitle, firstHomeTitle, introTitle, formTitle}">{{ text }}</h2>
    <h3 v-else-if="level === '3'" :class="{homeTitle, firstHomeTitle, introTitle, formTitle}">{{ text }}</h3>
    <h4 v-else-if="level === '4'" :class="{homeTitle, firstHomeTitle, introTitle, formTitle}">{{ text }}</h4>
    <h5 v-else-if="level === '5'" :class="{homeTitle, firstHomeTitle, introTitle, formTitle}">{{ text }}</h5>
    <h6 v-else-if="level === '6'" :class="{homeTitle, firstHomeTitle, introTitle, formTitle}">{{ text }}</h6>
</template>

<script>
export default {
 name:'Title',
 props:{
   text:{
     type: String,
     required: true,
     default: 'Default title'
   },
   level:{
     type: String,
     required: true,
     default: '1'
   },
   firstHomeTitle:{
     default: false,
   },
   homeTitle:{
     default: false,
   },
   introTitle:{
     default: false,
   },
   formTitle:{
     default: false,
   },
 },

 
}
</script>

<style lang='scss' scoped>
    @import './index.scss';
</style>