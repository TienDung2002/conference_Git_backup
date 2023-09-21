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

// ngày tạo đơn
router.get('/date', function (req, res) {
    var resp = promiseQuery("SELECT `date` FROM `rented`", db);

    resp.then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});

// tổng giá tiền item + tiền thuê
router.get('/sumtotal', function (req, res) {
    var resp = promiseQuery("SELECT `sumTotal` FROM `rented`", db);

    resp.then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});

// số tiền đã trả trước (cọc)
router.get('/payed', function (req, res) {
    var resp = promiseQuery("SELECT `payed` FROM `rented`", db);

    resp.then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});

// số tiền còn phải trả
router.get('/payleft', function (req, res) {
    var resp = promiseQuery("SELECT `payLeft` FROM `rented`", db);

    resp.then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});


module.exports = router;