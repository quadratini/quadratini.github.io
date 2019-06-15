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
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('date').innerHTML = 
       "Date " + h + ":" + m + ":" + s;
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

// Multiple choice area

