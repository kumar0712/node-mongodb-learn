const mongoose = require('mongoose');
var Customer = mongoose.model('Customer', {
	email: {
		type:String,
		trim:true,
		required:true,
		minlength:1
	}
});

module.exports= {Customer};