const FonoModel = require('../models/FonoModel');

exports.list = async () => {

    try{
        const fono = await FonoModel.find({});
    
        return fono;
    }catch(err){
        return undefined;
    }

}

exports.create = async data => {

    try{
        const fono = await FonoModel.create(data);
    
        return fono;
    }catch(err){
        return undefined;
    }

}