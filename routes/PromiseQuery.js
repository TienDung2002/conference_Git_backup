
const processQuery = (sql, db) => {
  
  return new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
          if (err) {
              reject(err);
          } else {
              // Trả về kết quả truy vấn
              resolve(result);
          }
      });
  });
    
}

module.exports=processQuery;