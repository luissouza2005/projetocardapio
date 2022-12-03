const express = require('express');

const app = express();
const axios = require('axios').default;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//MAPEAMENTO DA PASTA PUBLIC
app.use(express.static('public'));

//CONFIGURA O EJS COMO VIEW ENGINE (REDENRIZA AS PÁGINAS DE FRONT-END)
app.set('view engine', 'ejs');


//ROTA DE CADASTRO DE INGREDIENTE
app.get('/cadastrarIngrediente', (req, res)=>{
    res.render('ingrediente/index');
});

//ROTA DE LISTAGEM DE INGREDIENTE
app.get('/listagemIngrediente', (req, res)=>{
    
    const urlListagemIngrediente = 'http://localhost:3001/listarIngrediente';

    /*
    CHAMADA PELO AXIOS:
    1 - URL DA ROTA (urlListagemCategoria)
    2 - CALLBACK DA RESPOSTA DA CHAMADA
    */
    axios.get(urlListagemIngrediente)
        .then(
            (response)=>{
                // console.log(response.data);
                // res.send(response.data);
                let ingrediente = response.data;
                res.render('ingrediente/listagemIngrediente', {ingrediente});

        }); 
    });

    //ROTA DE LISTAGEM DE EDIÇÃO
    app.get('/formEdicaoIngrediente/:id', (req, res)=>{
        
        //RECEBE O ID DE CATEGORIA QUE VAI SER EDITADO
        let {id} = req.params;
         console.log(id);

        //CHAMADA DO AXIOS PARA A API:
        const urlListagemIngrediente = `http://localhost:3001/listarIngrediente/${id}`;
        
        axios.get(urlListagemIngrediente)
        .then(
            (response)=>{

                let ingrediente = response.data;
                res.render('ingrediente/editarIngrediente', {ingrediente});

            }
        )
    });

    //ROTA DE EDIÇÃO
    app.post('/alterarIngrediente', (req, res)=>{

        const urlAlterarIngrediente = 'http://localhost:3001/inserirIngrediente';
        console.log(req.body);

        axios.put(urlAlterarIngrediente, req.body)
        .then(
            res.send('Cadastrado!!!')
        )

    });

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});