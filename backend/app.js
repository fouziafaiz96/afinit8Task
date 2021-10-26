const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
require("./db/conn");
const ProfitCalculate = require("./models/taskSchema");
const corsOptions = {
  origin: "http://localhost:8000",
};

const configuredCors = cors(corsOptions);
app.options("*", configuredCors);
app.use(express.json());
app.use(cors());
app.post("/add/", (req, res) => {
  try {
    console.log(req.body);
    const profitCalc = new ProfitCalculate(req.body);
    profitCalc
      .save()
      .then(() => {
        res.status(201).send(profitCalc);
      })
      .catch((e) => {
        res.status(400).send(e);
      });
  } catch (error) {
    res.status(400).send(error);
  }
});
app.get("/fetch/", async (req, res) => {
  try {
    console.log(await ProfitCalculate.find());
    const data = await ProfitCalculate.find();

    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`SERVER IS RUNNING AT PORT ${port}`);
});
