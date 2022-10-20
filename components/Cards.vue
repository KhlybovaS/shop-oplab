<template>
    <section class="section-card">
        <div class="section-card_link">
            <nuxt-link to="/TypeAnalyze/3" class="card">
                <div class="section-card_content">
                    <img class="card-img_small" src="@/assets/images/covid-19.png">
                    <h4><b>Уважаемые пациенты!</b></h4>
                    <p>В Открытой лаборатории<br>
                    Вы можете сдать анализы<br>
                    на коронавирус<br>
                    SARS-CoV-2/COVID-19</p>
                </div>
            </nuxt-link>
        </div>
        <div class="section-card_link">
            <nuxt-link to="/ListAnalyzes" class="card">
                <div class="section-card_content">
                    <img class="card-img" src="@/assets/images/list1.png">
                    <h4><b>Список услуг</b></h4>
                </div>
            </nuxt-link>
        </div>
        <div class="section-card_link">
            <a href="http://rez.oplab.ru/" target="_blank" class="card" rel="nofollow noreferrer">
                <div class="section-card_content">
                    <img  class="card-img" src="@/assets/images/logo.png">
                    <h4><b>Посмотреть результаты</b></h4>
                </div>
            </a>
        </div>
        <div class="section-card_link">
            <nuxt-link to="/PopularAnalyzes" class="card">
                <div class="section-card_content">
                    <img  class="card-img" src="@/assets/images/analizy.png">
                    <h4><b>Популярные анализы</b></h4>
                </div>
            </nuxt-link>
        </div>
        <div class="section-card_link">
            <nuxt-link to="/Comlpexes/2" class="card">
                <div class="section-card_content">
                    <img  class="card-img_small" src="@/assets/images/pregnancy.png">
                    <h4><b>Комплекс</b></h4>
                    <p>Беременность<br>
                    3 триместр</p>
                </div>
            </nuxt-link>
        </div>
    </section>
</template>

<script>

</script>

<style lang="scss" scoped>
.section-card {
    max-width: $main-width;
    margin: 25px auto 0px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    .section-card_link {
        margin-bottom: 15px;

        :hover {
            background: $card-background;
        }

        .card {
            background-color: white;
            border: grey 1px solid;
            height: 300px;
            min-width: 300px;
            display: flex;
            text-align: center;
            align-items: stretch;
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

            .section-card_content {
                display: flex;
                flex-direction: column;
                text-align: center;
                flex-grow: 1;
                align-items: center;
                justify-content: center;

                .card-img {
                    max-width: 200px;
                    max-height: 170px;
                }

                .card-img_small {
                    align-self: center;
                    width: 80px;
                    height: 80px;
                }
            }
        }
    }
}

@media screen and (max-width: $mobile-width) {
    .section-card {
        justify-content: center;
    }
    .section-card_link {
        flex-grow: 1;

        .card {
            min-width: 250px;
            flex-grow: 1;
        }
    }
}
</style>
