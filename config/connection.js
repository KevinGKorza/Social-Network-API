//remember to connect mongoose and the mongoose database
//Mongoose and Mongoose database connection, will run on localhost:2717

const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;