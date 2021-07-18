const mongoose = require('../database');

const FonoSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String
    },
    telefone: {
        type: String
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    }
},
{
    versionKey: false
}
)


const fono = mongoose.model('fono', FonoSchema, 'fono');

module.exports = fono;