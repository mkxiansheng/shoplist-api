const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send('{"name":"test"}');
})

app.get('/user', function(req, res){
	res.send('{"name":"mktest","sex":1,"age":18}');
})

app.listen(4100, function(){
	console.log('listen:4100');
});