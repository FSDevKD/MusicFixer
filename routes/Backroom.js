const express = require('express');
const router = express.Router();
const backroomController = require('../controllers/backroomController');

router.get('/', backroomController.viewPage);

module.exports = router;