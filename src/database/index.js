const mongoose = require("mongoose");
/* Modifique a conexão do banco de dados MongoDB de acordo com a sua instalação.
*/
mongoose
  .connect(
    "mongodb+srv://jsadigitais:h6h7LrmV3FFvBbmX@cluster0.1wl7p.mongodb.net/"
  )
  .then(() => {
    console.log("Conectado ao MongoDB!");
  })
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

module.exports = mongoose;
