let fruits = ["apple", "banana","cherry"];


fruits.push("mango");
fruits.forEach(fruit => console.log(fruit));

fruits.pop();
fruits.forEach(fruit => console.log(fruit));

fruits.shift();
fruits.forEach(fruit => console.log(fruit));

fruits.unshift("grape"); 
fruits.forEach(fruit => console.log(fruit));

let numbers = [1,2,3,4,5];
let squared = numbers.map(num => num*num);
squared.forEach(sno => console.log(sno));