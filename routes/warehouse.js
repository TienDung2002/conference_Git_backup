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

// tên item
router.get('/itemname', function (req, res) {
    var resp = promiseQuery("SELECT `itemName` FROM `items_warehouse`", db);

    resp.then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});

// số lượng các item
router.get('/quantity', function (req, res) {
    var resp = promiseQuery("SELECT `quantityAvailable` FROM `items_warehouse`", db);

    resp.then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});

// lastModified
router.get('/lastmodified', function (req, res) {
    var resp = promiseQuery("SELECT `lastModified` FROM `items_warehouse`", db);

    resp.then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});

// giá item
router.get('/itemprice', function (req, res) {
    var resp = promiseQuery("SELECT `itemPrice` FROM `items_warehouse`", db);

    resp.then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});



module.exports = router