var express = require('express');
var app = express();

//app.engine('jade', require('jade').__express);

//app.get('/', function (req, res) {
	//res.render('index.jade', {name: 'Joe'});
//});

// POST method route
//app.get('/', function (req, res) {
  //res.send('POST request homepage');
//});

app.get('/', function(req, res){
	res.send('hello');
});
app.get('/ratnadeep', function(req, res){
	res.send('hello ratnadeep');
});
//app.get('/a+b', function(req, res){
//	res.send('hello a+b');
//});

//Dynamic
app.get('/user/:username',function(req,res){

	res.send(" "+req.params.username+" profile!");
});



app.listen(3000);

