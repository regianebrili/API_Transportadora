const freteService = require('../services/freteService');
const transportadoras = require('../transportadoras');

function calcularFrete(req, res) {
    let produto = req.body;

    let transportadorasSelecionadas = freteService.selecionarTransportadora(produto, transportadoras);

    if (transportadorasSelecionadas.length === 0) {
        return res.json([]);
    }

    let fretes = [];

    for (let transportadora of transportadorasSelecionadas) {
        let valorFrete = freteService.calcularValorFrete(produto.peso, transportadoras[transportadora].constante_frete).toFixed(2);

        fretes.push({ nome: transportadoras[transportadora].nome, valor_frete: valorFrete, prazo_dias: transportadoras[transportadora].prazo_entrega });
    }
    
    return res.json(fretes);
}

module.exports = {
    calcularFrete
};
