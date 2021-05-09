const TrainingModel = require('../models/TrainingModel');

exports.list = async () => {

    try{
        const training = await TrainingModel.find({});
    
        return training;
    }catch(err){
        return undefined;
    }

}

exports.create = async data => {

    try{
        const training = await TrainingModel.create(data);
    
        return training;
    }catch(err){
        return undefined;
    }

}