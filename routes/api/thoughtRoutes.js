const router = require("express").Router();

const { User, Thought, Reaction } = require("../../models");

// brings in methods from controller file
const {
  createThought,

  // this is where the methods go from the controllers file
} = require("../../controllers/thoughtController");

//   Routes
router.route("/").get(getThought).post(createThought);
