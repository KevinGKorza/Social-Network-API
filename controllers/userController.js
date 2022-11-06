//Remember to get all users
//Remember to get one user by id
//Remember to create user
//Remember to update user
//Remember to delete user


const {thought, user} = require('../models');

module.exports = {
    //the code to get all users
    getAll(req, res) {
        user.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

    //the code to get one user by id
    getOneUser(req, res) {
        user.findOne({_id: req.params.userId})
        .select('-__v')
        .then((user) =>
        !user
        ? res.status(404).json({message: "Unable to find the user id, please try again."})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err)) ;
    },

    //the code to create a user
    createUser(req,res) {
        user.create(req.body)
        .then((user) => res.json(user))
        .catch((err)=> {
            console.log(err);
            return res.status(500).json(err);
        })
    },

    //the code to update a user
    updateUser(req,res) {
        user.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((user) =>
        !user
        ? res.status(404).json({message: "Unable to update the user, please try again!"})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    //the code to delete a user
    deleteUser(req,res) {
        user.findOneAndDelete({_id: req.params.userId})
        .then((user) =>
        !user
        ? res.status(404).json({message: "No user has been found."})
        : thought.deleteMany({_id: {$in: user.user}})
        )
        .then(() => res.json({message: "User has been deleted."}))
        .catch((err) => res.status(500).json(err));
    },
 
};
module.exports = user;
