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

router.get('/', function (req, res) {
    var resp = promiseQuery("SELECT * FROM `conference_image`", db);

    resp.then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});

router.get('/imageRoom', function (req, res) {
    var resp = promiseQuery("SELECT `image` FROM `conference_image`", db);

    resp.then(data => {
        // if (data && data.length > 0) {
        //     // Thiết lập loại nội dung là hình ảnh (png, jpeg, gif, etc.)
        //     res.contentType('image/jpg'); // Điều này tùy thuộc vào loại ảnh bạn lưu

        //     // Lặp qua từng bức ảnh và gửi từng bức ảnh dưới dạng binary data
        //     data.forEach(imageData => {
        //         const imageBuffer = imageData.image;
        //         res.write(imageBuffer, 'binary');
        //     });

        //     // Kết thúc phản hồi
        //     res.end();
        // }

        if (data && data.length > 0) {
            // Lấy dữ liệu ảnh từ kết quả truy vấn
            const imageBuffer = data[0].image;

            // Thiết lập loại nội dung là hình ảnh (png, jpeg, gif, etc.)
            res.contentType('image/jpg');

            // Gửi dữ liệu ảnh dưới dạng binary data
            res.end(imageBuffer, 'binary');
        } else {
            // Không có dữ liệu ảnh
            res.status(404).send("Image not found");
        }
    }).catch(err => {
        console.error(err);
        res.status(500).send("Internal Server Error");
    });
});


// Lấy ảnh dựa vào conference_ID


module.exports = router;