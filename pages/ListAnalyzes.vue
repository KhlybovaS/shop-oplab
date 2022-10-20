<template>
  <section class="main-content">
    <div>
      <h5 class="title has-text-centered">
        Список услуг
      </h5>
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="post in sortedItems" :key="post.Id" id="my-table">
          <div class="card">
           <header class="card-header">
            <nuxt-link class="card-header-title" :to="`/ListAnalyze/${post.Id}`">
              {{ post.Name }}
            </nuxt-link>
          </header>
          <div class="card-content">
            <div class="content">
              {{ post.FullName }}
              <br>
              <small>
                Код: <strong>{{ post.Code }}</strong>
                Группа: {{ post.Folder }}
              </small>
            </div>
          </div>
          <footer class="card-footer">
            <nuxt-link :to="`/ListAnalyze/${post.Id}`"
              class="card-footer-item">
              Подробнее
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

  .card-header-title {
    padding: 10px;
  }

  .card-content {
    padding: 20px;
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