const PatientModel = require('../models/PatientModel');

exports.list = async data => {

    try{
        console.log("FONOID = " + data)
        let patients = await PatientModel.find({fonoId: data});

        return patients;
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