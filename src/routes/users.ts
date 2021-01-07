import express, { Request, Response } from "express";
const Users = require("../database/users");
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const allUsers = await Users.getAllUsers();
    res.status(200).send(
      allUsers
    );
  } catch (error) {
    console.log(error, "error in route")
  }

});

export default router;
