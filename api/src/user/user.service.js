let connectionManager = require("../../core/connectionManager");

module.exports.getAllUsers = async (page, itemsPerPage) => {
  const offset = (page - 1) * itemsPerPage;
  let db = await connectionManager.getConnection();
  const users = await db.query(`SELECT * FROM users LIMIT ${offset}, ${itemsPerPage}`);
  db.end();
  return users[0];
};

module.exports.getUser = async (id) => {
  let db = await connectionManager.getConnection();
  const user = await db.query(`SELECT * FROM users WHERE id = ${id} limit 1`);
  db.end();
  return user[0][0];
};

module.exports.getFriends = async (id, page, itemsPerPage) => {
  const offset = (page - 1) * itemsPerPage;
  let db = await connectionManager.getConnection();
  const query = `SELECT users.firstName, users.lastName, users.avatar, friends.user_id_1, friends.user_id_2 
    FROM friends INNER JOIN users ON users.id = friends.user_id_2 
    WHERE friends.user_id_1 = ${id} UNION 
    SELECT users.firstName, users.lastName, users.avatar, friends.user_id_1, friends.user_id_2 
    FROM friends INNER JOIN users ON users.id = friends.user_id_1 WHERE friends.user_id_2 = ${id} LIMIT ${offset}, ${itemsPerPage}`;
  const friends = await db.query(query);
  db.end();
  return friends[0];
};
