<template>
  <div class="app">
    <div class="header">
      <Search class="search_style"/>
      <Navbar class="navbar_style"/>
    </div>
    <nuxt class="main-content-wrapper"/>
    <BackToTop/>
    <Footer class="footer_style"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/TheFooter.vue';
import Search from '@/components/Search.vue';
import BackToTop from '@/components/BackToTop.vue';
export default {
  components: {
    Navbar,
    Footer,
    Search,
    BackToTop
  }
}
</script>

<style lang="scss" scoped>
.app {
  .header {
    display: flex;
    flex-direction: column;
    margin: auto auto;
  }
  .main-content-wrapper {
    min-height: 65vh;
  }
}

@media screen and (max-width: $mobile-width){
  .header {
     flex-direction: row;
     position: relative;
     z-index: 2;

    .search_style {
      order: 1;
      position: absolute;
      top: 0;
      left: 0; 
      width: 100%;
    }
  .navbar_style {
    order: -1;
  }
}
  .main-content-wrapper {
    order: 2;
    z-index: 1;
    margin-top: $menu-indent;
  }
  .footer_style {
    order: 3;
  }
}
</style>
