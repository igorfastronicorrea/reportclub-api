const repository = require('../../repositores/TrainingRepository');

exports.get = async (req, res) => {

    try{
        var trainings = await repository.listTrainingsOfPatience(req.params.patientId, req.query.date);
        
        res.status(200).send({trainings});
    }catch(err){
        res.status(500).send({"message": "error load training this patient"});
    }
}