const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

router.get('/', aboutController.viewPage);

module.exports = router;