<template>
   <p :class="{homeText, homeFooterText}">{{ text }}</p>
</template>

<script>
export default {
    name: 'textContent',
    props: {
        text: {
            type: String,
            required: true,
            default: "Default Text",
        },
        homeText: {
            type:Boolean,
            default: false,
        },
        homeFooterText: {
            type: Boolean,
            default: false,
        }

    }

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>