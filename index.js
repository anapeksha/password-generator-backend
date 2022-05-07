require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const genPwRoute = require("./routes/pwsGen");

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).send("<h3>Random password generator</h3>");
});

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/v1", genPwRoute);

//Start server
app.listen(port, () => {
  console.log(`Server up at ${port}`);
});
