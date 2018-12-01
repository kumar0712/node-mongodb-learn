 const {MongoClient,ObjectID} = require('mongodb');

var uri = "mongodb+srv://manoj:sachin_1@cluster0-qvu6j.mongodb.net/test?retryWrites=true";

MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
	
	if(err) {
		console.log('Inside error');
	}
	const collection = client.db("test").collection("user");
	// filter, update
	collection.findOneAndUpdate({
			_id:new ObjectID('5c02ebf3b052ff3860bfd226')}, {
			$set : {
				name:'Raju'
			},$inc : {age:3} }, {
				returnOriginal:false
			}).then((result)  => {
				console.log(result);
		});
			
		
	
	  //console.log(client.db.devices.find);
   client.close();
});