const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgresql://rushildp:aarya2006@localhost:5432/message_boards",
});

async function startdb() {
  const client = await pool
    .connect()
    .then(console.log("Connected to Database"));
  return client;
}

module.exports = startdb();
