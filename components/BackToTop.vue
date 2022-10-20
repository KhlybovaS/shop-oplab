<template>
    <section class="back-to-top-section">
        <b-button size="is-large"
                icon-left="arrow-up-thick"
                class="back-to-top"
                tag="a"
                href="#search_id"
                type="is-text">
        </b-button>
    </section>
</template>

<style lang="scss" scoped>
.back-to-top-section {
    margin: 0;
    padding: 0;

    .back-to-top {
        position: sticky;
        top: calc(100vh - 3rem);
        font-size: 0.8rem;
        font-weight: 700;
        cursor: pointer;
        text-decoration: none;
        z-index: 10;
    }
}
</style>