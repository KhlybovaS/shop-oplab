<template>
    <div class="navbar-content">
        <b-navbar class="b-navbar" type="has-background-link-light">
                <template #start>
                    <b-navbar-item class="b-navbar_link" tag="router-link" :to="{ path: '/' }">
                        Главная
                    </b-navbar-item>
                    <b-navbar-dropdown 
                        class="b-navbar_link" 
                        label="Анализы и цены" 
                        hoverable>
                            <b-navbar-item class="b-navbar_link" tag="router-link" :to="{ path: '/ListAnalyzes' }">
                                Анализы по категориям
                            </b-navbar-item>
                            <b-navbar-item  class="b-navbar_link" tag="router-link" :to="{ path: '/TypeAnalyzes' }">
                                Анализы по видам исследований 
                            </b-navbar-item>
                            <b-navbar-item class="b-navbar_link" tag="router-link" :to="{ path: '/OrganAnalyzes' }">
                                Анализы по органам
                                </b-navbar-item>
                    </b-navbar-dropdown>
                    <b-navbar-item class="b-navbar_link" tag="router-link" :to="{ path: '/Complexes' }">
                        Лабораторные комплексы
                    </b-navbar-item>
                    <b-navbar-item class="b-navbar_link" tag="router-link" :to="{ path: '/About' }">
                        О нас
                    </b-navbar-item>
                    <b-navbar-item class="b-navbar_link" tag="router-link" :to="{ path: '/Contacts' }">
                        Контакты
                    </b-navbar-item>
                </template>
        </b-navbar>  
    </div>
    
</template>

<style lang="scss" scoped>
.navbar-content {
    display: flex;
    flex-direction: column;
    max-width: $main-width;
    margin: auto 2.5%;
    z-index: 9;
    align-items: flex-start;
}

@media screen and (max-width: $mobile-width) {
    .navbar-content {
            margin-left: 0;
            display: block;
            position: absolute;
            padding: 0;
            z-index: 1100;
    }
}
</style>