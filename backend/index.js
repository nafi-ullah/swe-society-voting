const express = require("express");

const mydatabase = require("mongoose");
const authRouter = require("./routes/auth");
const candidateRouter = require("./routes/candidates");
const voterRouter = require("./routes/voter");

const app = express();


const PORT = 3000;
const DB =
  "mongodb+srv://sweboy:dmc54321@cluster0.trbboqn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());
app.use(authRouter);
app.use(candidateRouter);
app.use(voterRouter);


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

