var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/nftlist', function(req, res, next) {
    var sql='SELECT tokenId, smartContactAddress, name, clientID, price FROM NFT;';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('nftlist', { title: 'NFT List', nfttable: data});
  });
});
module.exports = router;
