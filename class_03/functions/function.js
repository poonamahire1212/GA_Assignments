//functions
// Driving Age

/*function canDrive(name, age){
    if(age < 16){
        console.log(`Sorry, ${name} can't drive yet! you still have ${16 - age} years before you can drive`);
    }else{
        console.log("Drive away!");
    }
}
let user = prompt("Enter your name", "user");
let age = prompt("Enter your age", "");
canDrive(user, age);

//Word translator
const language = {
    eng:"Hi!",
    frn:"Bonjour!",
    norw:"Hallo!",
    turk:"Merhaba!",
    India:"Namaste!"
}
function translator(value){
    console.log(`${language.value}`);
}
const lang = prompt("Enter prefered language"," ");
translator(lang);

//Age calculator

function calculateAge(value){
    const currentYear = new Date().getFullYear();
    const age = currentYear - value ;
    console.log(`you are either ${age} or ${age - 1} .`);
    //const str =  "you are either " + age - 1 + " or" + age + ".";
    //return str;
}
calculateAge(1990);
calculateAge(1985);
calculateAge(2020);

//The Lifetime Supply Calculator
const maxAge = 60;

function calculateSupply(age, amountPerDay){
    let amtConsumedRestOfTheLife = (maxAge - age) * amountPerDay * 360;
    amtConsumedRestOfTheLife = Math.round(amtConsumedRestOfTheLife);
    console.log(`You will need ${amtConsumedRestOfTheLife} gram to last you until the ripe old age of 60.`)
}
calculateSupply(34, 50.60);
calculateSupply(50, 70.09);
calculateSupply(17,100);

//The Geometrizer
const PI = 3.14;
function calcCircumfernce(radius){
    let circumfernce = 2 * PI * radius;
    console.log(`The circumfernce is ${circumfernce}.`);
}
function calcArea(radius){
    let area = PI * radius * radius;
    console.log(`The area is ${area}`);
}
calcCircumfernce(2.5);
calcArea(2.5);

//The Temperature Converter
function celsiusToFahrenheit(celsius){
let fahrenheitTemp = (celsius * 1.8) + 32;
console.log(`${celsius} degree celcius is ${fahrenheitTemp} degree fahrenheit.`);
}
function fahrenheitToCelsius(fahrenheit){
    let celsius = (fahrenheit - 32)*(5 / 9);
    console.log(`${fahrenheit} degree fahrenheit is ${celsius} degree celsius.`);
}
celsiusToFahrenheit(54);
fahrenheitToCelsius(354);*/

//Working with Users

const users = [
    {
      email: "groucho@ga.co",
      password: "chicken",
      isAdmin: true
    },
    {
      email: "harpo@ga.co",
      password: "elephant",
      isAdmin: false
    },
    {
      email: "gummo@ga.co",
      password: "pinkFairyArmadillo",
      isAdmin: true
    },
    {
      email: "zeppo@ga.co",
      password: "dumboOctopus",
      isAdmin: false
    }
  ];
  function checkUserLogin(email, password, index){
      if(users[index].email === email && users[index].password === password){
          console.log("You are logged in.");
    }else{
        console.log("Sorry, something went wrong.");
    }
  }
  const email = prompt("Enter you email","abc@ga.co");
  const password = prompt("Enter your password"," ");
  checkUserLogin(email, password, 2);

  //find the user on the base of email 
  function findUser(email){

      const found = users.some(element => element.email === email);
      if(found){
          console.log("Valid user");
      }else{
          console.log("Invalid user"); 
      }
    }
    findUser("gummo@ga.co");

    //function for creating an account and another user in existing array of users

    function createAccount(email, password, value){
        let newArray = users.push({"email":email,"password": password,"isAdmin":value});
        console.log(newArray);
        console.log(users);
    }
    createAccount("abc@ga.co","thisOneGood", true);

    //function for deleting an object from array
    //remove element fron array with splice method and it will return removed element as a new array

    function deleteAccount(email, password, value){
        const wantIndex = (element) => element.email === email && element.password === password && element.isAdmin === value;
        let deleteArray = users.splice(users.findIndex(wantIndex),1);
        console.log(deleteArray);
        console.log(users);
    }
    deleteAccount("abc@ga.co","thisOneGood", true);

    //update object in the array

    function updateAccount(email, password, obj){
        const updateArray = users.map(element =>{
            if(element.email === email && element.password === password){
                element.password = obj.password;
                element.isAdmin = obj.isAdmin;
            }
            return element;
        });
        console.log(updateArray);

    }
    updateAccount("harpo@ga.co", "elephant", { password: "gharial", isAdmin: true });

//Transit Application

const stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];
function travelForm(startStation, endStation){
    // check if given station is in the array or not then go forword
    if(stations.includes(startStation) && stations.includes(endStation)){
    
        if(stations.indexOf(startStation)< stations.indexOf(endStation)){
            const newArray = stations.slice(stations.indexOf(startStation), stations.indexOf(endStation)+1);
            console.log(`To go from '${startStation}' to '${endStation}' - you'll need to go through ${newArray.length-2} stops`);
            newArray.forEach(element => console.log("-",element));

        }
    //for reverse journey
        else if(stations.indexOf(startStation) > stations.indexOf(endStation)){
            let newReverseArray = stations.slice(stations.indexOf(endStation), stations.indexOf(startStation)+1);
            newReverseArray = newReverseArray.reverse();
            console.log(`To go from '${newReverseArray[0]}' to '${newReverseArray[newReverseArray.length - 1]}' - you'll need to go through ${newReverseArray.length-2} stops`);
            newReverseArray.forEach(element => console.log("-",element));
            
        }else{
            console.log('Error Error Error!');
        }
    }else{
        console.log("Sorry, Station you entered does not exist!");
    }
}
travelForm("Circular Quay", "Central");
travelForm("Townhall", "Museum");
travelForm("Townhall", "Milund");

//Bonus: A (more complicated) Transit Application



