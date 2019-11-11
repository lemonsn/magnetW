<template>
    <router-link
            class="button white"
            :to="link"
            @focusout.native="focusoutAction"
            v-if="!isExternal(link)"
            :exact="exact"
    >{{ item.text }}
    </router-link>
    <a v-else
       :href="link"
       @focusout="focusoutAction"
       class="button gray has-icon"
       :target="isMailto(link) || isTel(link) ? null : '_blank'"
       :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
    >
        <i v-if="item.icon" :class="'button-icon iconfont icon-'+item.icon"></i>
        <span class="button-icon-text">{{ item.text }}</span>
    </a>
</template>

<script>
  import {isExternal, isMailto, isTel, ensureExt} from '@parent-theme/util'

  export default {
    props: {
      item: {
        required: true
      }
    },

    computed: {
      link () {
        return ensureExt(this.item.link)
      },

      exact () {
        if (this.$site.locales) {
          return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
        }
        return this.link === '/'
      }
    },

    methods: {
      isExternal,
      isMailto,
      isTel,
      focusoutAction () {
        this.$emit('focusout')
      }
    }
  }
</script>
<style lang="stylus">
    .button-icon
        position absolute
        left 0.2em
        top 0.25em
        font-size 1.8em !important
    .button-icon-text
        margin-left 1.5em
    a.button,
    input.button
        margin 1em 0
        font-size 1.1em
        font-weight 500
        letter-spacing 0.1em
        min-width 8em
        text-align center
        padding 0.75em 1.9em
        border-radius 2em
        display inline-block
        color #fff
        background-color $accentColor
        transition all 0.15s ease
        box-sizing border-box
        border 1px solid $accentColor
    a
        &.button
            &.has-icon
                position relative
    a.button.white,
    input.button.white
        background-color #fff
        color $accentColor
    a.button.gray,
    input.button.gray
        background-color #f6f6f6
        color #7f8c8d
        border-color #f6f6f6

    a.button.white:hover
        background-color $accentColor
        color #fff

    a.button.gray:hover
        background-color #7f8c8d
        color #f6f6f6
        border-color #7f8c8d
</style>
