const Sequelize = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('UsersTest', 'root', 'garavirod14040', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',
    // operatorsAliases: false,
    define: {
        timestamps: false
    },

});


module.exports = sequelize;