const { User, Thought, Reaction } = require("../models");

module.exports = {
  createThought(req, res) {
    console.log("thought");
    Thought.create(req.body)
      .then((thought) => {
        console.log("inside thought create");
        return User.findOneAndUpdate(
          { username: req.body.username },
          { $push: { thoughts: thought._id } },
          { new: true }
        ).then((userdata) => {
          res.json(userdata);
        });
      })
      .catch((err) => res.status(500).json(err));
  },
  getThoughts(req, res) {
    Thought.find()
      .sort({ createdAt: -1 })
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((oneThought) => {
        // if statement produces an unhandledpromise rejection warning
        if (!oneThought) {
          // res.status(400);
          res.json({
            message: `No thought with that id exists. Please try again with another id`,
          });
        }
        res.json(oneThought);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
// updates thought but mus inlcude the thoughtText, username, and userId in the body
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((updatedThought) =>
        res.json( updatedThought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((deletedThought) => {
        if (!deletedThought) {
          res.status(404).json({ message: `no user with this id found` });
        }
        res.json({ meassage: `deleted` });
      })
      .catch((err) => res.status(500).json(err));
  },
// currently its returning an unrelated thought and not adding a reaction
  addReaction(req, res) {
    console.log("You are adding a reaction");
    console.log(req.body);
    Thought.findOneAndUpdate(
      (
      console.log("You are in the process"),
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true })
    )
      .then((newreaction) => {
        console.log(newreaction)
        if (!newreaction) {
          res.status(404).json({ message: `no reaction created` });
        }
        res.json(reaction);
      })
      .catch((err) => res.status(500).json(err));
  },
};
