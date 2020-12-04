const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://halyson:root@cluster0.cozus.gcp.mongodb.net/foodfit?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

module.exports = mongoose;