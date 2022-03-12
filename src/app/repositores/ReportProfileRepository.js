const ReportModel = require('../models/ReportModel');


exports.create = async data => {

    try {
        const reportProfile = await ReportModel.create(data);
        return reportProfile;
    } catch (err) {
        return undefined;
    }

}

exports.findProfile = async id => {
    try {
        const profile = await ReportModel.find({ idGamersClubPlayer: id });
        console.log(profile);
        return profile;
    } catch (err) {
        return undefined;
    }
}
