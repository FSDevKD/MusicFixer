const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');

router.get('/', uploadController.viewPage);

module.exports = router;