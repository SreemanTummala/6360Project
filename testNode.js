var mysql = require('mysql');

var con = mysql.createConnection({
  user: "ben",
  password: "data123!",
  database: "nft"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Trader", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});