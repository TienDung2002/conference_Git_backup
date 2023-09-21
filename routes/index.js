var express = require('express');
var router = express.Router();



// // POST name
// router.post('/conference/name', (req, res) => {
//   const name = req.body.conferenceName;
//   const sql = 'SELECT address, NumberOfSeat, Require_First_Pay, price FROM conference WHERE conferenceName = ?';

//   db.query(sql, [conferenceName], (err, result) => {
//     if (err) {
//       console.error('Lỗi truy vấn cơ sở dữ liệu: ' + err.message);
//       return res.status(500).send('Lỗi truy vấn cơ sở dữ liệu');
//     } else {
//       if (result.length === 0) {
//         return res.status(404).send('Không tìm thấy thông tin cho tên hội nghị: ' + name);
//       }
//       const data = result[0];
//       res.json(data);
//     }
//   });
// });






// // GET conference review
// router.get('/app-method', function (req, res, next) {
//   const sql = 'SELECT * FROM `app_method_payment`';

//   const queryPromise = new Promise((resolve, reject) => {
//     db.query(sql, (err, result) => {
//       if (err) {
//         console.error('Lỗi truy vấn cơ sở dữ liệu: ' + err.message);
//         reject(err);
//       } else {
//         // Trả về kết quả truy vấn
//         resolve(result);
//       }
//     });
//   });

//   queryPromise
//     .then((result) => {
//       // Lưu kết quả vào biến hoặc xử lý nó ở đây
//       const data = result;
//       res.json(data);
//     })
//     .catch((error) => {
//       return res.status(500).send('Lỗi truy vấn cơ sở dữ liệu');
//     });
// });

module.exports = router;
