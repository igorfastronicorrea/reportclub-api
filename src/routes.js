'use sctrict';

const express = require('express');
const router = express.Router();

const TrainingController = require('./app/controllers/training/TrainingController');
const FonoController = require('./app/controllers/fono/FonoController')
const AuthFonoController = require('./app/controllers/fono/AuthFonoController')
const AuthPatientController = require('./app/controllers/patient/AuthPatientController')
const PatientController = require('./app/controllers/patient/PatientController')

router.get('/version', (req, res) => res.status(200).send({ version: "0.0.1" }));
router.post('/training', TrainingController.post);
router.get('/training', TrainingController.get);

router.post('/fono', FonoController.post);

router.post('/authfono', AuthFonoController.post);
router.post('/authpatient', AuthPatientController.post);

router.post('/patient', PatientController.post);


router.post('/monitoring', TrainingController.post)
router.get('/monitoring', TrainingController.get)

module.exports = router;