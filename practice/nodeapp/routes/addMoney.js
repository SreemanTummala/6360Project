var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var db=require('../database');

router.get('/addMoney', function(req, res, next) {
    res.render('addMoney', { response: '' });
  });
  router.get('/addMoneyForm', function(req, res, next) {
    res.render('addMoney', { response: '' });
  });
  router.post('/addMoneyForm',urlencodedParser, function(req, res, next) {
    
    // store all the user input data
     const userDetails = req.body;
     console.log(req.body.date)
     console.log(userDetails)
    var sql="SELECT fiatBalance FROM trader WHERE email='"+req.body.email+"' AND password='"+req.body.password+"';";
     console.log(sql);
     // query is commented out since bad form submission can crash it
    //  db.query(sql, function (err, data, fields) {
    //  if (err) {
    //   res.render('addMoney', { title: err});
    //  }
    //  else{
    //   res.render('addMoney', { title: "submitted"});
    //   // assuming the login worked
    //   var sqlp = "UPDATE TRADER SET fiatBalance = '"+res.amountPaid+data.fiatBalance+"' WHERE email='"+req.body.email+"' AND password='"+req.body.password+"';";
    //   db.query(sqlp,function(err,data,fields){
    //       if(err) throw err
    //       res.render("addMoney",{title:"submitted"});
    //   });
    //   var sqlp = "INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...);"
    //  }
     
    //  });
    res.render('addMoney', { response: 'Form was successfully submitted' });
    }); 
module.exports = router;