var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {User} = require('./model/user.js');


var app = express();
app.use(bodyParser.json());

app.post('/user',(req,res) =>{
	var user = new User({
		name:req.body.name,
		age:req.body.age,
		address : req.body.address
	});
	user.save().then( (doc)  => { 
		res.send(doc);
	},(e) => {
		res.status(400).send(e); 
	});
  

});


app.listen((3010),() => {
console.log('Starting at port 3010');
});



