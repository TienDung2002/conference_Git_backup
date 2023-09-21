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

// // function conference data
// function queryConferenceData(column, res) {
//   const sql = `SELECT \`${column}\` FROM \`conference\``;
//   db.query(sql, (err, result) => {
//     if (err) {
//       console.error('Lỗi truy vấn cơ sở dữ liệu: ' + err.message);
//       return res.status(500).send('Lỗi truy vấn cơ sở dữ liệu');
//     } else {
//       const data = result;
//       res.json(data);
//     }
//   });
// }
// // get conference address
// router.get('/conference/address', (req, res) => {
//   queryConferenceData('address', res);
// });


// full bảng
router.get('/', function (req, res) {
  var resp = promiseQuery("SELECT * FROM `conference`", db);

  resp.then(data => {
    res.json(data);
  }).catch(err => {
    console.error(err);
    res.status(500).send("Internal Server Error");
  });
});


// router.get('/', function (req, res) {
//   // Lấy giá trị của tham số 'id' từ URL
//   const id = req.query.id;

//   if (!id) {
//     res.status(400).send("Missing 'id' parameter");
//     return;
//   }

//   // var query = `SELECT * FROM \`conference\` WHERE \`id = ${id}\``;
//   var resp = processQuery("SELECT * FROM `conference` WHERE id = ?", [id], db);

//   resp.then(data => {
//     res.json(data);
//   }).catch(err => {
//     console.error(err);
//     res.status(500).send("Internal Server Error");
//   });
// });

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
