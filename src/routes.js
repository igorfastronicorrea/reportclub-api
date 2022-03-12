'use sctrict';

const express = require('express');
const router = express.Router();

const ReportController = require('./app/controllers/profile/ReportController');

router.get('/version', (req, res) => res.status(200).send({ version: "0.0.1" }));


//WEB
router.post('/report', ReportController.post);
router.get('/profile', ReportController.get);

module.exports = router;