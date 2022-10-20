<template>
  <div class="main-content">
    <div class="card">
      <h5 class="title is-5 card-header">
        {{ post.Name }}
        <b-button size="is-medium"
              icon-left="cart-outline"
              @click="addToCart(post)"
              type="is-light is-link"
              class="add-to-cart-btn">
              Добавить в корзину 
        </b-button>
      </h5>
      <div v-html="post.content"></div>
      <p class="card-content">
        Код: <strong>{{ post.Code }}</strong><br>
        Наименование: <strong>{{ post.FullName }}</strong><br>
        Группа: <strong>{{ post.Folder }}</strong><br>
        Стоимость: <strong>{{ post.Cost }} руб.</strong></p>
    </div>
  </div>
</template>
<script>
  
  import posts from '~/posts.json'
  export default {
    data() {
      return {
        shoppingCart: []
      }
    },
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
    asyncData ({ params }, callback) {
      
      let post = posts.find(post => post.Id === parseInt(params.id))
      if (post) {
        callback(null, { post })
      } else {
        callback({ statusCode: 404, message: 'Post not found' })
      }
    },
    head () {
      return {
        title: this.post.Name,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.post.FullName
          }
        ]
      }
    },
    methods: {
      addToCart(product) {
        let exists = false;
        for (let cartItem of this.shoppingCart) {
          if (cartItem.Id == product.Id) {
            cartItem.amount = cartItem.amount + 1;
            exists = true;
            break;
          }
        }
        if (!exists) {
          this.shoppingCart.push({
            ...product,
            amount: 1,
          });
        }
      }
    },
    mounted() {
      /*if (!localStorage.getItem('shoppingCart').endsWith('[object Object]')) {
            this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart') || "[]"); 
      }*/
    },
    watch: {
      shoppingCart: {
        handler(newValue) {
          localStorage.setItem('shoppingCart', JSON.stringify(newValue));
        }, deep: true
      }
    }
  }
</script>

<style lang="scss" scoped>
.main-content {
  max-width: $main-width;
  margin: auto 2.5%;
  margin-top: 30px;
  .card-header{
    padding: 10px 0 10px 25px;
    margin-bottom: 0;
  }
  .title {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

@media screen and (max-width: $mobile-width){
  .main-content {
    margin-top: $menu-indent-mobile;
    .title {
      flex-direction: column;
      align-items: flex-start;
      .add-to-cart-btn {
        margin-top: 15px;
      }
    }
  }
}
</style>