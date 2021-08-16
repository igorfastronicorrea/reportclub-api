const training = require('../models/TrainingModel');
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


exports.listTrainingsOfPatience = async (patientId, date) => {
    
    try{

        date = new Date(date);
        date.setDate(date.getDate() + 1)
  
        var trainings = await TrainingModel.find({ $and: [
            {patientId: patientId}, 
            {date: {$gte: 2021-01-01, $lt: date} },
            {complete: false}
        ]})

        return trainings;
    }catch(err){
        return undefined
    }
}


exports.detailTrainingOfPatient = async trainingId => {
    try{
        var training = await TrainingModel.find({ _id: trainingId })

        return training[0];
    }catch(err){
        return undefined;
    }
}

exports.completeTrainingOfPatient = async (trainingId, trainingAudio) => {

    try{
        const query = {_id: trainingId};
        const update = {complete: true, trainingAudio: trainingAudio};

        var training = await TrainingModel.findOneAndUpdate(query, update)

        return training;
    }catch(err){
        return undefined;
    }

}