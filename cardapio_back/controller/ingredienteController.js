const express = require('express');
const ingrediente = require('../model/ingredienteModel');
const router = express.Router();



router.get("/listarIngrediente", (req, res) =>{

    ingrediente.findAll()
        .then(
            (ingrediente)=>{
                return res.status(200).json(ingrediente);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados de ingrediente',
                    erroBancoDados: erro
                });
            }
        );
    });



    router.get('/listarIngrediente/:id',(req, res)=>{

        let{id}=req.params;
        let {nome_ingrediente} = req.params;
    
        ingrediente.findByPk(nome_ingrediente)
            .then(
                (ingrediente)=>{
                    res.status(200).json(ingrediente);
                }
            ).catch(
                (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao selecionar os dados de ingrediente',
                        erroBancoDados: erro
                    });
                }
            );
    
    });


    router.post('/inserirIngrediente', (req, res)=>{

        let {nome_ingrediente} = req.body;
        ingrediente.create(
            { nome_ingrediente}
        ).then(
            ()=>{
                    return res.status(201).json({
                        erroStatus: false,
                        menssagemStatus: 'ingrediente inserida com sucesso!'
                });
            }
        ).catch(
            (erro)=>{
                        return res.status(400).json({
                            erroStatus: true,
                            erroMessagem: 'Houve um erro ao cadastrar a ingrediente',
                            erroBancoDados: erro
                        });
            }
        );
    });



    
    router.put('/alterarIngrediente', (req, res)=>{

       
        let {nome_ingrediente} = req.body;
    
        //ALTERANDO OS DADOS:
        ingrediente.update(
            {where:{nome_ingrediente}}
        ).then( ()=>{
    
            return res.status(200).json({
                erroStatus: false,
                menssagemStatus: 'ingrediente alterada com sucesso!'
            });
    
        }).catch(
            (erro)=>{
                        return res.status(400).json({
                            erroStatus: true,
                            erroMessagem: ' erro ao alterar o ingrediente',
                            erroBancoDados: erro
                        });
            }
        );
    
    });
    

    


    
       
 router.delete('/deletarIngrediente', (req, res)=>{

    
        let {nome_ingrediente} = req.params;
    
        ingrediente.destroy(
            {where: {nome_ingrediente}}
        ).then( ()=>{
    
            return res.status(200).json({
                erroStatus: false,
                menssagemStatus: 'ingrediente deletada com sucesso!'
            });
    
        }).catch(
            (erro)=>{
                        return res.status(400).json({
                            erroStatus: true,
                            erroMessagem: ' erro ao tentar deletar o ingrediente',
                            erroBancoDados: erro
                        });
            }
        );
    
    });
    module.exports = router;
