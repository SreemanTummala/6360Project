var express = require('express');
var router = express.Router();
var db=require('../database');
var bodyParser = require('body-parser')
//app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// this script to fetch data from MySQL databse table
router.get('/purchaseLog', function(req, res, next) {
    var sql='SELECT tokenId, smartContactAddress, name, clientID, price FROM NFT;';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('purchaseLog', { title: 'NFT List', nfttable: data});
  });
});
router.get('/purchaseLogForm', function(req, res, next) {
  res.render('purchaseLog');
});
router.post('/purchaselogForm',urlencodedParser, function(req, res, next) {
  
	// store all the user input data
	 const userDetails = req.body;
	 console.log(req.body.email)
	 console.log(userDetails)
	 var sql="SELECT name, clientID, level, phoneNumber, ethereumAddress FROM trader WHERE email='"+req.body.email+"' AND password='"+req.body.password+"';";
	 console.log(sql);
	 db.query(sql, function (err, data, fields) {
	 if (err) throw err;
	 res.render('purchaseLog', { title: 'NFT List', nfttable: data});
   });
  }); 
module.exports = router;