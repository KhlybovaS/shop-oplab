export default {
    namespaced: true,
    state: {
        items: [{
            id: '6a254ded-68fb-11e2-81b1-14dae9ee2078',
            price: 130,
            title: 'Моча по Зимницкому',
            description: 'Определение удельного веса (относительной плотности) мочи (Зимницкий)',
            isPopular: true,
        }, {
            id: 'c3055df2-39ce-11e2-8dc6-14dae9ee2078',
            price: 90,
            title: 'Белок в суточной моче',
            description: 'Определение белка в моче',
            isPopular: true,
        }, {
            id: '41063d4e-74e7-11de-afd4-001d60360ee0',
            price: 70,
            title: 'Белок (моча)',
            description: 'Определение белка в моче',
            isPopular: true,
        }, {
            id: '41063d56-74e7-11de-afd4-001d60360ee0',
            price: 150,
            title: 'Моча по Нечипоренко',
            description: 'Микроскопическое исследование осадка мочи',
            isPopular: true,
        }],
    },
    getters: {
        ITEMS (state) {
            return state.items;
        },
        POPULAR_ITEMS (state) {
            return state.items.filter(item => item.isPopular);
        },
    },
};
