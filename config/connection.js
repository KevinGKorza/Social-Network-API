//remember to connect mongoose and the mongoose data base

const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;