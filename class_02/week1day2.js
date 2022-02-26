//use control + option + n to run this JS file in vs code.
// conditionals 
function numCompare(numOne, numTwo){
    if(numOne > numTwo){
        console.log( `numOne ${numOne} is bigger than numTwo ${numTwo}`);
    } else if(numOne < numTwo){
        console.log(`numOne ${numOne} is smaller than numTwo ${numTwo}`);
    } else{
        console.log(`numOne ${numOne} is equal to numTwo ${numTwo}`);
    }
}
const num1 = prompt("Enter first number", "0");
const num2 = prompt("Enter second number", "0");
const numOne = parseInt(num1);
const numTwo = parseInt(num2);
numCompare(numOne, numTwo);

// Driving Age

function drivingAge(name, age){
    if(age < 16){
        console.log(`Sorry, ${name} can't drive yet! you still have ${16 - age} years before you can drive`);
    }else{
        console.log("Drive into sunset!");
    }
}
let user = prompt("Enter your name", "user");
let age = prompt("Enter your age", "");
drivingAge(user, age);

//Say Hi!

let language = prompt("Tell me your language");
switch(language){
    case 'English':
        console.log("Hi!");
        break;
    case 'French':
        console.log("Bonjour!");
        break;
    case 'Norwegian':
        console.log("Hallo!");
        break;
    case 'Turkish':
        console.log("Merhaba!");
        break;
}

//Southern or Northern Hemisphere?
let latitude = parseFloat(prompt("Enter the value for Latitude",""));
if(latitude < 0){
    console.log("Southern Hemisphere");
}else if(latitude > 0){
    console.log("Northern Hemisphere");
}else{
    console.log("On the equator");
}

//Year in the 19th, 20th or 21st Century?

let year = parseInt(prompt("Enter the year",""));
if(year > 1800 && year < 1901){
    console.log("19th century");
}else if(year > 1900 && year < 2001){
    console.log("20th century");
}else if(year >2000 && year <2101){
    console.log("21st century");
}else{
    console.log("Sorry, it must be another century");
}

//Greet

let hour = 17;
if(hour <= 10){
    console.log("Good Morning");
}else if(hour <=19){
    console.log("Good Day!");
}else{
    console.log("Good Evening");
}


//Loops
// Fizzbuzz program

for(let i = 1; i <= 100; i++ ){
    if(i % 15 === 0){
        console.log(`${i} Fizzbuzz`);
    }
    else if(i % 3 === 0){
        console.log(`${i} Fizz`);
    }
    else if(i % 5 === 0){
        console.log(`${i} buzz`);
    }
}

//  tables of 9

for(let i = 1; i<=10; i++){
    let total = i * 9;
    console.log(`9 * ${i} = ${total}`);
}

// tables from 1 to 12 

for(let i = 1; i<=12; i++){
    for(let j = 1; j<=10; j++){
    console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log("==============");
}

// log every fourth number in the range

for(let i = 8; i<=48; i = i + 4){
    console.log(`${i}`);
}



//Arrays
// working with array
let rainbowColors = []
let addToEnd = rainbowColors.push('orange');
let addToStart = rainbowColors.unshift('red');
let addColorToEnd = rainbowColors.push('yellow');
let addMultipleToEnd = rainbowColors.push('green', 'blue', 'indigo','violet');
console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors);
console.log(rainbowColors[rainbowColors.length - 1]);  //last element in array
console.log(rainbowColors.indexOf('blue'));
const twoColors = rainbowColors.slice(1, 3);//creates copy of an array with start and end index given excluding last element 
console.log(twoColors);


const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(2,2);
nums.splice(4,1);
console.log(nums);

const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
console.log(arrOfArrs[0][0]);//will print first element of first array inside main array
const subArry = (arrOfArrs[arrOfArrs.length - 1]);
console.log(subArry[subArry.length -1]);
//loop through array and print each element
subArry.forEach((element) => console.log(element));

// loop through array print each element with some format
const favFlowers=['Jasmine','Rose','Hibiscus','Lily','Lotus'];
function logArrayElements(element, index, favFlowers) {
    console.log('My #' + (index + 1) + ' choice is ' + element);
  }
favFlowers.forEach(logArrayElements);

