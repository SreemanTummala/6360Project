var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
//app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var CIDHold = -1;
/* GET home page. */
router.get('/requestRefund', function(req, res, next) {
  res.render('requestRefund', { title: 'Please Request a Refund' });
});
router.get('/requestRefundForm', function(req, res, next) {
  res.render('requestRefund');
});
router.post('/reqestRefundForm',urlencodedParser, function(req, res, next) {
  
	// store all the user input data
	 const userDetails = req.body;
	 console.log(req.body.name)
	 console.log(userDetails)
	 //var sql="SELECT name, clientID, level, phoneNumber, ethereumAddress FROM trader WHERE email='"+req.body.email+"' AND password='"+req.body.password+"';";
//    var sql = "INSERT INTO trader (name, phoneNumber, cellPhone, email, password, level, ethereumAddress ) VALUES ("+req.body.name+", "+req.body.number+", "+req.body.number+", "+req.body.email+", "+req.body.password+", silver, "+req.body.eth+");"
// 	 console.log(sql);
// 	 db.query(sql, function (err, data, fields) {
// 	 if (err) throw err;
//    CIDHold = data.clientId;
//    })
//    if(clientId != -1)
//    {
//     var sqlP = "INSERT INTO address (streetAddress, city, state, zipCode, clientId ) VALUES ("+req.body.name+", "+req.body.number+", "+req.body.number+", "+req.body.email+", "+req.body.password+", silver, "+req.body.eth+");"
// 	 console.log(sqlP);
// 	 db.query(sqlP, function (err, data, fields) {
// 	 if (err) throw err;
// 	 res.render('index', { title: 'NFT List', nfttable: data});
//    CIDHold = -1;
//    })
        
//    }
   res.render('requestRefund', { title: 'The Refund has been processed'});
  }); 
module.exports = router;


