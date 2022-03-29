/*
Write code to do the following (sometimes it helps to write each solution in a for loop first):

Use .forEach to print the name of each horse.
Use .map to return an array of the years of birth for each horse.
Use .filter to filter in only the active horses.
Use .reduce to calculate the total number of hours worked by all horses collectively.
Use the appropriate method(s) to select the horses from Australia.
Use the appropriate method(s) to select horses that earn $50 or more per hour.
Use the appropriate method(s) to get a list of the totals earned by each horse.
Use the appropriate method(s) to calculate the total earned by all horses combined.
BONUS:
Use the appropriate method to return horses from youngest to oldest hint: look up "JS sort compare function".
*/
var horses = [
    {
      name: 'maythehorsebewithu',
      active: true,
      country: 'AUS',
      yearOfBirth: 2000,
      hourlyRate: 30,
      numOfHoursWorked: 2000    
    },
    {
      name: 'my wife knows everything',
      active: true,
      country: 'USA',
      yearOfBirth: 2007,
      hourlyRate: 50,
      numOfHoursWorked: 2500    
    },
    {
      name: 'arrrrr',
      active: true,
      country: 'USA',
      yearOfBirth: 2004,
      hourlyRate: 30,
      numOfHoursWorked: 2000        
    },
    {
      name: 'hoof hearted',
      active: false,
      country: 'AUS',
      yearOfBirth: 1981,
      hourlyRate: 88,
      numOfHoursWorked: 900    
    },
    {
      name: 'pony',
      active: false,
      country: 'AUS',
      yearOfBirth: 2003,
      hourlyRate: 12,
      numOfHoursWorked: 9000    
    },
    {
      name: 'sunny boy',
      active: true,
      country: 'AUS',
      yearOfBirth: 2003,   
      hourlyRate: 42,
      numOfHoursWorked: 6450    
    }  
]
//Use .forEach to print the name of each horse.

const horseName = horses.forEach(element=>{
    console.log(`${element.name}`);
})

//Use .map to return an array of the years of birth for each horse.

 const horseYear = horses.map(element=>{
    return element.yearOfBirth;
} )
console.log(horseYear);

//Use .filter to filter in only the active horses.

const activeHorses = horses.filter(horses=>horses.active);
console.log(activeHorses);

//Use .reduce to calculate the total number of hours worked by all horses collectively.

const sumHours = horses.reduce((acc, horse)=>{
    acc = acc + horse.numOfHoursWorked
    return acc;
}, 0);
console.log(sumHours);

//Use the appropriate method(s) to select the horses from Australia.

const horsesFromAus = horses.filter(
  horse=>{
    if(horse.country === 'AUS'){
      return true;
    }
  }
);
console.log(horsesFromAus);

//  OR
const horsesFromAUS = horses.map(horse=> {
  if(horse.country === "AUS") 
  return horse;
});
console.log(horsesFromAUS);

//Use the appropriate method(s) to select horses that earn $50 or more per hour.

const highPaidHorses = horses.filter(horse=>horse.hourlyRate >= 50);
console.log(highPaidHorses);

//Use the appropriate method(s) to get a list of the totals earned by each horse.

const horseToTalEarning = horses.forEach(horse=>{
  console.log( `${horse.name}: $${horse.hourlyRate * horse.numOfHoursWorked}`);
});

//Use the appropriate method(s) to calculate the total earned by all horses combined.
const totalEarning = horses.reduce((acc, horse)=>{
  acc= acc + (horse.hourlyRate * horse.numOfHoursWorked);
  return acc;
}, 0);
console.log(totalEarning);

//Use the appropriate method to return horses from youngest to oldest hint: look up "JS sort compare function".
//will put small number first
const sortByAge = horses.sort(function(a, b){
  if(a.yearOfBirth < b.yearOfBirth){
    return 1;
  }
  if(a.yearOfBirth > b.yearOfBirth){
    return -1;
  }
  return 0;
});
console.log(sortByAge);



