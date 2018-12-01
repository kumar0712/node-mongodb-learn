 const {MongoClient,ObjectID} = require('mongodb');

var uri = "mongodb+srv://manoj:sachin_1@cluster0-qvu6j.mongodb.net/test?retryWrites=true";

MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
	
	if(err) {
		console.log('Inside error');
	}
	// const db = client.db('test');
   //const collection = client.db("test").collection("Todos");
	//collection.insertOne({
		//text: 'somthing to do',
		//completed: false
	//});
	const collection = client.db("test").collection("user");
	collection.find({_id: new ObjectID('5c02d98379b38528ec6445b1')}).toArray().then((docs) => {
		console.log('user');
		console.log(JSON.stringify(docs, undefined, 2));
			
	}, (err) => {
		console.log('Unable to fetch users',err);
	});
	
	
	collection.find().count().then((count) => {
		console.log(`user : ${count}`);
	
			
	}, (err) => {
		console.log('Unable to fetch users',err);
	});
	
	
	  //console.log(client.db.devices.find);
   client.close();
});