var express = require('express');
var router = express.Router();
var db=require('../database');
const {getEthPriceNow,getEthPriceHistorical}= require('get-eth-price');
 


router.get('/buyform', function(req, res, next) {
    
    res.render('buyform');

});

router.post('/insert', function(req, res, next){

    var cid = req.body.cID;
    var address = req.body.address;
    var tid = req.body.tokenid;
    var typeP = req.body.typeP;
    var price = 1200;


    if (typeP == "1"){ //etherium trade
        var sql='SELECT NFTEthTrade(' + cid + ', "' + address + '", ' + tid + ');';
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
            console.log('query was good')
            //res.render('nftlist', { title: 'NFT List', nfttable: data});
        });
    }
    else{ //fiat currency trade
        var sql='SELECT NFTFiatTrade(' + cid + ', "' + address + '", ' + tid + ', ' + price +');';
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
            console.log('query was good')
            //res.render('nftlist', { title: 'NFT List', nfttable: data});
        });
    }

    //console.log(cid, address, tid, typeP); //testing the variables

    res.redirect('buyform')

});

module.exports = router;