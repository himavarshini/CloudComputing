'use strict'

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var phones=[
{model: "Note4", manufacturer:"Samsung",price: 10000,quantity:10},
{model: "GalaxyS8Edge", manufacturer:"Samsung",price: 30000,quantity:5},
{model: "F3Plus", manufacturer:"Oppo",price: 17000,quantity:3},
{model: "F5", manufacturer:"Oppo",price: 20990,quantity:7},
{model: "Note3", manufacturer:"RedMi",price: 9990,quantity:18},
{model: "Note4", manufacturer:"RedMi",price: 14990,quantity:3},
{model: "G5Plus", manufacturer:"Motorola",price: 15000,quantity:1},
{model: "X132", manufacturer:"Motorola",price: 7999,quantity:0},
{model: "H123", manufacturer:"Honor",price: 4000,quantity:3},
{model: "H142", manufacturer:"Honor",price: 16000,quantity:4}];

var router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/get-items',function(req,res){
	res.send(phones);
});		
app.get('/get-items/manufacturer',function(req,res){
	var man = req.param('man');
	var result = []
	for(var i in phones){
		if(man.toLowerCase() == (phones[i].manufacturer).toLowerCase()){
			result.push(phones[i]);
		}
	}
	res.send(result);
});
app.get('/get-items/model',function(req,res){
	var model = req.param('model');
	var result = []
	for(var i in phones){
		if(model.toLowerCase() == (phones[i].model).toLowerCase()){
			result.push(phones[i]);
		}
	}
	res.send(result);
});
app.get('/get-items/min-price',function(req,res){
	var min_price = req.param('min_price');
	var result = []
	for(var i in phones){
		if(phones[i].price > min_price){
			result.push(phones[i]);
		}
	}
	res.send(result);
});
app.get('/buy',function(req,res){
	var model = req.param('model');
	for(var i in phones){
		if(model.toLowerCase() == (phones[i].model).toLowerCase()){
			if(phones[i].quantity == 0){
				res.send('Item is Sold out');
			}
			else{
				phones[i].quantity-=1;
				res.send('Price is ' + phones[i].price+ ' Remaining quantity is '+phones[i].quantity);
			}
		}
	}
});
app.get('/', function (req, res) {
  console.log("Hello Himavarshini");
  res.send('Hello Himavarshini');
})
app.get('/timeTable', function (req, res) {
   res.send('Hello World from timeTable');
});
app.get('/echo', function (req, res) {
   console.log('name is ' + req.param('name')); 
   res.send('You sent - ' + req.url);

});

app.listen(9999, function (err) {
  if (err) {
    throw err
  }
  console.log('Server started on port 9999')
})
