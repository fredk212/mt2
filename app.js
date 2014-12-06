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
app.listen(process.env.PORT || 5000)

