//Remember to get all thoughts
//Remember to get one thought by id
//Remember to create
//Remember to update
//Remember to delete

const {thought, user} = require('../models');

module.exports = {
    //the code to get all thoughts
    getAll(req, res) {
        thought.find()
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },

    //the code to get one thought by id
    getOneThought(req, res) {
        thought.findOne({_id: req.params.thoughtId})
        .select('-__v')
        .then((thought) =>
        !thought
        ? res.status(404).json({message: "Unable to find the id, please try again."})
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err)) ;
    },

    //the code to create a thought
    createThought(req,res) {
        thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err)=> {
            console.log(err);
            return res.status(500).json(err);
        })
    },

    //the code to update a thought
    updateThought(req,res) {
        thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((thought) =>
        !thought
        ? res.status(404).json({message: "Unable to update, please try again!"})
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    //the code to delete a thought
    deleteThought(req,res) {
        thought.findOneAndDelete({_id: req.params.thoughtId})
        .then((thought) =>
        !thought
        ? res.status(404).json({message: "No user has been found."})
        : user.deleteMany({_id: {$in: thought.user}})
        )
        .then(() => res.json({message: "User has been deleted."}))
        .catch((err) => res.status(500).json(err));
    },
 
};

