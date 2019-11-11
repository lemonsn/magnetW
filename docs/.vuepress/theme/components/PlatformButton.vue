<template>
    <a class="platform-button" :href="item.link" target="_blank">
        <i :class="'iconfont icon-'+item.icon"></i>
        <div class="platform-button-text">{{ item.text }}</div>
    </a>
</template>

<script>
  export default {
    props: {
      item: {
        required: true
      }
    },

    computed: {},
    methods: {}
  }
</script>

<style lang="stylus">
    .platform-button
        text-align center

        .iconfont, .platform-button-text
            transition all 0.15s ease
            color #7f8c8d

        .iconfont
            font-size 2em

        .platform-button-text
            font-size 1.1em
            margin-top 0.3em

    .platform-button:hover
        .iconfont, .platform-button-text
            color $accentColor
</style>
