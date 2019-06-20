var mysql = require('mysql');
connection = mysql.createConnection({
    host: 'hngomrlb3vfq3jcr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'yeah14npgvoxrrzl',
    password: 'xysul7tj4l9myxp4',
    database:'ankkkwsf61ihjfs9'
})

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

//export connection for ORM
module.exports = connection;