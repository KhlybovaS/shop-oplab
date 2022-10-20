<template>
    <section class="type-content">
        <h5 class="title has-text-centered">
          Анализы по органам
        </h5>
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="cat of sortedCategories" :key="cat.Id">
          <div class="card">
           <header class="card-header">
            <nuxt-link class="card-header-title" :to="`/OrganAnalyze/${cat.OrganId}`">
              {{ cat.Organ }}
            </nuxt-link>
          </header>
          <div class="card-content" v-for="item of sortedItems.filter(item => item.Organ === cat.Organ).slice(0,3)" :key="item.Id">
              <nuxt-link :to="`/ListAnalyze/${item.Id}`">
                {{ item.FullName }}
              </nuxt-link>
          </div>
          <footer class="card-footer">
            <nuxt-link :to="`/OrganAnalyze/${cat.OrganId}`"
              class="card-footer-item">
              посмотреть еще
            </nuxt-link>
          </footer>
        </div>
      </div>
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
    sortedCategories() {
      const cats = this.posts.reduce((p,c) => {
        p[c.Organ] = c
        return p
      }, {})
      return Object.values(cats).sort((a,b) => a.Organ.localeCompare(b.Organ))
    },
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
.type-content {
  margin-top: 10px;
  max-width: $main-width;
  margin: auto 2.5%;

  .title {
    margin-top: 20px;
  }

  .card-header-title {
    padding: 10px;
  }

  .card-content {
    padding: 10px;
  }
  .card-footer-item {
    color: black;
  }
}

@media screen and (max-width: $mobile-width){
.type-content {
    margin-top: $menu-indent-mobile;
  }
}
</style>