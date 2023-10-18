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

// tên conference
router.get('/name', function (req, res) {
  var resp = promiseQuery("SELECT `conferenceName` FROM `conference`", db);

  resp.then(data => {
    res.json(data);
  }).catch(err => {
    console.error(err);
    res.status(500).send("Internal Server Error");
  });
});

// địa chỉ conference
router.get('/address', function (req, res) {
  var resp = promiseQuery("SELECT `address` FROM `conference`", db);

  resp.then(data => {
    res.json(data);
  }).catch(err => {
    console.error(err);
    res.status(500).send("Internal Server Error");
  });
});

// số lượng ghế ngồi 
router.get('/NumberOfSeat', function (req, res) {
  var resp = promiseQuery("SELECT `NumberOfSeat` FROM `conference`", db);

  resp.then(data => {
    res.json(data);
  }).catch(err => {
    console.error(err);
    res.status(500).send("Internal Server Error");
  });
});

// giá của phòng họp
router.get('/price', function (req, res) {
  var resp = promiseQuery("SELECT `price` FROM `conference`", db);

  resp.then(data => {
    res.json(data);
  }).catch(err => {
    console.error(err);
    res.status(500).send("Internal Server Error");
  });
});

// yêu cầu trả trước
router.get('/RequirePay', function (req, res) {
  var resp = promiseQuery("SELECT `Require_First_Pay` FROM `conference`", db);

  resp.then(data => {
    res.json(data);
  }).catch(err => {
    console.error(err);
    res.status(500).send("Internal Server Error");
  });
});

module.exports = router;
