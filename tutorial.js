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
    } else if (val == "both") {
        alert('Aww yeah, that\'s right');
    } else {
        alert('Incorrect, cmon man');
    }
};

var h1s = document.getElementsByTagName("h1");
console.log("TAGNAMES: " + document.getElementsByTagName("h1"));
console.log(h1s.length);
for (var i = 2; i < h1s.length; i++) {
    h1s[i].textContent = i - 1 + ". " + document.getElementsByTagName("h1")[i].textContent;
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
    document.getElementById("nope").removeAttribute("hidden");
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

// Typeof
var funcs = [];

function createfunc(i) {
    return function() {
        var answers = ["number", "string", "boolean", "object", "function"];
        /*
        switch (i) {
            case 1:
                answer = "number";
                break;
            case 2:
                answer = "string";
                break;
            case 3:
                answer = "boolean";
                break;
            case 4:
                answer = "object";
            default:
                answer = "";
        }
        */
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

for (var i = 1; i < 6; i++) {
    funcs[i] = createfunc(i);
}

for (var j = 1; j < 6; j++) {
    funcs[j]();
}
