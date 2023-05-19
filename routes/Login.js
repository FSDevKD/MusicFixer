const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get("/login", (req, res) => {
  res.render("login", { error_msg: req.flash('error_msg') });
});



module.exports = router;