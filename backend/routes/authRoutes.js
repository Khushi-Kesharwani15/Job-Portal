const express = require('express');
const router = express.Router();    
const authController = require('../controller/authController');
const { registerUser,loginUser } = authController;

router.post('/register', registerUser);
router.post("/login",loginUser)

module.exports = router;
