var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var musicRouter = require('./routes/musicpage');
const fileupload = require("express-fileupload");
const cors = require("cors");
const mysql = require("mysql2");
const { default: mysql_data } = require('./db/db_pool');
const db_pool = require('./db/db_pool');

require('dotenv').config();

// with placeholder

var app = express();

const path = require('path');

// console.log(f_path);



// app.set('get-song', (req, res) => {
//   const filepath = pathjoin(__dirname, 'music', 'mp3');
//   res.sendFile(filepath, (err) => {
//     if(err) {
//       console.error(err);
//       res.status('file sent succesfully');
//     }
// })
// });

app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// app.use('music', __dirname, 'song.mp3')
// app.get('music', (req, res) => {
//   const filepath = pathjoin(__dirname, 'music', 'song.mp3');
//   res.sendFile(filepath, (err) => {
//     if(err) {
//       res.status('file sent succesfully');
//     }
//   })
// });




app.post("/fileUpload", (req, res) => {
  let saveFilepath = path.join( __dirname, "react-project", "build", "/")  ;
  let file = req.files.file;
  let fileName = file.name;

  file.mv(saveFilepath+fileName, (err) => {
    if (err) {
      res.status(500).send({ message: "파일 전송 실패", code: 200 });
    }
    res.status(200).send({ message: "파일 전송 성공", code: 200 });
  });
} );


// error handler
app.use(function(err, req, res, next, hello) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  req = err;
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
