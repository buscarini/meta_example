// var fs = require('fs');
var csv = require('csv');
var mongoose = require('mongoose');
var express = require('express');
var importer = require('./BookImporter')
var Book_list = require('./Book_list')
	
var app = express();

app.get('/import', function(req, res) {
	
	importer.importFile(__dirname+"/books.csv",function(err,books) {

		var response = ''
		
		if (!err) {
			books.forEach(function(book) {
				response = response + book.id + " " + book.title + "</br>"
			});
		}
		
		res.send(response)
	})
})


app.get('/books', function(req, res) {
	Book_list.findAll(req,res,function() {
	})
})

var server = app.listen(3000, function() {
		
	mongoose.connect('mongodb://localhost/test')
		
    console.log('Listening on port %d', server.address().port);
});

// 
// 
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
// 	var http = require('http');
// 	http.createServer(function (req, res) {
// 		
// 		importer.importFile(__dirname+"/books.csv",function(err,books) {
// 			res.writeHead(200, {'Content-Type': 'text/plain'});
// 		
// 			if (!err) {
// 				books.forEach(function(book) {
// 					res.write(book.id + " " + book.title + "\n")
// 				});
// 			}
// 		
// 			res.end("");
// 		})
// 
// 	}).listen(8124, "127.0.0.1");
// 	console.log('Server running at http://127.0.0.1:8124/');
// });

