var express = require('express');
var router = express.Router();
var db=require('../database');
var bodyParser = require('body-parser')
//app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// this script to fetch data from MySQL databse table
router.get('/tableOwned', function(req, res, next) {
    var sql='SELECT tokenId, smartContactAddress, name, clientID, price FROM NFT;';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('tableOwned', { title: 'NFT List', nfttable: data});
  });
});
// another routes also appear here
router.get('/tableOwnedForm', function(req, res, next) {
    res.render('tableOwned');
  });

router.post('/tableOwnedForm',urlencodedParser, function(req, res, next) {
  
	// store all the user input data
	 const userDetails = req.body;
	 console.log(req.body.name)
	 console.log(userDetails)
	 var sql="SELECT tokenId, smartContactAddress, name, clientID, price FROM NFT WHERE name='"+req.body.name+"';";
	 console.log(sql);
	 db.query(sql, function (err, data, fields) {
	 if (err) throw err;
	 res.render('tableOwned', { title: 'NFT List', nfttable: data});
   });
  }); 


module.exports = router;