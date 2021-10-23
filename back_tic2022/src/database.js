const mongoose = require("mongoose");

const URI =
  "mongodb+srv://dbUser:yMJkd7BwwHHGM0CZ@cluster0.e4tzb.mongodb.net/proyecto_?retryWrites=true&w=majority";

const dbConnection = async () => {
  try {
    await mongoose.connect(URI);
    console.log("db connect");
  } catch (error) {
    console.log("error al conectar", error);
  }
};

dbConnection();
