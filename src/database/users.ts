const { on } = require("..");
const database = require("./db");

async function getAllUsers() {
  return await database.then(async (p: any) => {
    try {

      let { rows } = await p
        .query("SELECT * FROM users LIMIT 5");
      return rows;
    }
    catch (error) {
      console.log(error)
    }
  });
}

module.exports = {
  getAllUsers: getAllUsers,
};
