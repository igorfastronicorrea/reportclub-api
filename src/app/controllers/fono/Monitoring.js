const Fono = require('../../models/FonoModel');
const repository = require('../../repositores/FonoRespository');

exports.post = async (req, res) => {

    try {
  
        console.log("VERSAOOOOOOOOOOOOOOOOOOOOO = " + req.body.version)
        res.status(200).send({ version: req.body.version });
     
    } catch (err) {
        res.status(500).send({ "message": "error" });
    }
}
