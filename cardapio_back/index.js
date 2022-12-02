const express = require('express');
const ingredienteController = require('./controller/ingredienteController');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', ingredienteController);


app.listen(3001, ()=>{

    console.log('SERVIDOR RODANDO EM: http://localhost:3001');

});  