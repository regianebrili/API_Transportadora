const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const freteRouter = require('./routes/frete');

app.use(bodyParser.json());
app.use('/frete', freteRouter);
app.use(express.json());

app.listen(port, () => {
    console.log(`A API está rodando em http://localhost:${port}`);
});
