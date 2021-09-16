const repository = require('../../repositores/AuthPatientRespository');

exports.post = async (req, res) => {

    try {
        var data = await repository.find(req.body);

        if (data != undefined){
            const newObject = Object.assign({}, {
                'id': data[0]._id,
                'name': data[0].name,
            })

            res.status(200).send({ patient: newObject });
        }else{
            res.status(500).send({ "message": "username or password wrong" });    
        }
        
    } catch (err) {
        res.status(500).send({ "message": "username or password wrong" });
    }
}