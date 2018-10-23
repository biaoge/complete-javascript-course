///////////////////////////////////////
// Lecture: Hoisting

//function hoisting
calcAge(1987);

// function declaration的hoisting，在execution phase之前，function已经被存在VO里了，所以这里可以work
function calcAge(year) {
    console.log(2018 - year);
}

// retirement(1990);
// 注意hoisting对function expression不起作用！！！
var retirement = function(year) {
    console.log(65 - (2018 - year));
}

// retirement(1990);

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);


var a = 'Hello ';
first();

function first() {  //first的execution context
    var b = 'Hi';
    second();   //因为hoisting，second可以在这里被call。 

    function second() {
        var c = 'Hey';
        third();    //lexical scope, second可以access third function
    }
}

function third() {
    var d = 'John';
    //console.log(c);    //此时在third context，这里无法access到c
    console.log(a + d); // a在third function的scope里
}












///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
// console.log(this);

calcAge(1985); // this is a regualr function call

function calcAge(year) {
    console.log(2016 - year);
    console.log(this);
}


var john = {
    name: 'John',
    yearOfBirth: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();    // a regular function call again!!!
    }
}

john.calcAge(); //this is a method call


var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calcAge = john.calcAge;
mike.calcAge();






