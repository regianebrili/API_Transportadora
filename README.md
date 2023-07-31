# API Transportadora

A API desenvolvida com o objetivo de selecionar dentre as opções disponíveis a transportadora que atende os requisitos e retornar os dados com o valor do frete para o determinado produto.

URL: http://localhost:3000/frete/calcular
Método: POST
Parâmetros:
- dimensao.altura (cemtímetros)
- dimensao.largura (centímetros)
- peso (gramas)

Os parâmetros são numéricos e obrigatórios.

## Teste da API
1. Abra uma ferramente de cliente HTTP, como por exemplo, o Postman (https://www.postman.com/).
2. Selecione o método POST.
3. Digite a URL http://localhost:3000/frete/calcular
4. Selecione o formato de envio de dados como JSON.
5. No corpo da requisição, adicione os dados de envio, seguindo o padrão JSON.
6. Clique no botão "Enviar".
7. Será exibida a resposta da API com os valores de frete disponíveis para o produto informado.

### Exemplo de Requisição
```json
{
  "dimensao": {
    "altura": 160,
    "largura": 30
  },
  "peso": 200
}
```

### Exemplo de Resposta
```json
[
  {
    "nome": "Entrega Ninja",
    "valor_frete": "1.00",
    "prazo_dias": 6
  },
  {
    "nome": "Entrega KaBuM",
    "valor_frete": "0.60",
    "prazo_dias": 4
  }
]
```

