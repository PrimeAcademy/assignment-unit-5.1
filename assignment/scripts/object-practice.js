console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
firstName: 'Justin',
lastName: 'Reichelt',
hasSiblings: true,
shoeCount: '6',
favThreeFoods: ['spaghetti', 'pho', 'seafood']
};
// TODO - add properties here
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/

let fullName = 'Justin' + ' '+ 'Reichelt';
console.log('My name is', fullName);

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log('My first favorite food is:', me.favThreeFoods[0]);
console.log('My last favorite food is:', me.favThreeFoods[2]);


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
me.shoeCount = 7;
console.log('My current shoe count is:', me.shoeCount);
console.log('My current shoe count is now:', me.shoeCount = 7);
//changed the count in the Console Browser as well!

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'green';
console.log(me);

// let user = {
//   id: 123,
//   firstName: 'Anne',
//   role: 'admin'
// };

// console.log(user);
// console.log(user['firstName']);

// let foods = ['apples', 'oranges', 'bahn mi'];

// console.log(foods);
// console.log(foods.length);

// console.log(user.role);
// console.log(console);

// user.firstName = 'Annabel';
// user.lastName = 'Lee';

// console.log(user);

// let mapPin = {
//   location: {
//     lat: 45,
//     long: -95
//   },
//   visitors: ['Annabel', 'Bob', 'Jubba'],
//   isScenic: true,
//   neighborhood: null,
//   greet: () => {
//     console.log('Hello from my favorite spot!');
//   }
// }
// mapPin.greet();

// console.log(mapPin.location.lat);

// let pinMatrix = [
//   [null, mapPin]
// ];

// console.log(pinMatrix[0][1].visitors[1]);

// //let pin2 = structuredClone(mapPin);

// //user.middleName = undefined;

// if (Object.hasOwn(user, 'middleName')) {
//   console.log(user.middleName);
// } else {
//   console.log('No middle name!');
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));

// for (let val of Object.values(user)){
//   console.log('This is a val:', val);
// }

// // for (let key of Object.keys(user)) {
// //   console.log('This is a key:', key);
// // }
