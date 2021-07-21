const PatientModel = require('../models/PatientModel');

exports.list = async () => {

    try{
        let fono = await FonoModel.find({});

        return fono;
    }catch(err){
        return undefined;
    }

}

exports.create = async data => {

    try{

        let listPatient = await PatientModel.find({username: data.username})

        if (listPatient.length > 0){
            return undefined;
        }else{

            let patient = await PatientModel.create(data);

            return patient;
        }

    }catch(err){
        return undefined;
    }

}