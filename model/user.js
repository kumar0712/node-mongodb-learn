var mongoose = require('mongoose');

var User =mongoose.model('User', {
name: {
	type: String,
	required:true,
	trim:true,
	minlength:1
},
age: {
	type: Number,
	
	required: true
},
address : {
	type: String
}
});

 module.exports = {User};