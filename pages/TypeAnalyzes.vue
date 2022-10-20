<template>
    <section class="type-content">
      <div>
        <h5 class="title has-text-centered">
          Анализы по видам исследований
        </h5>
      <div class="columns is-multiline">
        <div class="column  is-one-third" v-for="cat of sortedCategories" :key="cat.Id">
          <div class="card">
           <header class="card-header">
            <nuxt-link class="card-header-title" :to="`/TypeAnalyze/${cat.FolderId}`">
              {{ cat.Folder }}
            </nuxt-link>
          </header>
          <div class="card-content" v-for="item of sortedItems.filter(item => item.Folder === cat.Folder).slice(0,3)" :key="item.Id">
              <nuxt-link :to="`/ListAnalyze/${item.Id}`">
                {{ item.FullName }}
              </nuxt-link>
          </div>
          <footer class="card-footer">
            <nuxt-link :to="`/TypeAnalyze/${cat.FolderId}`"
              class="card-footer-item">
              посмотреть еще
            </nuxt-link>
          </footer>
        </div>
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
        p[c.Folder] = c
        return p
      }, {})
      return Object.values(cats).sort((a,b) => a.Folder.localeCompare(b.Folder))
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
    margin: 20px;
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