const router = require("express").Router();

const { User, Thought, Reaction } = require("../../models");

const {
  getUsers,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,

  // this is where the methods go from the controllers file
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).post(deleteUser);

// /api/users/:userId
router.put("/:userId");

module.exports = router;
