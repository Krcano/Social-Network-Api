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
          { new: true },

        )
        .then((userdata)=>{
            res.json(userdata)
        });
      })
      .catch((err) => res.status(500).json(err));
  },
  getThoughts(req, res) {
    Thought.find()
    // .sort({createdAt:-1})
      .then((thought) => res.json(thought))
      .catch((err) =>{ console.log(err)
        res.status(500).json(err)});
  }

};
