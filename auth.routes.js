const express = require("express");
const { signup, login, logout } = require("./auth.controller");
const forgotPassword = require("./forgotPassword.controller");
const VerifyOtp = require('./verifyOtp')
const ResetPassword = require('./resetPassword.controllers')
const gmailVerify = require('./verifyGmail.controller');
const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/forgot-password",forgotPassword);

router.post('/verify-otp',VerifyOtp)

router.post('/Verify-Gmail',gmailVerify)

router.post('/reset-password',ResetPassword)



module.exports = router;
