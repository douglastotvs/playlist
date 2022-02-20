const mongoose = require("mongoose");

const connetTodb = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Atlas Conectado!"))
    .catch((err) => console.log(err));
  console.log("Conectador ao Banco de Dados Moogose");
};

module.exports = connetTodb;
