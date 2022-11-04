const router = require('express').Router();
const {
  getAll,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  
} = require('../../controllers/userController.js');

// /api/user
router.route('/').get(getAll).post(createUser);

// /api/user/:Id
router
.route('/:userId')
.get(getOneUser)
.put(updateUser)
.delete(deleteUser);


module.exports = router;
