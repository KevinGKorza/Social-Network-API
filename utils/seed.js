const connection = require('../config/connection');
const { thought, user } = require('../models');
const { getRandomName, getRandomTasks } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await thought.deleteMany({});

  // Drop existing user
  await user.deleteMany({});

  // Create empty array to hold the users
  const user = [];


  for (let i = 0; i < 20; i++) {
    
    const tasks = getRandomTasks(20);

    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    

    user.push({
      first,
      tasks,
    });
  }

  // Add user to the collection and await the results
  await user.collection.insertMany(user);

  // Add thoughts to the collection and await the results
  await thought.collection.insertOne({
  
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(user);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
