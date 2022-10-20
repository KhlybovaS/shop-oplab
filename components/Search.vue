<template>
    <section class="search-content has-background-link-light" id="search_id">
        <div class="search-content_navbar">
            <nuxt-link to="/" class="search-content_link">
            <figure class="search-content_fig">
                <figcaption class="search-content_logo">Заказ анализов<br/>онлайн</figcaption>
                <img
                    src="@/assets/images/logo_om.png"
                    alt="Logo"
                    class="search-logo">
            </figure>
            </nuxt-link>
            <b-field label="Поиск анализа" class="input-search">
                <b-autocomplete
                    placeholder="например, SARS-CoV-2 IgG"
                    :data="filteredDataObj"
                    field="Name"
                    @select="option => (selected = option)"
                    :clearable="clearable"
                    icon="magnify"
                    >  
                </b-autocomplete>
                <template>
                    <nuxt-link :to="`/ListAnalyze/${selected.Id}`" v-if="selected">
                        Найдено: {{ selected.Name }}
                    </nuxt-link>
                </template>
            </b-field>
            <div class="search-content_tel">
                <p class="search-content_p">Горячая линия<br>
                <a href="tel:+73822517032">+7 (3822) 51-70-32</a>
                </p>
                <b-button 
                    icon-left="cart-outline"
                    size="is-large"
                    type="is-ghost"
                    tag="a"
                    href="/ShoppingCart">
                    <span class="badge">{{ badgeCnt }}</span>
                </b-button>
            </div>
        </div>
    </section>
</template>

<script>
const data = require('@/posts.json')
import badgeCnt from '../services/cart';

export default {
    data() {
        return {
            data,
            Name: "",
            Id: null,
            selected: null,
            clearable: true,
            open: false,
            overlay: false,
            fullheight: true,
            fullwidth: false,
            right: true,
            shoppingCart: [],
            badgeCnt: 0,
        };
    },
    mounted() {
        if (localStorage.getItem('shoppingCart')) {
            try {
                this.badgeCnt = badgeCnt()/*localStorage.getItem('shoppingCart').length*/;
            }
            catch(e) {
                console.log('error=', e);
            }
        }
        document.addEventListener("storage", this.storageListener);
    },
    beforeDestroy() {
        document.removeEventListener("storage", this.storageListener);
    },
    computed: {
        filteredDataObj() {
            return this.data.filter(option => {
                return (option.Name
                    .toString()
                    .toLowerCase()
                    .indexOf(this.Name.toLowerCase()) >= 0);
            });
        },
    },
    methods: {
        storageListener() {
            this.badgeCnt = badgeCnt();
            return this.badgeCnt;
        }
    }
}
</script>

<style lang="scss" scoped>
.search-content {
    display: inline-block;

    .search-content_navbar {
        display: flex;
        flex-direction: row;
        padding: 10px 0px 0px 0px;
        align-items: center;
        max-width: $main-width;
        margin: auto auto;

        .search-content_link {
            display: flex;
            align-items: stretch;
        }

        .search-content_fig, .search-content_logo {
            text-align: center;
            float: right;

            .search-logo {
                max-width: 60px;
                max-height: 60px;
            }
        }

        .input-search {
            flex-grow: 1;
            margin: 0px 10px 10px 10px;
            z-index: 10;
            
        }
        .search-content_tel {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;

            .badge {
                font-size: 1rem;
                position: absolute;
                top: 0;
                right: 20px;
                color: red;
            }
        }

        .search-content_p {
            padding: 10px;
            text-align: center;
        }

        .search-content_icon {
            :hover {
                cursor: pointer;
            }
        }
    }
}

@media screen and (max-width: $mobile-width) {
    .search-content {

        .search-content_navbar {
            flex-wrap: wrap;
            justify-content: flex-end;

            .search-content_logo {
                display: none;
            }

            .input-search {
                margin: 5px 0px 8px 0px;
                order: 2;
                min-width: 90%;
            }

            .search-content_link {
                order: -1;
            }

            .search-content_tel {
                order: 1;
            } 

            .search-content_p {
                padding-top: 0;
            }
        }
    }
}
</style>