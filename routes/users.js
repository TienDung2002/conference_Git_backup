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
  var resp = promiseQuery("SELECT * FROM `users`", db);

  resp.then(data => {
    res.json(data);
  }).catch(err => {
    console.error(err);
    res.status(500).send("Internal Server Error");``
  });
});

// full name user
// router.get('/fullname', function (req, res) {
//   let {fullname, id} = req.query;
//   var resp = promiseQuery(`SELECT userFullName FROM users WHERE user_ID = ${id} OR userFullName = "${fullname}"`, db);

//   resp.then(data => {
//     res.json(data);
//   }).catch(err => {
//     console.error(err);
//     res.status(500).send("Internal Server Error");``
//   });
// });



router.post('/signup', function(req, res) {
  /*
  cai Call<ResponseClass> methodname( || @Body BodyForm body || @Query("key || name || ...") datatype value) )
  ex: 
  |-  class BodyForm {
        private String username,
        private String password
      } -> body= res.body : {
        "username": value,
        "password": "value"
      }
  |- Method: nameMethod(@Query("name") String value), 
      Call: nameMethod("Duc"), 
      Query: url?name=Duc 
      -> const query = res.query : {
        "name": "Duc"
      };

  res.json( ClassResponse = {
    satus: "...", 
    "Data: ..."
  })
  android nhan: class ClassResponse: {
    @SeriableName("status") private datatype tenBien;
    @SeriableName("Data") private ArryaList<> || HashMap || String || Boolean || .. tenBien2;

    getter, setter
  }
  */

  const body = res.body;

  // -> Call ve db :a = promisWuery(`SELECT * .. WHERE `username` = {body.username} `)
  // Check validate a.length!=0 {res.json{status: "false", "filed": "tu check"}};

  // a.length == 0 -> Call ve db: promisWuery(`INSERT INTO `tb`(`field1`, `field2`, ...) VALUES({body.field1}, {body.field2}, ...)`)
  // Create account

  console.log(1);
  res.json(req.body);
});

/* GET users listing. */
router.post('/:idu', function(req, res) {
  res.status(200).json({
    "params" : req.params,
    "body": req.body,
    "query": req.query
  })
  res.send('respond with a resource');
});


module.exports = router;
