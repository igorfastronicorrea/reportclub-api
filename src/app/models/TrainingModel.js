const mongoose = require('../database');

const TrainingSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    exampleAudio: {
        type: String
    },
    trainingAudio: {
        type: String,
    }
},
{
    versionKey: false
}
)

const training = mongoose.model('training', TrainingSchema, 'training');

module.exports = training;