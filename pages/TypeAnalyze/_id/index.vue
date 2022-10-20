<template>
  <div class="main-content">
    <div class="card">
      <h5 class="title is-5 card-header">{{ post.Folder }}</h5>
        <div class="card-content" v-for="item of sortedItems.filter(item => item.FolderId ==  [$route.params.id]  )" :key="item.Id">
            <div>
              <nuxt-link :to="`/ListAnalyze/${item.Id}`">
                {{ item.FullName }}
              </nuxt-link>
              <span class="card-price">{{ item.Cost }} руб.</span>
            </div>
            <b-button size="is-medium"
              icon-left="cart-outline"
              @click="addToCart(item)"
              type="is-light is-link"
              class="add-to-cart-btn">
              Добавить в корзину 
            </b-button>
        </div>
    </div> 
    </div> 
</template>
<script>
  import posts from '~/posts.json';
  import badgeCnt from '../../../services/cart';

  export default {
      data () {
      return { posts,
               shoppingCart: [] }
    },
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    },
    asyncData ({ params }, callback) {
      
      let post = posts.find(post => post.FolderId === parseInt(params.id))
      if (post) {
        callback(null, { post })
      } else {
        callback({ statusCode: 404, message: 'Post not found' })
      }
    },
    head () {
      return {
        title: this.post.Folder,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.post.Folder
          }
        ]
      }
    },
    computed: {
      sortedItems() {
      const items = this.posts.reduce((p,c) => {
        p[c.FullName] = c
        return p
      }, {})
      return Object.values(items).sort((a,b) => a.FullName.localeCompare(b.FullName))
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
        //badgeCnt();
      }
    }
  }
</script>

<style lang="scss" scoped>
.main-content {
  max-width: $main-width;
  margin: auto 2.5%;
  margin-top: 10px;
  .card {
    padding: 20px;
  }

  .title {
    margin-top: 20px;
  }
  .card-content {
      padding: 10px;
      padding-left: 0;
      border-bottom: 2px solid #bbb;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .card-price {
        margin-left: 15px;
      }
  }
}

@media screen and (max-width: $mobile-width){
  .main-content {
    margin-top: $menu-indent-mobile;

    .card-content {
      flex-direction: column;
      align-items: flex-start;
      .add-to-cart-btn {
        margin-top: 15px;
      }
    }
  }
}
</style>