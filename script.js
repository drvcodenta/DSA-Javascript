'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic-Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function({startIndex,lastIndex}){
    return [this.categories[startIndex],this.starterMenu[lastIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
orderPasta(ing1, ing2, ing3) {
  console.log(
    `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
  );
},
orderPizza(mainIngredient, ...otherIngredients) {
  console.log(mainIngredient);
  console.log(otherIngredients);
},
  orderDelievery: function({time,address,
  mainIndex,starterIndex}) {
    console.log(`Order is received at ${time},on ${address}.
    Your ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]}`);
  }, //If you want, you can set the values equal to time in parameters itself like:
  orderDelievery: function({time = '20:30',address,
    mainIndex = 1,starterIndex = 1}) {
      console.log(`Order is received at ${time},on ${address}.
      Your ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]}`);
    },//Rest of the values, it can itself grab from outer restaurent.orderDelievery function !
};

// ---------------------------------------------------------------------------------------------------------------------------------------------
//Learning FOR LOOP IN JS
// const menu = [...restaurant.mainMenu,...restaurant.starterMenu]
// for(const item of menu) console.log(item);
// for(const item of menu.entries()) console.log(item);
// console.log([...menu.entries()]);
// for(const item of menu.entries()){
//   console.log(`${item[0] + 1}:${item[1]}`);
// }
// for(const [entryNumber,object] of menu.entries()){
//   console.log(`${entryNumber+1}:${object}`);
// }


// You can now create an object and use it as method inside some other object, by just declaring its name now in ES6!
// for eg,

// const object= {
//   method1: 'kyaLikhunMainYahaan?',
//   method2: 'samajhNahiAaRahaa?',
//   method3: 'MohitChutiyaHai',
// };
// const FatherObject = {
//   object1: 'IamNPCdontlookatme',
//   object //Here i just declared its name, nothing else and it will work no matter what!
// };
// console.log(FatherObject);

// // You can also use string literal in the name of object, eg:
// const object1 = {
//   [`BreadKhaygaKya?-${2+5}`] : 'Nahi Khaunga...'
// }
// console.log(object1);

// //Last but not the least, you don't need to write function explicitely if you want to write a function
// const object2 = {
//   order: function () { 
//     console.log('I order and i go away!');
//    }
// }
// // will work same as
// const object3 = {
//   order() { 
//     console.log('I order and i go away!');
//    }
// }
// console.log(object2,object3);
// ---------------------------------------------------------------------------------------------------------------------------------------------
// restaurant.orderDelievery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// Different Methods to destructure an Array:
// 1:
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a,b,c);

// 2:
// const [x,y,z] = arr;
// console.log(x,y,z);

// 3:
  // let [ajeebKhana1, ,ajeebKhana3] = restaurant.starterMenu;
// Notice here that the array declared here is not given any name,it's created and positions are named accordingly!
  // console.log(ajeebKhana1,ajeebKhana3);
  //If we want to exchange the positions of entries of the array then usually we do it by the use of temp but here 
  //you can do something like this:
//  [ajeebKhana1,ajeebKhana3] = [ajeebKhana3,ajeebKhana1];
//  console.log(ajeebKhana1,ajeebKhana3);
// const [starter,main] = restaurant.order(2,0);
// console.log(starter,main);

// 4:
// const [a=1,b=1,c=1] = [3,5];
// console.log(a,b,c);


// Now we will Look into different methods to destructure an object:
// // To destructure an object, you need to use the curly braces {} just like we used [] in case of arrays
// 1:
// const {name,starterMenu,mainMenu} = restaurant;
// console.log(name,starterMenu,mainMenu);
// 2:
// If you want to change the name of some property, then you can do it as:
// const {
//   name: newName, 
//   starterMenu: newStarterMenu
// } = restaurant;
// console.log(newName,newStarterMenu); //first write previous name then set it to new Name

// console.log(starterMenu);

// const {
//   list = [],
//   starterMenu: starters = []
// } = restaurant;

// console.log(list); //Only prints en empty list because you need to write the actual name of the method of the object
//to grab it, in some variable!

// console.log(starters);//logs the same values as starterMenu, this is you can rewrite the inner object!

// let a = 111;
// let b = 999;
// const obj = {a:23, b:53, c:100};

// Mutating Variables
// So if we want to overwrite the values of a and b to values of a and b from obj object, then
// {a,b} = obj; // will not work because JS by default, consider {} as something needed to create a Block. Therefore:

// ({a,b} = obj) // is how it's used to change the values of a,b and set it to the a,b from object

// console.log(a,b);

// Destructuring a nested Object:
// So let's say, we need an access to variables of open and close of inner object element in our restaurent object

// const { fri: {open,close} } = restaurant.openingHours;
// console.log(open,close);
// If you want to change the names of these variables you do that like:

// const { fri: {open: o,close: c}} = restaurant.openingHours;
// console.log(o,c);


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/

///////////////////////////////////////
// Short Circuiting (&& and ||)

// console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas'); //OR compares two values to return first truthy value inside the comparison
// console.log('' || 'Jonas'); // output: 'Jonas' because it's the first truthy value
// console.log(true || 0);
// console.log(undefined || null); // output: null because it looks for truthy value until the end, when it cannot find it 
// returns last falsy value which is null !

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // output: 'Hello'

// restaurant.numGuests = 0; // creating a new method ans setting it to falsy value
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); //output: 10 because the restaurent.numGuest is falsy(ie, 0)

// above is a problem where output is 10 and not 0 is problematic as it directly siginifies that the method of the name
// restaurent.numGuest does not exists but it does exists ( it's just that it is equal to 0 which is a falsy value)

// To resolve above problem, we use nullish coalescing operator:
// ///////////////////////////////////////
// The Nullish Coalescing Operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10; // For this nullish coalescing operator:- null and undefined are only falsy values, 0 and ''
// console.log(guestCorrect);                       // are truthy values


// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---- AND ----');
// console.log(0 && 'Jonas'); //output : 0 because it find the falsy value and returns it
// console.log(7 && 'Jonas'); //output: 'Jonas' because it cannot falsy value until end and return truth value of last

// console.log('Hello' && 23 && null && 'jonas');

// Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');// This works same as if statement because
// it first checks both are truthy values and return last existing truthy value in which we passed the parameters.


///////////////////////////////////////
// Logical Assignment Operators
// const rest1 = {
//   name: 'Capri',
  // numGuests: 20,
  // numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;  // more efficient method for working with OR operator, works same as above two
// rest2.numGuests ||= 10; 

// nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10; // more efficient method for working with nullish coelescing operator
// rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);


///////////////////////////////////////

///////////////////////////////////////
// Rest Pattern and Parameters
// 1) Destructuring

// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// REST work opposite to the SPREAD operator, as it compresses elements into an array
// In above example,...others stores the rest elements into an array that's why it's called REST operator !
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions
// const add = function (...numbers) { //Since we used REST,now we can pass unlimited parameters as it compresses all into an array
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x); //What happened here? ...x actually spreads the array elements and the add function(...numbers),compresses it into an array!

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');


// Now we will learn about the spread Operator(...objectName)
// ...objectName : this operator actually lists the methods of objects

// for eg,if we want to spread a method of our restaurent object then we can do it like this:


// const newMenu = [...restaurant.categories]
// console.log(newMenu);//You can see that it listed all the content in listed format
// You remember about using square brackets with ...objectName to get what you need!

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// console.log(`${...str} Schmedtmann`); // This won't work because ...str is an array and schmedtmann is string
// Remember that spread operator is used to build new array and pass arrays into a function


// Real-world example
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('Ingredient 3'), // prompt takes in or saves the typed values inside the box
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients); // You can see both of these methods does the same thing, so use ... as its
// efficient and new !

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name); // Here you can see that the restaurentcopy has different name than restaurent


// ---------------------------------------------------------------------------------------------------------------------------------------------
// DSA Questions

// Question 1:
// let array = ['1:2','4:3','6:5']
// function points(array){
//   let total = 0
//   for(let i=0;i<array.length;i++){
//     if(array[i][0]>array[i][2]){
//       total = total + Number(array[i][0])
//     }
//   }
//   console.log(total);
// }
// points(array)

// var summation = function (num) {
//   console.log(num*(num+1)/2); //it just gave error after error until i didn't used * operator to multiply! 
// }


// summation(3)

// Question 2:
// const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// var checkStraightLine = function(coordinates) {
//   let c = true;
//   let slope = CalcSlope(coordinates[0],coordinates[1]);
//   for(let i=2;i<coordinates.length;i++){
//     if(slope !== CalcSlope(coordinates[i-1],coordinates[i])){
//       c = false;
//     }
//   }
//   return c;
// };
// var checkStraightLine = function(coordinates) {
//   let slop = calcSlop(coordinates[0], coordinates[1])
//   for(let i = 2; i< coordinates.length; i++){
//       if(slop !== calcSlop(coordinates[i - 1], coordinates[i]))
//           return false;
//   }
//   return true;
// };
// var CalcSlope = function(firstCoordinate,secondCoordinate){
//   if (secondCoordinate[0] - firstCoordinate[0] === 0) {
//     return Infinity;
//   }
//   return (secondCoordinate[1]-firstCoordinate[1])/(secondCoordinate[0]-firstCoordinate[0])
// }
// var calcSlop = function(point1, point2){
//   // slop = (y2 - y1) / (x2 - x1)
//   if (point2[0] - point1[0] === 0) {
//       return Infinity; // Vertical line 🗾
//   }
//   return (point2[1] - point1[1])/(point2[0] - point1[0])
// }
// console.log(checkStraightLine(coordinates))
// for(let i=0;i<coordinates.length;i++){
//   let j=i+1;
//   console.log(coordinates[j][1]-coordinates[i][1]);  
// }


// checkStraightLine(coordinates)

// Question 3:
// const nums = [2,7,11,15];
// const target = 9;
// var twoSum = function(nums, target) {
//   for(let i=0;i<nums.length;i++){
//       for(let j=i+1;j<nums.length;j++){
//           if((nums[i] + nums[j]) === target){
//               console.log(i,j);
//           }
//       }
//   }
// };

// twoSum(nums,target);

// Question 4:
// function greet(name){
//   let a= name.split("");
//       let j=[];
//          a[0]="Hello,"
//          a[1]=name
//          a[2]="how are you doing today?"
//          j.push(a[0],a[1],a[2])
//          console.log(j.join(" "));
// }
// greet('dt'); // This is a stupid way, i used `${}` method but i liked this method also!

// Question 5:
// on implication logical operator

// function setAlarm(employed, vacation){
//   return employed && !vacation;
// }

// Question 6:                    it was on passing some random name like Dhruv Trivedi and outputing D.T
// My solution
// function abbrevName(name){
//   name = name.toUpperCase()
// const splitName = name.split(' ')
// const firstName = splitName[0]
// const secondName = splitName[1]
// console.log(`${firstName.split('')[0]}.${secondName.split('')[0]}`);
// }

// abbrevName("Sam Harris");

// Cool solution
// function abbrevName(name){

//   var nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }

// Question 7:                    turn a number into a string

// function numberToString(num) {
//   return num.toString()  // num.toString(2) will return the number in binary!
// }

// Question 8:            write a non-negative number in its largest, by rearring the positions of the digits

// function descendingOrder(n){

  // const digits = n.split(' ')  // it didn't work because split() function works only on strings Dammit
  // console.log(digits);

  // console.log(n.toString().split('')); // it works now

  // const digits = n.toString().split('')
  // if(digits[0]<digits[1]){
  //   console.log('It can compare numbers even if they are already been converted into String format!');
  // }

//   let descendingOrderedList = [];
//   const digits = n.toString().split('')
//   if(digits.length<=1){
//     return Number(digits)
//   }
//   else{
//   while(digits.length>0){
//     console.log(digits);
//     let maximumNumber = maxNum(digits)
//     descendingOrderedList.push(maximumNumber)
//     let index = digits.indexOf(maximumNumber);
//     digits.splice(index, 1);
//   }
//   console.log((descendingOrderedList).join('')); 
// }
// }

// function maxNum(digits){
//   let max = digits[0];
//   for(let i=0;i<digits.length;i++){
//     if(digits[i]>max){
//       max = digits[i];
//     }
//   }
//   return max;
// }

// descendingOrder(893)

