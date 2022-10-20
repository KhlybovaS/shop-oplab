<template>
  <section class="main-content">
    <div>
      <h5 class="title has-text-centered">
        Лабораторные комплексы
      </h5>
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="post in posts" :key="post.Id">
          <div class="card">
           <header class="card-header">
            <nuxt-link :to="`/Comlpexes/${post.id}`" class="card-header-title">
              {{ post.title }}
            </nuxt-link>
          </header>
          <div class="card-content">
            <div class="content">
              {{ post.label }}
              <br>
              <small>
                Код: <strong>{{ post.id}}</strong>
              </small>
            </div>
          </div>
          <footer class="card-footer">
            <nuxt-link :to="`/Comlpexes/${post.id}`"
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
  import posts from '~/complexes.json'
  export default {
    name: 'posts',
    data () {
      return { posts }
    }
  }
</script>

<style lang="scss" scoped>
.main-content {
  max-width: $main-width;
  margin: auto 2.5%;
  margin-top: 10px;

  .card-content {
    padding: 10px;
  }
}
.pagination {
  margin-bottom: 10px;
}

@media screen and (max-width: $mobile-width){
  .main-content {
    margin-top: $menu-indent-mobile;
  }
}
</style>