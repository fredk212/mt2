var express = require('express');
var path = require('path');
var app = express();

//config
app.set('views', __dirname + '');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/'));


//routes
app.get('',function(req,res){
	res.render('index.html')
});

//server
app.listen(3000,function(){
	console.log('ready on port 3000');
})

