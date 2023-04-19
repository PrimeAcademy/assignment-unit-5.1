console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firtName: 'Halima',
  lastName: 'Omar',
  hasSiblings: true,
  shoeCount: 25,
  favThreeFoods: ['pasta', 'ice cream', 'tacos']
  // TODO - add properties here
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = me.firtName + ' ' + me.lastName;
console.log('My full name', fullName);
/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log('My first favorite food', me.favThreeFoods[0]);
console.log('My last favorite food', me.favThreeFoods[me.favThreeFoods.length-1]);


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log('My current shoe count', me.shoeCount);
me.shoeCount = 26;
console.log('My updated shoe count', me.shoeCount);

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'Green';
console.log('My favorite color', me);










let user = {
  id: 123,
  firstName: 'Anna',
  role: 'Admin'
};

console.log(user);
console.log(user['firstName']);

console.log(user.role);

// to modifiy first name

user.firstName = 'Annabel';
//create new property last name

user.lastName= 'Lee'
console.log(user);

let mapPin = {
  location: {
    lat: 46,
    long: -95
  },
  visitors: [ 'Annabel', 'Bob', 'Judda'],
  inScenic: true,
  neigborhood: null,
}

console.log(mapPin.location.lat);
[null, mapPin]

// user middle name
//or if (Object.hasOwn(user, 'middleName')) 100 % works the === below works 99% of the time
if( user.middleName === undefined) {
console.log(user.middleName);
} else {
  console.log('No middle name!');
}
console.log(user.middleName)


  console.log(Object.keys(user));
  console.log(Object.values(user));

  for (let val of Object.values(user)) {
    console.log('This is a val;', val);
  }

  for (let key of Object.keys(user)) {
console.log('This is a key', key);
console.log('This is a ke', user[key]);
  }
  