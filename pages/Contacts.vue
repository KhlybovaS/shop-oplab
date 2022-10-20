<template>
    <section class="contacts-content">
        <h3><strong>Филиалы:</strong></h3>
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
                <span>Адрес: г.Томск, ул.Карла Маркса, 15/1</span>
            </div>
            <br/>
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
                <span>Адрес: г.Томск, ул.Елизаровых, 19/1</span>
            </div>
            <br/>
        <iframe
            data-not-lazy
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A17b87466cdd9a8a221944e091b2ae5327b69717de9d1d6a776d6cec1035d7005&amp;source=constructor"
            width="100%"
            height="350"
            frameborder="1"
            allowfullscreen="true"
        ></iframe>

    </section>
</template>

<style lang="scss" scoped>
.contacts-content {
    max-width: $main-width;
    margin: auto auto;
}
@media screen and (max-width: $mobile-width){
  .contacts-content {
    margin-top: $menu-indent;
    font-size: 0.8rem;
  }
}
</style>