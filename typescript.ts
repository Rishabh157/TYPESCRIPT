// 1. primitive type
// Basic type includes in javascript such as string , number , and boolean
let msg: string = "Good morning";
console.log(msg);

// 2. Array
// Arrays represents a simple collection of element of the same type
let number: number[] = [1, 4, 65, 7, 8];
console.log(number);

// 3. Tuple
// Represent an array with a fixed numbers of elements where each element
// may be of a diffrent type
let age: [string, number, boolean] = ["234", 12, false];
console.log(age);

// 4. Object
// Represent a collection of properties each with a name and a type
let user: { name: string; age: number } = {
  name: "Christopher nolan",
  age: 49,
};

// 5. Union Type
// Allowing to be the variable to be one of several types
let id: string | number;
id = "2423";
id = 2423;
console.log(id);

// 6. Intersection type
// Combine multiple type into one
type Employee = {
  name: string;
  age: number;
};

type Manager = Employee & {
  department: string;
};

let employee: Manager = {
  name: "Bob",
  age: 22,
  department: "JS Developer",
};

console.log(employee);

// 7. Type Aliases
// Creates a new name for a type

type StringOrNumber = number | string;

let value: StringOrNumber;
(value = "Bob"), (value = 23);
console.log(value);

// 8. Interfaces
// Describes the shape of an object can be extended or implemented by classes.

interface Car {
  name: string;
  model: string;
  selfDriving: boolean;
  year: number;
}

let myCar: Car = {
  name: "Tesla",
  model: "Model 3",
  selfDriving: true,
  year: 2007,
};

console.log(myCar);

// 9. Type Assertions
// Overides typescript inferred type with specific type

let someValue: unknown = "This is unknown type";

let strlength: number = (someValue as string).length;
console.log(strlength);

// 10. Literal type
// Represent exact values rather than broad type

type Directions = "up" | "down" | "right" | "left";

let move: Directions;
(move = "up"), (move = "left");
move = "right";
move = "down";
console.log(move);

// 11. Nullable type
// Includes null and undefind types to handle potentially absent values

let canBeNull: number | null = null;
canBeNull = 443;

console.log(canBeNull);

// 12. Functional type
// Describes the type of functions, including their parameters and return type

let add: (x: number, b: number) => number;
add = (a, b) => a + b;

console.log(add(10, 20));

// 13. Type inference
// Typescript automatically infers the type of a variable based on its value

let iString = "Hello , Typescript";
let iNumber = 123;
console.log(iString);
console.log(iNumber);

// 14. Any type
// A type that disables type checking and allowing any type of value

let something: any = "hello";
something = 234;
console.log(something);

// 15. Void type
// Represent the absence of any type usually used for function that do not return a value

function warnUser(): void {
  console.log("This is a warning message");
}

// 16. null and undefind type
// Represent the absence of value

let u: undefined = undefined;
let n: null = null;
console.log(u);
console.log(n);
