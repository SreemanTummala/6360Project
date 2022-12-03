var mysql = require('mysql'); //get dependency

var conn = mysql.createConnection({
  user: "ben",
  password: "data123!",
  database: "nft"
}); 

//conection
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;