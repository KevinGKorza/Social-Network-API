// const names = [
//     'Homer',
//     'Marge',
//     'Bart',
//     'Lisa'
//   ];
  
//   const randomTasks = [
//     'Go to work',
//     'Prank someone',
//     'Clean the house',
//     'Feed the dog',
//     'Feed the cat',
//     'Watch Maggie',
//     'Go to Moes',
//     'Play the Sax',
//     'Go to a baseball game'
//   ];
  
//   // The code to get a random array item
//   const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
//   // The code that gets a random name from above
//   const getName = () =>
//     `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
//   // The code to generate random tasks (from above)
//   const getRandomTasks = (int) => {
//     const results = [];
//     for (let i = 0; i < int; i++) {
//       results.push({
//         taskName: getRandomArrItem(randomTasks),
//         score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
//       });
//     }
//     return results;
//   };
  

//   module.exports = { getName, getRandomTasks };
  