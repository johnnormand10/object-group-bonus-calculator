const employees = [
	{
		name: 'Atticus',
		employeeNumber: '2405',
		annualSalary: '47000',
		reviewRating: 3
	},
	{
		name: 'Jem',
		employeeNumber: '62347',
		annualSalary: '63500',
		reviewRating: 4
	},
	{
		name: 'Scout',
		employeeNumber: '6243',
		annualSalary: '74750',
		reviewRating: 5
	},
	{
		name: 'Robert',
		employeeNumber: '26835',
		annualSalary: '66000',
		reviewRating: 1
	},
	{
		name: 'Mayella',
		employeeNumber: '89068',
		annualSalary: '35000',
		reviewRating: 1
	}
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);


//function loopEmployee(array){

//}
//loopEmployee(employees);



function employeeBonus(array){

  for(let i = 0; i < array.length; i++){
    console.log(array[i]);
console.log(employees);

  if(employees[i].reviewRating === 3){
    employees[i].bonus = 4;
  }
  else if(employees[i].reviewRating === 4){
    employees[i].bonus = 6;
  }
  else if(employees[i].reviewRating === 5){
    employees[i].bonus = 10;
  }
  else{
    employees[i].bonus = 0;
  }

if(Number(employees[i].employeeNumber) < 10000){
employees[i].bonus +=5
}
if(Number(employees[i].annualSalary)>65000 && employees[i].bonus>=1){
  employees[i].bonus -=1
}
if(employees[i].bonus>13){
  employees[i].bonus = 13
}
}
}


employeeBonus(employees);

console.log(employees);