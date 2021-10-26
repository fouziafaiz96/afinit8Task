const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/infini8task", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connection established!");
  })
  .catch((e) => {
    console.log("Connection failed!");
  });
