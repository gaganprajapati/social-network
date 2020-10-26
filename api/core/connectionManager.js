var mysql = require("mysql2/promise");
const { MYSQL_HOST, MYSQL_PORT, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DB } = process.env;

async function getConnection() {
  try {
    let connection = await mysql.createConnection({
      host: MYSQL_HOST,
      port:MYSQL_PORT,
      user: MYSQL_USERNAME,
      password: MYSQL_PASSWORD,
      database: MYSQL_DB,
    });
    return connection;
  } catch (error) {
    console.log("ConnectionManager -> getConnection", error);
    throw error;
  }
}

module.exports = { getConnection };
