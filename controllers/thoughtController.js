const { User, Thought, Reaction } = require("../models");

module.exports={
    createThought(req, res){
        Thought.create(req.bod).then((thought)=>res.json(thought))
        .catch((err) => res.status(500).json(err));
    } 
}