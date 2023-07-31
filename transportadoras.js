const transportadoras = {
    entrega_ninja: {
        nome: "Entrega Ninja",
        constante_frete: 0.3,
        altura_minima: 10,
        altura_maxima: 200,
        largura_minima: 6,
        largura_maxima: 140,
        prazo_entrega: 6
    },
    entrega_kabum: {
        nome: "Entrega KaBuM",
        constante_frete: 0.2,
        altura_minima: 5,
        altura_maxima: 140,
        largura_minima: 13,
        largura_maxima: 125,
        prazo_entrega: 4
    }
};

module.exports = transportadoras;
