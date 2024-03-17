const mongoose = require('mongoose')

const ConfigModel = new mongoose.Schema({
    landing_page: {
        Header:{
            type: String,
        },
        Text:{
            type: String,
        },
        learn:[{
            type: String
        }],
        button:{
            type: String
        }
    }
})

module.exports = mongoose.model('Config', ConfigModel)