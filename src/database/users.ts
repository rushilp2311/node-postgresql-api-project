const { on } = require("..");
const database = require("./db");

async function getAllUsers() {
  return await database.then(async (pool: any) => {
    try {

      let { rows } = await pool
        .query("SELECT * FROM users LIMIT 5");
      return rows;
    }
    catch (error) {
      console.log(error)
    }
  });
}

export  {
  getAllUsers
};
