const express = require('express');
const router= express.Router();


router.get('/example/a', (req, res) => {
    res.send('Hello from A!')
})

module.exports = router;


// const express = require('express');
// var router = express.Router();

// /* GET home page. */

// router.get('/music', (req, res) => {
//     res.send('about')
//   })

// router.get('/music', function(req, res, next) {
//     const path = require('path');
//     const fs = require('fs');
//     const dir = 'music';
//     var files = fs.readdirSync(dir)
//     res.console.log("HelloWorld");
//     res.render('index', { title: 'Express' });
//   });

//   router.get('/api/get/nodejs-api', function(req, res){
// 	res.status(200).json({
//     	"message" : "hello get api nodejs-api"
//         });
;//   res.render('music', { title: 'Express' });
// });

// router.get('/api/get/nodejs-api', function(req, res){
// 	res.status(200).json({
//     	"message" : "hello get api nodejs-api"
//         });
//  });

 