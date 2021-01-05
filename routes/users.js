const express = require("express");
const Users = require("../database/users");
const router = express.Router();

router.get("/users", async (req, res) => {
  const allUsers = await Users.getAllUsers().catch(
    console.log("error in route")
  );
  console.log(allUsers);
  res.send({
    status: "ok",
    allUsers: allUsers,
  });
});

module.exports = router;
