const ANT = "ye, i see, dang.. a monster...";
var helloButton = document.getElementById("hello");
var ageButton = document.getElementById("age");
var dangButton = document.getElementById("dang");
var ageh = document.getElementById("ageh");
var spam = document.getElementById("spam");
var legal = document.getElementById("legal");

const obj = {
    name: "Gorilla", // key - name, value = "Gorilla"
    age: 13          // key = age, value = 13
}; // Object with properties
// To delete a property do,
// delete obj.age; //Now the property is deleted.

const array = [1,2,3,4,5];
const array2 = [1,2,null,4,'five'];
const array3 = ['hello','world','array'];
const array4 = [
    [1,2,3],
    [4,5,6]
];

function startTime() {
    document.getElementById('date').innerHTML = 
       "Date and time: " + new Date 
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}; // add zero in front of numbers < 10
    return i;
}
function checkAnswer() {
    var radios = document.getElementsByName('choice');
    var val = "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            val = radios[i].value;
            break;
        }
    }

    if (val == "") {
        alert('Please select an answer');
    } else if (val == "allThree") {
        alert('Aww yeah, that\'s right');
    } else {
        alert('Incorrect, cmon man');
    }
};
var funcs = [];

function createfunc(i) {
    return function() {
        var answers = ["number", "string", "boolean", "object", "function"];
        var answer = answers[i-1];
        document.getElementById("q" + i + "b").addEventListener("click", function() {
            if (document.getElementById('q' + i).value.toUpperCase() == answer.toUpperCase()) {
                alert("CORRECT ANSWER, GOOD JOB.");
            } else {
                alert("Try again...");
            }
        });
        document.getElementById("q" + i).addEventListener("keyup", function() {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("q" + i + "b").click();
            }
        });
    };
}

function awYe() {
    return "AWW YEEUH";
}

const aww = awYe;
console.log("aww():" + aww());
function test() {
    console.log("test");
}

//testing now stores test as a funciton.
const testing = test;
testing();


// Using anonymous functions
const anon = function() {
    return "hello";
}
console.log(anon());

const car = {
    make: "Toyota",
    invoke: function() { return "You called?";
    }
};

// option 2:
/*
 * const car = {
 *     make: "Toyota",
 *     invoke() {
 *          return "You called?";
 *     }
 * }
 */

console.log(car.invoke()); // call Method using object property. Invoke lightning... amazing


for (var i = 1; i < 6; i++) {
    funcs[i] = createfunc(i);
}

for (var j = 1; j < 6; j++) {
    funcs[j]();
}
var h1s = document.getElementsByTagName("h1");
console.log("TAGNAMES: " + document.getElementsByTagName("h1"));
console.log(h1s.length);

let intro = 2; // So the intro area gets skipped.
for (var i = 3; i < h1s.length; i++) {
    if (document.getElementsByTagName("h1")[i].textContent == "Advanced JavaScript") {
        intro++; // Advanced JavaScript heading numbering is skipped.
        continue;
    }
    if (document.getElementsByTagName("h1")[i].textContent == "Research Outside Tutorial") {
        break;
    }
    h1s[i].textContent = i - intro + ". " + document.getElementsByTagName("h1")[i].textContent;
}
console.log(document.getElementsByTagName("h1")[0].textContent);

var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
    document.getElementById('day').innerHTML = "Today is " + day; 
helloButton.addEventListener("click", function() {
    console.log("Hello.. whirld");
});
ageButton.addEventListener("click", function() {
    spam.innerHTML += "<br>" + 22;
});
dangButton.addEventListener("click", function() {
    spam.innerHTML += "<br>" + ANT;
});
legal.addEventListener("click", function() {
    var elements = document.getElementsByClassName("nope");
    for (var i = 0; i < elements.length; i++) {
        elements[i].removeAttribute("hidden");
    }
});
showSolutions.addEventListener("click", function() {
    document.getElementById("solutions").removeAttribute("hidden");
});

console.log(array4);
array4[0] = "hi";
console.log(array4);

// Shows current date.
const currentDate = new Date();
console.log(currentDate);

//create date with time
const date = new Date(2018, 9, 13, 15, 0);
console.log(date);

//Create Map
const roles = new Map();

//assign role to users
//roles.set(t1, 'User1');
//roles.set(t2, 'User2');

//Create set (dublicates are not allowed)
const roles2 = new Set();
roles2.add('User1');

//What is escaping? oh it's just doing \n \' \" so it doesn't get error.
let str = ' HUH, "hello" ';
let str2 = "hi";

//cool backtick trick;
let str3 = `Line 1
Line 2
            using backtick`;
console.log(str3);
let what = 5 * '5';
let aaa = 5 + '5';
console.log(what + " " + aaa);

//for in loop
// only works for object data types
console.log("Object looped by for in loop");
for (let o in obj) {
    console.log(obj[o]);
}

//For of Loop
let a = [1,2,3,4,5]
for (let value in a) {
    console.log(value);
}
for (let value of a) {
    console.log(value);
}

const testingObject = {
    hi: "hello",
    how: "how", 
    are: "are" 
}

for (let object in testingObject) {
    console.log(testingObject[object]);
}

class Human {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
}

class Race extends Human{
    constructor(race) {
        super("Stephen", "Victorine");
        this.race = race;
    }

    display() {
        console.log(this.fname + " " + this.lname);
        console.log(`Your race is ${this.race}`);
    }
}

// Creating an instance of the child class
const stephen = new Race("White/Thai");
stephen.display();
console.log(stephen.fname);

// Prototype Inheritance

let car2 = { 
    Make: "Tesla",
    Model: "Model S",
    display() {
        console.log(`Car Make ${this.Make}, Car Model ${this.Model}.`);
    }
};

let bike = {
    CC: 550,
    __proto__: car2 // Creates __proto__ property of bike
};

let bicycle = {
    Gear: 5,
    __proto__: bike // Same as above
};

// The car object display() method can be accessed by bicycle.
bicycle.display();
console.log(bicycle); // Prototype CHAIN

// specify proto property
bike.__proto__ = car2;
console.log(bike);

// access bike property
console.log(bike.CC);

// You can access car properties using the bike object.
console.log(bike.Make);
console.log(bike.Model);

bike.display();


/* Polymorphism */
// Parent class.
class Employee {
    constructor(name) {
        this.name = name;
        this.age = 22;
    }

    // A method.
    EmployeeName() {
        console.log(`Employee Name ${this.name}`);
    }
}

// Inherit parent class.
class Member extends Employee {
    constructor(name, salary) {
        super(name);
        this.name = name;
        this.salary = salary;
        this.age = 23; // Override age property in parent class.
    }

    // Override EmployeeName() Method of parent class
    // Child class property will override parent class property.
    // If you want to override any property, you need to specify the same name for both properties
    // and you need to inherit the parent class.
    EmployeeName() {
        console.log(`Employee Name ${this.name}, ${this.age}, and Salary ${this.salary}`);
    }
}

// Instance of the child class.
const ron = new Member("Roonie", 150000);
ron.EmployeeName(); // Execute child class method.

// String representation
// I already know this, but good review.
// Object.toString();

console.log(date);
console.log(date.toString());

// The output is the same, but their TYPEOF is different.
console.log(typeof date.toString());
console.log(typeof date);

/* Maps */
// Some methods
// MapObject.size, set(), get().

// Map constructor
const map = new Map();

// Create 3 variables
let keyString = "KeyString",
    keyObj = {},
    keyFunc = function(){};

map.set(keyString, "KeyString Value");
map.set(keyObj, "KeyObj Value");
map.set(keyFunc, "KeyFunc Value");

console.log("Map size = " + map.size);

// Using get() method print map object values
console.log(map.get(keyString));
console.log(map.get(keyObj));
console.log(map.get(keyFunc));

// Setting NaN as a key
map.set(NaN, "Not a number");

console.log(typeof NaN);
console.log(map.get(NaN));

// iterate through keys and values
for (let [key, value] of map) {
    console.log(`Keys = ${key}, Values = ${value}`);
}

// Another way to create map objects
const NewMap = new Map([
    [1, 'One'],
    [2, 'Two'],
    [3, 'Three']
]);

// Iterate using forEach()
NewMap.forEach(function(value, key) {
    console.log(`Map keys = ${key}, Values = ${value} `);
});

/* WeakMap() */
// Garbage collection

// Object
let user = {
    name: "Ron"
};

console.log(user.name);

user = null;

// Now you can't access the name property.
// console.log(user.name); // Javascript puts JUNK data in this property. All behind the scenes.

// Weakmap constructor()
let weakmap = new WeakMap();
let someObject = {},
    someObject2 = {};

// Set weakmap keys and values
weakmap.set(someObject, "Private");
weakmap.set(someObject2, "Private Data");

console.log(weakmap.get(someObject2));

// Why use weakmap?
// Uhh need research. It's something about privacy.


/* Set() */

const fruits = new Set();

fruits.add("apple");
fruits.add("banana");
// Duplicate value rejected
fruits.add("apple");
console.log(fruits);
fruits.add({a: "watermelon", b: "strawberry"});

// To check what is present in the collection, we can use the has() method
console.log(fruits.has("apple"));

// There is also a delete method.
fruits.delete("apple");
console.log(fruits);

// Iterating using forEach()
fruits.forEach(value => {
    console.log(value);
});

// WeakSet vs Weakmap
// Weakset can only contain objects and cannot be iterated

// weakset() constructor
let weakSet = new WeakSet();

let objs = {},
    foo = {};

weakSet.add(objs);
weakSet.add(foo);

weakSet.delete(foo);

// Can check if there is an object inside by using has()
console.log(weakSet);

/*  Exception handling */
try { // Always executes
    hi; // not defined.
    console.log("Try block");
} catch (e) {
    console.log(e.message); // hi is not defined
    console.log(e.name); // ReferenceError
    console.log(e.stack); // hi is not defined at (file and line number)
} finally {  // ALWAYS EXECUTES
    console.log("Finally... we did it");
}

/* Regular Expression */
//Long and short syntax
/*
// Long
let reg = new RegExp("pattern", "flags");

// Short
let reg = /pattern/;
let reg = /pattern/flags;
*/

let earth = "Hello planet Earth";

// Regular expression constructor
// let reg = new RegExp("planet"); // Long syntax
// let reg = /PLANET/; // Results in -1 (Not found)
// let reg = /PLANET/i; // Using flag, now works like usual.
let reg = /planet/; // Short syntax

// Search() method of string object
console.log(earth.search(reg)); // The starting index position of the word.

// What are flags??
// They allow for global and case sensitive searching.

/*
 * 5 types of flags -
 * 1) i
 * 2) g
 * 3) m
 * 4) u
 * 5) p
*/


