const User = require('../../models/TrainingModel');
const repository = require('../../repositores/TrainingRespository');

exports.post = async (req, res) => {

    try {
        var data = await repository.create(req.body);
        res.status(200).send({ data });
    } catch (err) {
        res.status(500).send({ "message": "erro" });
    }
}

exports.get = async (req, res) => {

    try {
        var data = await repository.list();
        res.status(200).send({training: data});
    } catch (err) {
        res.status(500).send({ "message": "erro" });
    }
}