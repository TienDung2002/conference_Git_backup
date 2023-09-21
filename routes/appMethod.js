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
    var resp = promiseQuery("SELECT * FROM `app_method_payment`", db);

    resp.then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});

// tên cách thức thanh toán
router.get('/type', function (req, res) {
    var resp = promiseQuery("SELECT `method_type` FROM `app_method_payment`", db);

    resp.then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});

// ngày tạo phương thức
router.get('/creatAt', function (req, res) {
    var resp = promiseQuery("SELECT `createAt` FROM `app_method_payment`", db);

    resp.then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});

module.exports = router;
