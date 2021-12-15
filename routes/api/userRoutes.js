const router = require("express").Router();

const { User, Thought, Reaction } = require("../../models");

const {
  getUsers,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
  createFriend

  // this is where the methods go from the controllers file
} = require("../../controllers/userController");
const { create } = require("../../models/Thought");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).post(deleteUser);

// /api/users/:userId
router.route("/:userId").put(updateUser);

router.route("/:userId/friends/:friendId").post(createFriend);

module.exports = router;
