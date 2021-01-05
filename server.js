const express = require("express");
const users = require("./routes/users");

// Initializing the Application
const app = express();

app.use(express.json());

app.use("/api/users", users);

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
});

module.exports = server;
