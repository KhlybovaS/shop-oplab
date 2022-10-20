<template>
    <div class="main-content">
        <section class="is-medium">
            <b-carousel-list
                class="main-content_carousel"
                v-model="values"
                :data="items"
                :arrow="arrow"
                :icon-prev="iconPrev"
                :icon-next="iconNext"
                :arrow-hover="arrowHover"
                :items-to-list="increment"
                :repeat="repeat"
                :has-drag="drag"
                :has-grayscale="gray"
                :has-opacity="opacity" 
                :icon-size="iconSize"
                v-bind="al"/>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arrow: true,
            al: {
                itemsToShow: 1,
                breakpoints: {
                    768: {
                        itemsToShow: 2
                    },
                    960: {
                        itemsToShow: 3
                    }
                }
            },
            iconPrev: 'arrow-left',
            iconNext: 'arrow-right',
            arrowHover: false,
            drag: true,
            gray: false,
            opacity: false,
            values: 1,
            perList: 1,
            increment: 1,
            repeat: true,
            iconSize: 'is-medium',
            items: [
                {
                    title: 'Slide 1',
                    image: require('@/assets/images/analysis-1.png'),
                },
                {
                    title: 'Slide 2',
                    image: require('@/assets/images/analysis-2.jpg')
                },
                {
                    title: 'Slide 3',
                    image: require('@/assets/images/analysis-3.png')
                },
                {
                    title: 'Slide 4',
                    image: require('@/assets/images/analysis-4.png')
                },
                {
                    title: 'Slide 5',
                    image: require('@/assets/images/analysis-5.png')
                },
                {
                    title: 'Slide 6',
                    image: require('@/assets/images/analysis-6.png')
                },
                {
                    title: 'Slide 7',
                    image: require('@/assets/images/analysis-7.png')
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.main-content {
    display: flex;
    flex-direction: column;
    max-width: $main-width;
    margin: auto auto;
}
</style>

