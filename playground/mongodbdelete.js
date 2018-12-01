 const {MongoClient,ObjectID} = require('mongodb');

var uri = "mongodb+srv://manoj:sachin_1@cluster0-qvu6j.mongodb.net/test?retryWrites=true";

MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
	
	if(err) {
		console.log('Inside error');
	}

	const collection = client.db("test").collection("user");
	collection.deleteMany({age:'36'}).then((res)=>{
		console.log(res);
	});
	
	
	collection.deleteOne({age:'29'}).then((res)=>{
		console.log(res);
	});
	
		collection.findOneAndDelete({age:'25'}).then((res)=>{
		console.log(res);
	});

});