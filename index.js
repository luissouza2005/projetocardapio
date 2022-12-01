const express = require('express');

const ingrediente = require('./controller/ingredienteController')

const app = express();

app.use('/', ingrediente);

app.get('/', (req, res)=>{
    console.log('ROTA RAIZ DE VERBO HTTP GET!');
    res.send('TESTE 1');
});

app.get('/teste', (req, res)=>{
    console.log('ROTA DE TESTE DE VERBO HTTP GET!');
    res.send('TESTE 2');
});

    app.listen(3007,()=>{

        console.log('SERVIDOR RODANDO EM: http://localhost:3007')

    })    