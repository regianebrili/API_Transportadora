# API Transportadora

A API foi desenvolvida com o objetivo de selecionar dentre as opções disponíveis a transportadora que atende os requisitos e retornar os dados com o valor do frete para o determinado produto.

URL: http://localhost:3000/frete/calcular

Método: POST

Parâmetros:
- dimensao.altura (cemtímetros)
- dimensao.largura (centímetros)
- peso (gramas)

Os parâmetros são numéricos e obrigatórios.

## Teste da API
### Pré requisitos
1. Node.js - https://nodejs.org/pt-br/download (versão utilizada: 18.17.0)
2. NPM - instalado juntamente com o Node.js (versão utilizada: 9.6.7)
2. Ferramenta de cliente HTTP, exemplo: Postman - https://www.postman.com/

### Instalação das Dependências e inicialização do Servidor
1. Abra o terminal ou prompt de comando.
2. Navegue para a pasta raiz do projeto onde se encontra o arquivo "package.json".
3. Execute o comando abaixo para instalar as dependências:
```bash
npm install
```
Após instalar as dependências, inicialize o Servidor utilizando o seguinte comando:
```bash
npm start
```

### Execução do Teste
1. Abra uma ferramente de cliente HTTP.
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
