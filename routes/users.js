var express = require('express');
var router = express.Router();
const mysql = require('mysql');
var promiseQuery = require("./PromiseQuery");

let db = mysql.createConnection({
  host: 'mysql5049.site4now.net', // địa chỉ máy chủ MySQL
  user: 'a9ed65_tiendun',         // tên người dùng MySQL
  password: 'vutiendung2002',     // mật khẩu MySQL
  database: 'db_a9ed65_tiendun'   // tên cơ sở dữ liệu MySQL
});

// full bảng
router.get('/', function (req, res) {
  var resp = promiseQuery("SELECT * FROM `users`", db);

  resp.then(data => {
    res.json(data);
  }).catch(err => {
    console.error(err);
    res.status(500).send("Internal Server Error");``
  });
});

// full name user
router.get('/fullName', function (req, res) {
  var resp = promiseQuery("SELECT `userFullName` FROM `users`", db);

  resp.then(data => {
    res.json(data);
  }).catch(err => {
    console.error(err);
    res.status(500).send("Internal Server Error");``
  });
});



router.post('/new', function(req, res) {
  console.log(1);
  res.json(req.body);
});

/* GET users listing. */
router.post('/:idu', function(req, res) {
  res.status(200).json({
    "params" : req.params,
    "body": req.body,
    "query": req.query
  })
  res.send('respond with a resource');
});

// avatar user đuôi png

module.exports = router;
