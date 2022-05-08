const express = require("express");
const router = express.Router();
const YAML = require("yamljs");

//swagger docs
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = YAML.load("./docs/swagger.yml");

//custom css for swagger
var options = {
	customCss: ".swagger-ui .topbar { display: none }",
};

router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(swaggerDocument, options));

module.exports = router;
