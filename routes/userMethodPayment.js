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


// số thẻ
router.get('/cardnumber', function (req, res) {
    var resp = promiseQuery("SELECT `card_numbers` FROM `user_method_payment`", db);

    resp.then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});

// ngày hết hạn của thẻ
router.get('/expire', function (req, res) {
    var resp = promiseQuery("SELECT `card_expire_at` FROM `user_method_payment`", db);

    resp.then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});

module.exports = router