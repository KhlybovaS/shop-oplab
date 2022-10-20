<template>
  <section class="main-content">
      <h5 class="title has-text-centered">
        Популярные анализы
      </h5>
    <div class="card-content" v-for="item of sortedItems.filter(item => item.IsPopular == true )" :key="item.Id">
        <nuxt-link :to="`/ListAnalyze/${item.Id}`">
            {{ item.FullName }}
        </nuxt-link>
        <span>{{ item.Cost }} руб.</span>
        <b-icon 
            icon="cart-outline"
            size="is-small"
            type="is-info"
            class="b-icon">
        </b-icon>
    </div>
</section>
</template>

<script>
  import posts from '~/posts.json';
  export default {
    name: 'posts',
    data () {
      return { posts }
    },
  computed: {
    sortedItems() {
      const items = this.posts.reduce((p,c) => {
        p[c.FullName] = c
        return p
      }, {})
      return Object.values(items).sort((a,b) => a.FullName.localeCompare(b.FullName))
    }
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  max-width: $main-width;
  margin: auto 2.5%;

  .title {
    margin-top: 20px;
  }

  .card-content {
    padding: 10px;
    border-bottom: 2px solid #bbb;
  }
}
.pagination {
  margin-bottom: 10px;
}

@media screen and (max-width: $mobile-width){
  .main-content {
    margin-top: $menu-indent;
  }
}
</style>