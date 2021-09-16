'use sctrict';

const express = require('express');
const router = express.Router();

const TrainingController = require('./app/controllers/training/TrainingController');
const FonoController = require('./app/controllers/fono/FonoController')
const AuthFonoController = require('./app/controllers/fono/AuthFonoController')
const AuthPatientController = require('./app/controllers/patient/AuthPatientController')
const PatientController = require('./app/controllers/patient/PatientController')
const TrainingListController = require('./app/controllers/patient/TrainingListController')
const TrainingDetailController = require('./app/controllers/patient/TrainingDetailController')
const Monitoring = require('./app/controllers/fono/Monitoring')

router.get('/version', (req, res) => res.status(200).send({ version: "0.0.1" }));


//WEB
router.post('/fono', FonoController.post);
router.post('/auth/fono', AuthFonoController.post);
router.post('/training', TrainingController.post);
router.get('/training', TrainingController.get);
router.post('/patient', PatientController.post);

//MOBILE
router.post('/auth/patient', AuthPatientController.post);
router.get('/patient/:patientId/training', TrainingListController.get);
router.get('/patient/training/:trainingId', TrainingDetailController.get);
router.put('/patient/training/:trainingId', TrainingDetailController.put);


router.post('/monitoring', Monitoring.post)
router.get('/monitoring', TrainingController.get)

module.exports = router;