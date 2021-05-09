'use sctrict';

const express = require('express');
const router = express.Router();

const TrainingController = require('./app/controllers/training/TrainingController');

router.get('/version', (req, res) => res.status(200).send({ version: "0.0.1" }));
router.post('/training', TrainingController.post);
router.get('/training', TrainingController.get);

module.exports = router;