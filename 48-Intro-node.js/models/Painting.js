const Sequelize = require('sequelize')
const {STRING} = Sequelize

const seq = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite"
})

const Painting = seq.define('paintings', {
    title: {
        type: STRING
    },
    artist: {
        type: STRING
    },
    url: {
        type: STRING
    }
})

module.exports = Painting
seq.sync()