<template>
    <main class="home" aria-labelledby="main-title">
        <header class="hero">
            <div class="inner">
                <div class="left">
                    <img class="hero-image" :src="$withBase(data.screenshot)"
                         :alt="data.heroAlt || 'hero'">
                </div>
                <div class="right">
                    <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Hello'}}<span
                            class="latest">{{data.latest}}</span></h1>
                    <div class="description">
                        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
                    </div>
                    <div class="action"
                         v-if="data.actions">
                        <action-button
                                v-for="it in data.actions"
                                class="action-button"
                                :item="it"
                        />
                    </div>
                    <div class="platform-action"
                         v-if="data.platforms">
                        <platform-button
                                v-for="it in data.platforms"
                                :item="it"
                        />
                    </div>
                </div>
            </div>

        </header>
        <div
                class="features"
                v-if="data.features && data.features.length"
        >
            <div
                    class="feature"
                    v-for="(feature, index) in data.features"
                    :key="index"
            >
                <h2>{{ feature.title }}</h2>
                <p>{{ feature.details }}</p>
            </div>
        </div>

        <Content class="theme-default-content custom"/>

        <div
                class="footer"
                v-if="data.footer"
        >
            {{ formatFooterText() }}
        </div>
    </main>
</template>

<script>
  import NavLink from '@theme/components/ActionButton.vue'
  import ActionButton from './ActionButton'
  import PlatformButton from './PlatformButton'

  export default {
    components: {ActionButton, PlatformButton, NavLink},

    computed: {
      data () {
        return this.$page.frontmatter
      }
    },
    methods: {
      formatFooterText () {
        return this.data.footer.replace(/{year}/g, new Date().getFullYear()).replace(/{author}/g, this.$site.title)
      }
    }
  }
</script>

<style lang="stylus">
    @import "/fonts/iconfont.css"
    .home
        padding $navbarHeight 2rem 0
        max-width 960px
        margin 0 auto
        display block

        .hero
            margin 2.5rem 0
            padding: 40px 0;
            background-color: #fff;

            img
                max-width: 100%
                max-height 280px
                display block

            h1
                font-size 3rem

            h1, .description, .action
                margin 1.8rem auto

            .action
                text-align center

            #main-title
                margin-top 0

            #main-title .latest
                margin-left 1rem
                font-size 80%
                vertical-align bottom

            .action-button
                margin 0 0.5em

            .platform-action
                display flex

                .platform-button
                    flex: 1;

            .description
                max-width 35rem
                font-size 1.6rem
                line-height 1.3
                color lighten($textColor, 40%)

            .inner
                display flex
                max-width: 1260px;
                margin: 0 auto;

                .left, .right
                    display: inline-block;
                    vertical-align: top;

                .left
                    flex 1
                    align-items center
                    display flex

            .hero-image
                margin-right: 60px;

        .features
            border-top 1px solid $borderColor
            padding 1.2rem 0
            display flex
            flex-wrap wrap
            align-items flex-start
            align-content stretch
            justify-content space-between

        .feature
            flex-grow 1
            flex-basis 30%
            max-width 30%

            h2
                font-size 1.4rem
                font-weight 500
                border-bottom none
                padding-bottom 0
                color lighten($textColor, 10%)

            p
                color lighten($textColor, 25%)

        .footer
            padding 2.5rem
            border-top 1px solid $borderColor
            text-align center
            color lighten($textColor, 25%)

    @media (max-width: $MQMobile)
        .home
            .features
                flex-direction column

            .feature
                max-width 100%
                padding 0 2.5rem

    @media (max-width: $MQMobileNarrow)
        .home
            padding-left 1.5rem
            padding-right 1.5rem

            .hero
                img
                    max-height 210px
                    margin 2rem auto 1.2rem

                h1
                    font-size 2rem

                h1, .description, .action
                    margin 1.2rem auto

                .description
                    font-size 1.2rem

                .hero-image
                    margin auto

            .feature
                h2
                    font-size 1.25rem
</style>
