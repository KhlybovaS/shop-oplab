<template>
    <footer class="footer has-background-link-light has-text-black">
        <div class="content has-text-left">
            <a href="http://oplab.ru" target="_blank">
                <img class="footer-logo" src="@/assets/images/logo_ol.png" alt="Открытая лаборатория">
            </a>
            <div>
                <b-icon 
                    icon="at"
                    size="is-small">
                </b-icon>
                <span>E-mail:</span>
                <a href="mailto:openlab1@yandex.ru">openlab1@yandex.ru</a>
            </div>
            <div>
                <b-icon 
                    icon="phone-outline"
                    size="is-small">
                </b-icon>
                <span>Телефон:</span>
                <a href="tel:+73822517032">+7 (3822) 51-70-32</a>
            </div>
            <div>
                <b-icon 
                        icon="map-marker-outline"
                        size="is-small">
                </b-icon>  
                <span>Адрес: г.Томск, ул.Карла Маркса, 15/1, правое крыло</span>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    padding: 20px 0px 40px 0px;
    margin-top: 30px;

    .content {
        max-width: $main-width;
        margin: auto;
    }
}
.footer-logo {
    float: left;
    max-height: 100px;
    max-width: 100px;
    margin-right: 10px;
}

@media screen and (max-width: $mobile-width) {
    .footer {
        font-size: 0.8rem;
        line-height: 0.8;
    }
    .footer-logo {
        max-height: 70px;
        max-width: 70px;
    }
}
</style>