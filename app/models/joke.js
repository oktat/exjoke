const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')
 
const Joke = sequelize.define('Joke', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    text: { type: DataTypes.STRING,  allowNull: false  },
    sender: { type: DataTypes.STRING, allowNull: false},
    category: { type: DataTypes.INTEGER , allowNull: true }
})

sequelize.sync({
    force: false
})
module.exports = Joke
