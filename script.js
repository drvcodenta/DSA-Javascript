'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic-Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function({startIndex,lastIndex}){
//     return [this.categories[startIndex],this.starterMenu[lastIndex]];
//   },
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
  // orderDelievery: function({time,address,
  // mainIndex,starterIndex}) {
  //   console.log(`Order is received at ${time},on ${address}.
  //   Your ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]}`);
  // },
  //If you want, you can set the values equal to time in parameters itself like:
  // orderDelievery: function({time = '20:30',address,
  //   mainIndex = 1,starterIndex = 1}) {
  //     console.log(`Order is received at ${time},on ${address}.
  //     Your ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]}`);
  //   },
  //Rest of the values, it can itself grab from outer restaurent.orderDelievery function !
// };

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



// Now we will learn about the spread Operator(...objectName)
// ...objectName : this operator actually lists the methods of objects

// for eg,if we want to spread a method of our restaurent object then we can do it like this:


// const newMenu = [...restaurant.categories]
// console.log(newMenu);//You can see that it listed all the content in listed format
// You remember about using square brackets with ...objectName to get what you need!




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