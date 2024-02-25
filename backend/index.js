const express = require("express");

const mydatabase = require("mongoose");

const app = express();


const PORT = 3000;
const DB =
  "mongodb+srv://managernafi:dmc54321@cluster0.7dvhcpm.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());


mydatabase
  .connect(DB)
  .then(() => {
    console.log("Daatabase Connected successfully");
  })
  .catch((e) => {
    console.log(e);
  });

const server = app.listen(PORT, () => {
  console.log(`Server is running  on ${PORT}`);
});

