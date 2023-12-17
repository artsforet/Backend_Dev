var express = require('express');
const db_pool = require('../db/db_pool');
var router = express.Router();

/* GET home page. */
router.get("/api/users", (req, res) => {
    //유저 정보 반환
    // var users = db_pool().users;
    console.log(users);
    var users = connection.query(
      'SELECT * FROM `users`',
      function(err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
      },
    res.json({users: users})
  )});


module.exports = router;



// var express = require('express');
// const app = require('../app');
// const mysql = require('../db/mysql');
// const mysql_data = require('../db/mysql');
// var router = express.Router();

// app.use('/users', usersRouter);
// /* GET users listing
// . */
// router.get('/', function(req, res, next) {
//   req.send(mysql);
// });

// module.exports = router;
