var express = require('express');
var router = express.Router();


router.get("/api/users", (req, res) => {
    //유저 정보 반환
    
    res.json({ok: true, users: users});
})

/* GET home page. */
// router.get('/music', function(req,res) {
//     req.send(console.log("Hello World"))
// })



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
