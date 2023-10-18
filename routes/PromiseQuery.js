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
const findNextUserId = async () => {
    const query = "SELECT MAX(user_ID) AS maxUserId FROM Users";
    const result = await promiseQuery(query, db);

    if (result[0].maxUserId === null) {
        return 1;
    }

    return result[0].maxUserId + 1;
};

function InsertData(query) {
    const db = new sqlite3.Database(databasePath);
    return new Promise((resolve, reject) => {
        db.run(query, err => {
            if (err) {
                reject(err);
            } else {
                resolve("Inserted");
            }
            db.close();
        });
    });
}

module.exports = processQuery, findNextUserId, InsertData;