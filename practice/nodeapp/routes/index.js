var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var db=require('../database');
//app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var CIDHold = -1;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});
router.get('/traderSignUpForm', function(req, res, next) {
  res.render('index', { title: '' });
});
router.post('/traderSignUpForm',urlencodedParser, function(req, res, next) {
  
	// store all the user input data
	 const userDetails = req.body;
	 console.log(req.body.name)
	 console.log(userDetails)
	 //var sql="SELECT name, clientID, level, phoneNumber, ethereumAddress FROM trader WHERE email='"+req.body.email+"' AND password='"+req.body.password+"';";
  //  var sql = "INSERT INTO trader (name, phoneNumber, cellPhone, email, password, level, ethereumAddress ) VALUES ("+req.body.name+", "+req.body.number+", "+req.body.number+", "+req.body.email+", "+req.body.password+", silver, "+req.body.eth+");"
	//  console.log(sql);
	//  db.query(sql, function (err, data, fields) {
	//  if (err) throw err;
  //  res.render('index', { title: 'NFT List', nfttable: data});
  //  })
   res.render('index', { title: 'Form Completed and will be validated' });
  }); 
module.exports = router;


