 var MongoClient = require('mongodb').MongoClient;

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
	collection.insertOne({	
		name:'Manoj',
		age:'36',
		address:'ulta pulta'
	}, (err,result) =>{
		if(err){
			console.log('Unable to insert into dtabase user');
		}
		console.log(JSON.stringify(result.ops, undefined,2));
	});
	
	
   //console.log(client.db.devices.find);
   client.close();
});