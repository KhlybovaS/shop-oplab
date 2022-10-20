<template>
  <div class="main-content">
    <div>
      <h5 class="title is-5">{{ post.title }}</h5>
      <div v-html="post.content"></div>
      <p>
        Код: <strong>{{ post.id }}</strong><br>
        Описание: <strong>{{ post.description }}</strong><br>
        Препараты: <strong>{{ post.preparation }}</strong></p>
    </div>
  </div>
</template>
<script>
  // import posts saved JSON data
  import posts from '~/complexes.json'
  export default {
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
    asyncData ({ params }, callback) {
      
      let post = posts.find(post => post.id === parseInt(params.id))
      if (post) {
        callback(null, { post })
      } else {
        callback({ statusCode: 404, message: 'Post not found' })
      }
    },
    head () {
      return {
        title: this.post.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.post.title
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.main-content {
  max-width: $main-width;
  margin: auto 2.5%;
  margin-top: 10px;

   .title {
    margin-top: 15px;
  }
}

@media screen and (max-width: $mobile-width){
  .main-content {
    margin-top: $menu-indent;
  }
}
</style>