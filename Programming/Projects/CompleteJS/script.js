let password;
while (password !== "!--pq--!" || password == undefined) {
    password = window.prompt("Enter your password");
}

const helloKarneWalaFunc = (name) => {console.log(`hello ${name}`)
                                      console.log("Welcome to your JS ref console");};
helloKarneWalaFunc("Yash")

//this keyword dosent work with =>

function aboutMe(fristName, lastName, age) {
    this.fristName = fristName,
    this.lastName = lastName,
    this.age = Math.floor(new Date().getFullYear() - age)
    this.greetings = function() {console.log(`Hi, my name is ${this.fristName + " " + this.lastName}. My Age is ${this.age}.`)}
}

const aboutMyself = new aboutMe("Yash", "Naudiyal", 2012.8387);

aboutMyself.greetings()

//hello world

console.log('hello world');

//\\baasic

// variables are used to store data

//var's data could be changed with ease

var a = 100;
var a;
a = 100;

//let's value is only chagable by promt block etc

let c = "Yash";

//const's value cannot be changed

const AUTHOR = "Yash";

console.log(`No. is: ${a}`);

console.log(typeof a);

// window.alert('alert');

//string is letters characters or numbers inside '' "" or ``

let b = "Yashoo";
console.log(b);
console.log(typeof b);

//boolean is either true or false

let booleantrue = true;
let booleanfalse = false;

console.log('type of booleantrue is', typeof booleantrue, +'and value is', + booleantrue);
console.log('type of booleanfalse is', typeof booleanfalse, +'and value is', +  booleanfalse);
console.log('1 is true and 0 is false');
/*
let na = prompt('enter your name');
let age = prompt('enter your age');
let isstu = confirm('Are you student?');
let deg = confirm('Do you have degrees?');

document.getElementById('name').textContent = `Your name is ${na}`
document.getElementById('age').textContent = `Your age is ${age}`
document.getElementById('is_student').textContent = `You are student - ${isstu}`
document.getElementById('degrees').textContent = `You have degree - ${deg}`
*/
// Arithmetic Operater

console.log("3+3", + 3 + 3);//+ - plus
console.log("3-3", + 3 - 3);//- - minus
console.log("3*3", + 3 * 3);//* - multiplication
console.log("3/3", + 3 / 3);/// - divide
console.log("3**3" + 3 ** 3);//** - exponent
console.log("3%3", + 3 % 3);//% - modules (tells remainder)
a++
console.log(a);
a--
console.log(a);

//Adding = A me se blah 1
//for example

console.log(a += 1)

//User input

// let naam;
// document.getElementById("submit").onclick = function nam() {
//     naam = document.getElementById("name").value;
//     document.getElementById("NAAME").textContent = `Hello ${naam}`;
// }

//Conversion

let xxx = "";
let yyy = "";
let zzz = "";

xxx = Number(xxx);
yyy = String(yyy);
zzz = Boolean(zzz);//Also A way to know is user have filled the input tag

console.log(xxx, typeof xxx);
console.log(yyy, typeof yyy);
console.log(zzz, typeof zzz);

//Maths

console.log(Math.PI);
console.log(Math.E);

let wwww = 3.14;
let xxxx = 2;
let yyyy = 3;

console.log(Math.round(wwww));

console.log(Math.floor(xxxx));//always round down low
console.log(Math.ceil(wwww));//(ceiling)always round up low

console.log(Math.trunc(wwww));//remove.>
console.log(Math.pow(wwww, xxxx));//power
console.log(Math.sqrt(wwww));
console.log(Math.abs(-23423));
console.log(Math.sign(1123));
console.log(Math.sign(0));
console.log(Math.sign(-1123));

console.log("");

console.log(Math.max(wwww, xxxx, yyyy));
console.log(Math.min(wwww, xxxx, yyyy));

//idk

console.log("");

console.log(Math.log(xxxx));
console.log(Math.sin(xxxx));
console.log(Math.cos(xxxx));
console.log(Math.tan(xxxx));

//ternary operator

let cash = 189;
let cashkya = cash >= 100 ? `Discount = 10%off which will be ${cash - cash / 10}` : "Discount = 0%off";
console.log(cashkya)

//switch

let day = 5;

switch (day) {
    case 1:
        console.log("today is Monday");
        break;
    case 2:
        console.log("today is Tuesday");
        break;
    case 3:
        console.log("today is Wednesday");
        break;
    case 4:
        console.log("today is Thursday");
        break;
    case 5:
        console.log("today is Friday");
        break;
    case 6:
        console.log("today is Saturday");
        break;
    case 7:
        console.log("today is Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

//string methods

let string = " pewdiepie suck  ";

console.log(string.charAt(0));
console.log(string.charAt(1));
console.log(string.charAt(2));
console.log(string.indexOf("e"));
console.log(string.lastIndexOf("e"));
console.log(string.length);
console.log(string.trim());
console.log(string.toLocaleUpperCase());
console.log(string.toLocaleLowerCase());
console.log(string.repeat(5));
console.log(string.startsWith(" "));
console.log(string.endsWith("A"));
console.log(string.includes("z"));
console.log(string.replace("e", "z"));
console.log(string.padStart(20, "0"));
console.log(string.padEnd(20, 0));

//slicing

console.log(string.slice(1, 10));
console.log(string.slice(11, 16));
console.log(string.slice(11));
console.log(string.slice(-1));
console.log(string.slice(1, string.indexOf(" ")));
console.log(string.slice(string.indexOf(" ") + 1));

//loops

//do this first than check

/*
function blah() {
    let password1234 = "";
    do {
        password1234 = window.prompt("Enter your password");
    } while (password1234 != "1234" || password1234 == undefined)
}
*/

for (let index = 1; index <= 20; index++) {
    if (index == 13) {
        break;
    } else {
        console.log(index)
    }
}

console.log("");


for (let index2 = 20; index2 >= 0; index2--) {
    if (index2 == 13) {
        continue;
    } else {
        console.log(index2)
    }
}

//function

function isEven(_number) {
    return _number % 2 === 0 ? true : false;
}

console.log(isEven(-129+133));

console.log("");

function isEmail(_isEmail) {
    if (_isEmail.includes("@") && _isEmail.includes(".")) {
        console.log(_isEmail.slice(_isEmail.indexOf("@") + 1));
    } else {
        return undefined;
    }
    return _isEmail.includes("@")? true : false;
}

console.log(isEmail('yashnaudiyal@.'));

//Array

let car_Brands = ["Datsun", "Toyota", "Nissan", "Honda", "Lexus"];
console.log(car_Brands);

car_Brands.pop();
car_Brands.push("Suzuki");
car_Brands.unshift("");
car_Brands.shift();

console.log(car_Brands[0]);
console.log(car_Brands[1]);
console.log(car_Brands[2]);
console.log(car_Brands[3]);
console.log(car_Brands[4]);

console.log(car_Brands.indexOf("Nissan"));//if index = -1, item not found
console.log(car_Brands.length);

for (let index = 0; index < car_Brands.length; index++) {
    console.log(car_Brands[index]);
}

for (let index = car_Brands.length - 1; index >= 0; index--) {
    console.log(car_Brands[index]);
}

car_Brands.sort().reverse();

for (let car_Brand of car_Brands) {
    console.log(car_Brand);
}

//thudDi Array

let tictackaho = [[1,2,3],
                  [4,5,6],
                  [7,8,9]];

tictackaho[0][0] = "X";
tictackaho[0][1] = "0";
tictackaho[0][2] = "X";
tictackaho[1][0] = "0";
tictackaho[1][1] = "X";
tictackaho[1][2] = "0";
tictackaho[2][0] = "X";
tictackaho[2][1] = "0";
tictackaho[2][2] = "X";

for (let _row of tictackaho) {
    const rowstring = _row.join(' ');
    console.log(rowstring);
}

//spread && rest

let username = "MrBeast";
console.log([...username].join('-'));

let fruits= ["Mango", "Watermelon", "tomato"];
let veggies = ["Potato", "Coliflower", "Carrots"];

let food = [...fruits, ...veggies, "Leg piece", "milk"];
console.log(food);

function addString(...strings) {
    return strings.join(" ");
}

console.log(addString("Random", "words"));

//call

function greetings(callback) {
    console.log("Hello");
    callback()
} function howAreYou() {
    console.log("How are you");
}

greetings(howAreYou)

//foreach will return different items
//map will return array

// Using forEach()

const numbers = [1, 2, 3, 4];
numbers.forEach((num, index) => {
    console.log(`Element at index ${index}: ${num}`);
    // Perform some action, but no new array is created
});

// Using map()
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4] (original array remains unchanged)

//filter will filter out on callback condition 0/1

const numbramessi = [1,2,3,4,5,6,7,8,9,0];

console.log(numbramessi.filter(isEven));

//reduce
function sum(first, second) {
    return first + second;
}

console.log(`$${numbramessi.reduce(function(first, second) {
    return first + second;
}).toFixed(2)}`);

//function expression

const Print = function(text) {
    console.log(text)
}

Print("hello world")

//Object