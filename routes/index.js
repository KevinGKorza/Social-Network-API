const router = require('express').Router();
const thoughtRoutes = require('../routes/api/thoughtRoutes');
const userRoutes = require('../routes/api/userRoutes');

router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);

module.exports = router;
