/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher',
};

// Function constructor (很像java) 来创建object
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calcAge = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

// new operator使得function constructor中的this不指向global object，而是new新建的object。
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Jane', 1969, 'retired');

john.calcAge();
jane.calcAge();
mark.calcAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/


// Object.create 来创建object
var personProto = {
    calcAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
}

//创建一个继承了personProto的empty object
var john = Object.create(personProto);
//然后往里面填property
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

//直接创建一个有property的object
var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' },
});

//prmitive的variable直接把primitive type的值存在variable中
//a, b分别保存了23的值
var a = 23;
var b = a;
a = 46;
console.log(a, b);

//object的variable是一个引用，只想一个memory，memory保存对象的内容。
//obj1, obj2分别保存了用一个只想object的引用
var obj1 = {
    name: 'john',
    age: 26
}
obj1.age = 30;
var obj2 = obj1;
console.log(obj1, obj2);

// Function
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon',
};

function change(a, b) {
    a = 30;
    b.city = 'SF';
}

change(age, obj);
console.log(age, obj);

/*
var years = [1990, 1965, 1937, 2005, 1998];

// fn作为arrayCalc的参数，就被称作call back函数
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calc(e) {
    return 2016 - e;
}

function isFullAge(e) {
    return e >= 18;
}

function maxHeartRate(e) {
    if(e >= 18 && e <= 81) {
        return Math.round(206.0 - (0.67 * e));
    } else {
        return -1;
    }
}
*/

// var ages = arrayCalc(years, calc);
// var fullAges = arrayCalc(ages, isFullAge);
// var maxRates = arrayCalc(ages, maxHeartRate);
// console.log(ages);
// console.log(fullAges);
// console.log(maxRates);

function interviewQuestion(job) {
    if (job === 'designer') {
        // 这里retur的是匿名函数
        return function(name) {
            console.log(name + ', Cna you please explain what UX design is ?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject are you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', What do you do? ');
        }
    }
}

// 这里有点像函数表达式的用法, 变量指向一个function
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

// 通过变量来调用函数
teacherQuestion('John');
designerQuestion('Jane');

// 直接call interviewQuestion的用法
// 第一个括号先执行，返回一个function，然后用第二个参数执行返回的function
interviewQuestion('teacher')('Mark');

// IIFE create data privacy
// tranditional function
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

// 包了一层括号，会认为这里是函数表达式，然后后面直接执行这个函数表达式，这样里面的score所在的scope就被hide了，外面无法access。
(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

// 带参数的例子
(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5);
})(5);


// Closures

function retirement(retirementAge) {
    var a = ' yeats left until retirement. ';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

// 函数表达式的另外一种执行方式
retirement(66)(1990);


function interviewQuestionClosure(job) {
    /* my implementation
    var designerConst = 'Cna you please explain what UX design is ?';
    var teacherConst = 'What subject are you teach, ';
    var generalConst = 'What do you do? ';

    if (job === 'designer') {
        // 这里retur的是匿名函数
        return function(name) {
            console.log(name + ',' + designerConst);
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(teacherConst + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ',' + generalConst);
        }
    }
    */

    // course implementation
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', Cna you please explain what UX design is ?');
        } else if (job === 'teacher') {
            console.log('What subject are you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', What do you do? ');
        }
    }
}

interviewQuestionClosure('teacher')('John');
console.log('hahaha');

var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Ladies and GentleMan, My name is ' + this.name + 
            ', I am a ' + this.job + ' and I am ' + this.age + '  years old.!');
        } else if(style === 'friendly') {
            console.log('Hey, What\'s up? I am ' + this.name + 
            ', I am a ' + this.job + ' and I am ' + this.age + '  years old.! Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 30,
    job: 'designer',
};

// method borrowing
// Syntax: Function.call(this, [...other paramenters])   这里的[]表示可选
john.presentation.call(emily, 'friendly', 'afternoon')

// Function.apply(this, [[other parameters]])   这里的第二个中括号，表示other parameters为数组的形式

john.presentation('formal', 'morning');

// bind method:  allow set this variable maually, and generate the copy of that function and store somewhere, like variable.
// 用来创建preset function, 'freindly' 被preset了
// create a function based on the other function with some preset parameters -- currying in JS
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

var years = [1990, 1965, 1937, 2005, 1998];

// fn作为arrayCalc的参数，就被称作call back函数
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calc(e) {
    return 2016 - e;
}

function isFullAge(limit, e) {
    return e >= limit;
}

function maxHeartRate(e) {
    if(e >= 18 && e <= 81) {
        return Math.round(206.0 - (0.67 * e));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calc);
// 注意这里不是函数表达式，只是普通的用ages存函数返回值
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));   //用bind创建一个isFullAge的定制函数，供arrayCalc使用
console.log(ages);
console.log(fullJapan);