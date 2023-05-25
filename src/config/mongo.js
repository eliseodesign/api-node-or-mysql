const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
      const DB_URI = process.env.DB_URI;
      await mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("**** Conexión Existosa ****");
    } catch (error) {
      console.log("**** Error de conexión ****", error);
  }
};

module.exports = dbConnect;
