let fName: string;

const sName: string = "khan ";

fName = "saimon";
console.log(fName);

// right

const age: number = 10;

let addFunction: Function = (name: string, age: number): string => {
  return "fhkjdsf";
};

addFunction("hfjsAbdf", 12);
const data = `<h1> this is saimon , </h1>

 <p>${sName} this is title and last name  </p> 
`;

console.log(`${fName} after ${data}`);

function printPlayerName(): void {
  console.log("sakib");
}

printPlayerName();

// assign dubble type

const fNumber: number | string | boolean = 10;

var fruits: Array<string | number>;
fruits = ["Kiwi", "Plums", "Peaches", "Apples", "Lime", "Cherries", 12];

var Digits: Array<number>;
Digits = [23, 34, 100, 124];
/* First method of usual array with
square brackets and second method of
generic arrays for examples fruits
and Digits */

var fruitsN: number | string[] = ["Kiwi", "Plums", "Peaches", "Apples", "Lime", "Cherries"];

var Digits: number[] = [23, 34, 100, 124];

interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "saimon",
  id: 23,
};

interface iPhone {
  name: string;
  ID: number;
  model: number | string;
  price: number;
  discount?: string;
}

const phone: iPhone = {
  name: "apple phoen ",
  ID: 132142344,
  price: 1334.7778,
  model: "1213ADFF",
  discount: "",
};

enum userType {
  id = 1,
  serial,
}
console.log(userType.id);
console.log(userType["serial"]);

enum makeConste {
  LOGIN_USER = "LOGIN_USER",
  LOADING = "LOADING",
  ERROR = "ERROR",
}

console.log(makeConste.ERROR);

// generic

// function firstElement<Type>(a: Type, b: Type) {
//   const result = a + b;

//   return result;
// }
// // s is of type 'string'
// const s = firstElement<number>(10, 20);
// // n is of type 'number'
// const n = firstElement<string>("10", "10");

//making  an arrey ob object

interface Iproducts {
  id: number | string;
  pdName: string;

  price: number;
  discount: number;
  review: string | number;
}

const product3: Iproducts = {
  id: "",
  pdName: "",
  price: 0,
  discount: 0,
  review: "",
};

const product4: Iproducts = {
  id: "",
  pdName: "",
  price: 0,
  discount: 0,
  review: "",
};

const products: Array<Iproducts> = [product3, product3];
const productsNew: Iproducts[] = [];

// declear custom type
type myType = boolean | number;

const value: myType = false;

// function and type

// normal function
function sumOfTwoNumbers2(a: number, b: number): void {
  // we cant not  return from this functuion
}

// arrow function
const sumOfThreeNumber: Function = (number1: number, number2: number): number => {
  return number1 + number2;
};

interface Iservices {
  name: string;
  date: Date;
}

//  [date,setDate]=useState<Iservice>()

//  declear type an like object

type myObject = { name: string; id: number; type: "ADD" } | { type: "REMOVE"; id: number } | { type: "DELETE" };

const objectCheck: myObject = { id: 12, name: "test", type: "ADD" };
const objectCheck2: myObject = { type: "DELETE" };
const object4: myObject = { type: "REMOVE", id: 12 };

// union own type declearation
type target = "success" | "failer";

const response: target = "failer";

// objArr: {
//   id: string;
//   title: string;
// }[];

// in recat project

// Declaring type of props - see "Typing Component Props" for more examples
type AppProps = {
  message: string;
  number: number;
}; /* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component; return type is inferred.

const App = ({ message, number }: AppProps): string | number => "";

type counter = {
  count: string;
  value: number;
};

const myFunc: Function = ({ count, value }: counter) => {


  
};
