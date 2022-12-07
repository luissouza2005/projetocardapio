const Sequelize = require('sequelize');
const connection = require('../database/database');

const ingrediente = connection.define(
    'tb_ingrediente',
    {
        nome_ingrediente:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }
);

ingrediente.sync({force:true});

module.exports = ingrediente;



