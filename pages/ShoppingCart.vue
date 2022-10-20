<template>
    <section class="cart-section">
        <h3 class="title">Корзина {{ totalSum }} руб.</h3>
        <div v-for="(product, index) in this.shoppingCart" :key="index" class="card">
            <span class="card-header">
                {{ product.Name }} (кол-во: {{ product.amount}})
            <b-button @click="removeFromCart(product)"
                    icon-left="cart-remove"
                    size="is-medium"
                    type="is-link is-light"
                    class="remove-btn">
                    Удалить из корзины
            </b-button>
            </span>
        </div>
    </section>
</template>

<script>
import badgeCnt from '../services/cart';

export default {
    data(){
        return {
            shoppingCart: [],
        }
    },
    computed: {
        totalSum() {
            let sum = 0;
            for (let product of this.shoppingCart) {
                sum += product.Cost * product.amount;
            }
            return sum;
        }
    },
    mounted() {
        if (!localStorage.getItem('shoppingCart').endsWith('[object Object]')) {
            this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart') || "[]"); 
        };
    },
    methods: {
        removeFromCart(product) {
            const Cart = this.shoppingCart;
            const productIndex = Cart.findIndex(item => item.Id == product.Id);
            Cart[productIndex].amount -= 1;
            if (Cart[productIndex].amount < 1) {
                Cart.splice(productIndex, 1);
            }
            this.$emit('update:this.shoppingCart', Cart);
            localStorage.setItem('shoppingCart', JSON.stringify(Cart));
            this.badgeCnt = badgeCnt();
            console.log('this.badgeCnt=', this.badgeCnt);
            this.$emit('update:this.badgeCnt', this.badgeCnt);
        }
    }
}
</script>

<style lang="scss" scoped>
.cart-section {
    max-width: $main-width;
    margin: auto 2.5%;

    .title {
        margin: 20px 0;
    }
    .card-header {
        padding: 15px;
        font-size: 1.2rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .remove-btn {
            padding: 10px;
        }
    }
    .card + .card {
        margin-top: 10px;
    }
}

@media screen and (max-width: $mobile-width){
.cart-section {
    margin-top: $menu-indent-mobile;
    .title {
        font-size: 1.7rem;
    }
    .card-header {
        flex-direction: column;
        align-items: flex-start;
        .remove-btn {
            margin-top: 15px;
        }
    }
  }
}
</style>