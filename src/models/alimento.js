const mongoose = require('../database/mongoose')

const AlimentosConsumidosSchema = new mongoose.Schema({
  alimento: String,
  quantidade: Number,
})

module.exports = mongoose.model('AlimentosConsumidos', AlimentosConsumidosSchema);