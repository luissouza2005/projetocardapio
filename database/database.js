const Sequelize = require ('sequelize');

const connection = new Sequelize(

    'tb_ingrediente',
    'root',
    '',

    {

        host: 'localhost',

        dialect: 'mysql'

    }



);



module.exports = connection;