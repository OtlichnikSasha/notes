const sequelize = require('../dbConnection')
const {DataTypes} = require('sequelize')


const Note = sequelize.define('note', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    noteText: {type: DataTypes.STRING(5000)}
})

module.exports = {
    Note
}