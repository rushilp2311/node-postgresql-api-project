const { on } = require("../server");
const database = require("./db");

async function getAllUsers() {
  return await database.then(async p => {
    let { rows } = await p
      .query("SELECT * FROM users LIMIT 5")
      .catch(console.error("error in fetching data"));
    return rows;
  });
}

module.exports = {
  getAllUsers: getAllUsers,

};
