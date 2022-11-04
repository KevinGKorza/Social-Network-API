const router = require('express').Router();
const {
  getAll,
  getOneThought,
  createThought,
  updateThought,
 
} = require('../../controllers/thoughtController.js');

// /api/thought
router.route('/').get(getAll).post(createThought);

// /api/thought/:Id
router
.route('/:thoughtId')
.get(getOneThought)
.put(updateThought)
.delete(deleteThought);

module.exports = router;