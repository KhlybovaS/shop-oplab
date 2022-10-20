<template>
  <div>
    <Cards class="cards_style"/>
    <MainContent class="main-content_style"/>
  </div>
</template>

<script>
import MainContent from '@/components/MainContent.vue';
import Cards from '@/components/Cards.vue';

export default {
  components: {
    MainContent,
    Cards
  }
}
</script>

<style lang="scss" scoped>

</style>
