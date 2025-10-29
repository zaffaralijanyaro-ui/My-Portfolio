// 1. Normal Functions vs Arrow Functions

export function DoSomething() {
    console.log('This is a normal function.');
}

const DoSomething2 = () => {
    console.log('This is an arrow function.');
}

export default DoSomething2;

// Advantage of Arrow Function over Normal Function
// 1. concise syntax
// 2. Time saves

<button onClick={()=>{console.log()}}>Click Me!</button>

// 2. Conditional Formatting / Operators

// traditional if-else statement
const age = 18;
const name = "Muhammad Ali";

if (age > 10) {
    name = "Muhammad Ali";
} else {
    name = "Zaffar";
}

// Ternary Operator
name = age > 10 ? "Muhammad Ali" : "Zaffar";

// Implementation in React
const homePage = () => {
  return (
    age > 10 ? <div>Layout 1</div> : <div>Layout 2</div>
  )
}

// Objects
const person = {
  age: 25,
  name: "Muhammad Ali",
  isStudent: true,
}

// Spread Operator to copy data from one object to another
const person2 = {...person, age: 22}

// Object Destructuring
const weatherData = {
    temperature: 30,
    cityName: "Jamshoro",
    condition: "Sunny",
}

const {
    myTemperature,
    myCityName,
    myCityCondition
} = weatherData;

//Functions to be used in React
// 1. Map() vs for loop

const names=["ali", "Zafar", "Ahmed", "Ali", "Ali"];
names.map((name)=>{console.log(name)});

//Implementation in React

const Component2= ()=> {
    return names.map((name)=>{ <h1>{name}</h1>})
}

// for loop

for(let i=0; i<name.length; i++){
    console.log(name[i]);}

// 2. Filter Method.
names.filter((name)=>{ return name !=="ali"})
