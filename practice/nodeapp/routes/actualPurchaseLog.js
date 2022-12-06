var express = require('express');
var router = express.Router();
var db=require('../database');
var bodyParser = require('body-parser')
//app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// this script to fetch data from MySQL databse table
router.get('/actualPurchaseLog', function(req, res, next) {
    var sql='SELECT tokenId FROM NFT;';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('actualPurchaseLog', { title: 'NFT List', nfttable: data});
  });
});
router.get('/actualPurchaseLogForm', function(req, res, next) {
  res.render('actualPurchaseLog');
});
router.post('/actualPurchaselogForm',urlencodedParser, function(req, res, next) {
  
	// store all the user input data
	 const userDetails = req.body;
	 console.log(req.body.clientID)
	 console.log(userDetails)
	 var sql="SELECT seller, buyer, commission,commissionType, date FROM purchaselog WHERE clientId='"+req.body.clientID+"';";
	 console.log(sql);
	 db.query(sql, function (err, data, fields) {
	 if (err) throw err;
	 res.render('actualPurchaseLog', { title: 'NFT List', nfttable: data});
   });
  }); 
module.exports = router;