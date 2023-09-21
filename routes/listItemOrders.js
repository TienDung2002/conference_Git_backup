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

// số item đã đặt
router.get('/orderquantity', function (req, res) {
    var resp = promiseQuery("SELECT `orderQuantity` FROM `list_item_orders`", db);

    resp.then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});

// tổng giá trị item đã đặt
router.get('/sum', function (req, res) {
    var resp = promiseQuery("SELECT `sumPrice` FROM `list_item_orders`", db);

    resp.then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});

module.exports = router