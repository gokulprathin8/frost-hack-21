const express = require('express');
const sampleController = require('../controllers/sampleController');

const router = express.Router();

router
    .route('/')
    .get(sampleController.getAllSampleController)

module.exports = router;