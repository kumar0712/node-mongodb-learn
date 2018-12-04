const mongoose = require('mongoose');
var uri = "mongodb+srv://manoj:sachin_1@cluster0-qvu6j.mongodb.net/test?retryWrites=true";

mongoose.Promise = global.Promise;
 mongoose.connect(uri, { useNewUrlParser: true });

module.exports = {mongoose};