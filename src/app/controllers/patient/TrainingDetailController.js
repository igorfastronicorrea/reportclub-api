const repository = require('../../repositores/TrainingRepository.js');

exports.get = async (req, res) => {

    try{
        var training = await repository.detailTrainingOfPatient(req.params.trainingId);
        res.status(200).send({training})    
    }catch(err){
        res.status(500).send({"message": "error load training detail"});
    }
}

exports.put = async (req, res) => {
    try{
        var training = await repository.completeTrainingOfPatient(req.params.trainingId, req.body.trainingAudio);
        res.status(200).send({training})    
    }catch(err){
        res.status(500).send({"message": "error put training detail"});
    }
}