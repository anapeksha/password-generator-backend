const express = require("express");
const router = express.Router();
const { generatePWD } = require("../controllers/pwsGen");

router.get("/generatePWD/length/:length/characters/:characters", generatePWD);

module.exports = router;
