console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Steve',
  lastName: 'Shumaker',
  hasSiblings: true,
  shoeCount: 10,
  favThreeFoods: ['lobster', 'steak', 'strawberries']
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/

let fullName = `${me.firstName} ${me.lastName}`;
console.log(`My full name is: ${fullName}`);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log(`My first favorite food is: ${me.favThreeFoods[0]}, and my last favorite food is: ${me.favThreeFoods[2]}`);


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

console.log(`The number of pairs of shoes I own is: ${me.shoeCount}`);
me.shoeCount += 1;
console.log(`Got a new pair of shoes - the new number of pairs is: ${me.shoeCount}`);


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'Green';
// console.log(`Added a favorite color, my new favorite things are: ${me}`); -- ask Zack why this does not work
console.log('Added a favorite color, my new favorite things are: ', me);

// #### In class work ####

// creating object and accesing properties with '.'
// let foods = ['apples', 'oranges', 'bahn mi'];

// let user ={
//   id: 123,
//   firstName: 'Anne',
//   role: 'admin',
//   favFoods: foods
// };

// // console.log(user.favFoods[0]);

// // changing the value of a property
// user.firstName = 'Steve';

// console.log(user);

// // creating a new property
// user.lastName = 'Lee';

// console.log(user);

// let user2 = {
//   middleName: 'Sue',
//   firstName: 'Bob',
//   ...user
// };

// // console.log(user2);

// let mapPin = {
//   location: {
//     lat: 45,
//     long: -95
//   },
//   visitors: ['Steve', 'Lou', 'Paul'],
//   isScenic: true,
//   neighborhood: null,
//   greet: () => {
//     console.log('Hello from my favorite spot');
//   }
// };

// mapPin.greet();

// console.log(mapPin.location.lat);

// let pinMatrix = [
//   [null, mapPin]
// ]

// console.log(pinMatrix[0][1].visitors[1]);


// using Object.hasOwn to see whether an object has a property

// if (Object.hasOwn(user, 'middleName')) {
//   console.log(user.middleName);
// } else {
//   console.log('No middle name');
// }

// accessing the keys and values of an object

// console.log(Object.keys(user));
// console.log(Object.values(user));

// for (let val of Object.values(user)) {
//   console.log(`This is a val: ${val}`);
// }

// for (let key of Object.keys(user)) {
//   console.log(`This is a key: ${key}`);
//   console.log(`This is a value: ${user[key]}`);
// }