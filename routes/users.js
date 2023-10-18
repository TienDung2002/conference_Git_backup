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
    res.status(500).send("Internal Server Error"); ``
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


router.post("/login", async (req, res) => {
  let responseContext = {
    json: {
      status: "denied",
      field: [],
    },
    status: 404,
  };

  let UserLogin = req.body;
  let UserFilter = await promiseQuery(`
  SELECT userEmail, userPassword
  FROM users
  WHERE userEmail = '${UserLogin.userEmail}'`, db);

  if (UserFilter.length !== 0) {
    if (UserFilter.filter(e => e.userPassword === UserLogin.userPassword).length !== 0) {
      responseContext.json.status = "accepted";
      responseContext.json.field = { name: "id", value: UserFilter[0].id }
      responseContext.status = 200
    }
    else {
      responseContext.json.field.push({ name: "password", msg: "wrong" })
    }
  }
  else {
    responseContext.json.field.push({ name: "username", msg: "mis" })
  }
  res.status(responseContext.status).json({ ...responseContext.json });
});

app.post("/register", async (req, res) => {
  let responseContext = {
    json: {
      status: "denied",
      field: {},
    },
    status: 404,
  };

  let UserSignup = req.body;
  const nextUserId = await findNextUserId(); // Tìm ID tiếp theo để insert
  let UserFilter = await promiseQuery(
    `
      SELECT userEmail
      FROM users
      WHERE userEmail = '${UserSignup.userEmail}'`, db);

  if (UserFilter.length !== 0) {
    UserFilter.forEach((element) => {
      Object.keys(element).forEach((e) => {
        if (element[e] == UserSignup[e]) {
          if (!responseContext.json.field[e]) {
            responseContext.json.field[e] = "same";
          }
        }
      });
    });
  }
  else {
    let InsertUser = promiseQuery(
      `
        INSERT INTO Users (
          user_ID,
          userFullName,
          userPhone,
          userEmail,
          userPassword,
          userAvartar,
        )
        VALUES (
            ${nextUserId},
            '${UserSignup.userFullName}',
            'Null',
            '${UserSignup.userEmail}',
            '${UserSignup.userPassword}',
            'Null',
        )
      `
    )
  }

  res.status(responseContext.status).json({ ...responseContext.json });
})

/*
cai Call<ResponseClass> methodname( || @Body BodyForm body || @Query("key || name || ...") datatype value) )
ex: 
|- class BodyForm {
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


/* GET users listing. */
router.post('/:idu', function (req, res) {
  res.status(200).json({
    "params": req.params,
    "body": req.body,
    "query": req.query
  })
  res.send('respond with a resource');
});


module.exports = router;
