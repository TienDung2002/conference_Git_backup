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


// nội dung review
router.get('/content', function (req, res) {
    var resp = promiseQuery("SELECT `review_content` FROM `conference_review`", db);

    resp.then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});

module.exports = router