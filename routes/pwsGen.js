const express = require("express");
const router = express.Router();
const { generatePWD } = require("../controllers/pwsGen");

router.get("/generatePWD", generatePWD);

module.exports = router;
