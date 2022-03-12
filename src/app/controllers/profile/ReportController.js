const repository = require('../../repositores/ReportProfileRepository');

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
        var data = await repository.findProfile(req.query.id);
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({ "message": "erro" });
    }
}