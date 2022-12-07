var express = require('express');
var router = express.Router();
var db=require('../database');
var bodyParser = require('body-parser')
//app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// this script to fetch data from MySQL databse table
router.get('/managerView', function(req, res, next) {
    var sql='SELECT tokenId, smartContactAddress, name, clientID, price FROM NFT;';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('managerView', { title: 'NFT List', nfttable: data});
  });
});
// another routes also appear here
router.get('/managerViewForm', function(req, res, next) {
    res.render('managerView');
  });

router.post('/managerViewForm',urlencodedParser, function(req, res, next) {
  
	// store all the user input data
	 const userDetails = req.body;
	 console.log(req.body.timeframe)
	 console.log(userDetails)

   if(req.body.timeframe == 'week')
   {
    var sql="select * from managerweekview";
   }
   else if (req.body.timeframe == 'day')
   {
    var sql="select * from managerdayview";
   }
   else{
    var sql="select * from managermonthview";
   }
	 
	 console.log(sql);
	 db.query(sql, function (err, data, fields) {
	 if (err) throw err;
	 res.render('managerView', { title: 'NFT List', nfttable: data});
   });
  }); 


module.exports = router;