const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb://satyanarayana:satyanarayana@cluster0-shard-00-00.pnnqy.mongodb.net:27017,cluster0-shard-00-01.pnnqy.mongodb.net:27017,cluster0-shard-00-02.pnnqy.mongodb.net:27017/car?ssl=true&replicaSet=atlas-d9c8kc-shard-0&authSource=admin&retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB Connection Successfull");
  });

  connection.on("error", () => {
    console.log("Mongo DB Connection Error");
  });
}

connectDB();

module.exports = mongoose;
