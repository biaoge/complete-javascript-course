// Lecture: let and const

// ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);
// // var是function scope的



// // ES6
// const name6 = 'Jane Smith'; // const only for constant value
// let age6 = 23;
// // name6 = 'Jane Miller';
// console.log(name6);
// // const和let是block scope的

// // ES5
// function driverLicense(passed) {
//     if(passed) {
//         var firstName = 'John';
//         var yearOfBirth = 1990;

//     }
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
// }
// // 这里out of function
// // console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');

// driverLicense(true);

// // ES6
// function driverLicense(passed) {

//     let firstName;

//     if(passed) {
//         firstName = 'John';
//         const yearOfBirth = 1990;

//         // console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
//     }

//     // 这里out of block
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
// }

// let i = 23;
// for (let i = 0; i < 5; i++) {
//     console.log(i); // 外面的i这里暂时被里面的i覆盖了
// }
// console.log(i); // 这里是外面的i

// var k = 23;
// for (k = 0; k < 5; k++) {
//     console.log(k);
// }

// console.log(k);

//////////////////////////////////////
// Lecture: Blocks and IIFEs

// {
//     const a = 1;
//     let b = 2;
//     var c = 3;
// }
// // console.log(a + b);
// console.log(c);

// // ES5
// (function() {
//     var a = 1;
//     var b = 2;
// })();

// console.log(a + b);

/////////////////////////////////////
// Lecture: Strings

// ES5
// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth =  1990;

// function calcAge(year) {
//     return 2016 - year;
// }

// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + 
//     '. Today, he is ' + calcAge(yearOfBirth) + ' years old'
// );

// // ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J'));
// console.log(n.endsWith('th'));
// console.log(n.includes('oh'));

// console.log(`${firstName} `.repeat(5));

////////////////////////////
// ES6 arrow function

// ES5 
// const years = [1990, 1965, 1992, 1983];
// let ages = years.map(function(year) {
//     return 2016 - year;
// });

// console.log(ages);

// // ES6
// // 只有一个参数时，=>前可以没有括号， =>后是return的结果
// ages = years.map(year => 2016 - year);
// console.log(ages);

// // 当有多个can数时，需要()把箭头函数的参数括起来
// ages = ages.map((age, index) => `Age element ${index + 1}: ${age}`);
// console.log(ages);

// // 当箭头函数的函数体内不只有return语句时，要加{}把函数体括起来
// ages = years.map((year, index) => {
//     const now = new Date().getFullYear();
//     const age = now - year;
//     return `Age element ${index + 1}: ${age}`
// });
// console.log(ages);

////////////////////////////
// Arrow function 2

// ES5
// var box5 = {
//     color: 'green',
//     positon: 1,
//     clickMe: function() {
//         var self = this;    // 此时还在method call的scope
//         document.querySelector('.green').addEventListener('click', function() {
//             // 现在是regular function call, this指向的是global object，所以this.position会是undefined。
//             // 如果不加this, 在callback函数里不share外面的this，所以压根没有定义position，和color，会报错
//             // var str = 'This is box number ' + this.positon + ' and it is ' + this.color;

//             // 解决方法:
//             var str = 'This is box number ' + self.positon + ' and it is ' + self.color;
//             alert(str);
//         });
//     }
// }
// box5.clickMe();

// ES 6
// const box6 = {
//     color: 'green',
//     positon: 1,
//     clickMe: function() {
//         document.querySelector('.green').addEventListener('click', () => {
//             // ES 6的arrow function没有自己的this，而是会share surrounding this,所以这里的this就是外面的method call的this, 即我们想要的结果
//             var str = 'This is box number ' + this.positon + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }
// box6.clickMe();


// const box66 = {
//     color: 'green',
//     positon: 1,
//     clickMe: () => {
//         // 此时整个method call没有this, share 外面的this，即全局this，所以下面的this.position是undefined
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.positon + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }
// box66.clickMe();

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.myFriends5 = function(friends) {
//     var arr = friends.map(function(el) {
//         // 同理, callback的this与外面的不同，所以这里的this.name在console里显示不出来
//         return this.name + 'is a friend with ' + el;
//     });

//     // 另一种解决方式，通过bind手动设置this，因为在callback的外面，this还是指向object，所以这里用手动用bind来绑定
//     var newArr = friends.map(function(el) {
//         return this.name + 'is a friend with ' + el;
//     }.bind(this));
//     console.log(arr);
//     console.log(newArr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);

// ES 6
// Person.prototype.myFriends6 = function(friends) {
//     let arr = friends.map((el) => {
//         return `${this.name} is a friend with ${el}`;
//     })
//     console.log(arr);
// } 
// new Person('Mike').myFriends6(friends);


// var a = 'Hello ';
// first();

// function first() {
//     var b = 'Hi ';
//     second();

//     function second() {
//         var c = 'Hey! ';
//         console.log(a + b + c);
//     }
// }

///////////////////////////////////
// ES 6 Destructuring

// Desctructuring array
// let john = ['john', 26];

// const [name, age] = john;
// console.log(name);
// console.log(age);

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith',
// };

// const { firstName, lastName } = obj;
// console.log(firstName);
// console.log(lastName);

// // 不直接用key，用key的别名来解构 
// const { firstName: a, lastName: b } = obj;
// console.log(a);
// console.log(b);

// // 解构函数返回值
// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age2, retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);


///////////////////////////
// Lecture: Array

// = 右边返回的是node list，而不是数组，所以要通过Array.prototype.slice.call()将其变为数组
// const boxes = document.querySelectorAll('.box');
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(element => {
//     element.style.backgroundColor = 'dodgerblue';
// });

// // ES6
// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(element => {
//     element.style.backgroundColor = 'dodgerblue';
// });

// for (const cur of boxesArr6) {
//     if(cur.className === 'box blue') {  // cur.className.includes('blue) 也可以
//         continue;
//     }
//     cur.textContent = 'I changed to blue!';
// }

// var ages = [12, 17, 8, 21, 14, 11];
// console.log(ages.findIndex(cur => cur >= 11));
// console.log(ages.find(cur => cur >= 11));

/////////////////////////
// Lecture: Spread

// function addFourAges(a, b, c, d) {
//     return a + b + c + d;
// }

// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);

// // ES5 把数组传给sum1的话，应该借助apply
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);     // 第一个参数是this, 第二个参数是array, 可以把所有相传的参数作为数组元素，放在这个数组中
// console.log(sum2);

// // ES6 
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// const bigFamily = [...familySmith, 'lily', ...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// // spread operator also works on node list
// const all = [h, ...boxes];
// Array.from(all).forEach(cur => cur.style.color = 'purple');

////////////////////////////
// Lecture: Rest Parameters

// function isFullAge5() {
//     // 下面的arguments就是isFullAge5接收的参数
//     // console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);
//     argsArr.forEach(element => {
//         console.log((2016 - element) >= 18);
//     });
// }
// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);


// function isFullAge6(...years) {
//     years.forEach(cur => console.log((2016 - cur) >= 18));
// }

// isFullAge6(1990, 1999, 1965, 2016, 1987);

// function isFullAge5(limit) {
//     // 后面的1就是slice的参数，表示从argumetns的1开始截取数组，从而吧limit保留下来
//     var argsArr = Array.prototype.slice.call(arguments, 1);
//     argsArr.forEach(element => {
//         console.log((2016 - element) >= limit);
//     });
// }
// isFullAge5(1990, 1999, 1965, 2016, 1987);


// function isFullAge6(limit, ...years) {
//     years.forEach(cur => console.log((2016 - cur) >= limit));
// }

// isFullAge6(1990, 1999, 1965, 2016, 1987);

//////////////////////////////////////
// Lecture: Default parameters

// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }
// // 注意，js中允许只传部分参数给函数，函数礽贪可以work，上面的lastName, nationality就变成undefined了
// var john = new SmithPerson('John', 1990);

// ES6允许在function declaration时，设置default parameters
// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }
// // 注意，js中允许只传部分参数给函数，函数礽贪可以work，上面的lastName, nationality就变成undefined了
// var john = new SmithPerson('John', 1990);



////////////////////////////////////
// Lecture: Maps
// const question = new Map();
// question.set('question', 'What is the official name of the latest major JavaScript version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer :D');
// question.set(false, 'Wrong, please try again!');

// question.forEach((value, key) => console.log(`This is ${key}, and it is set to ${value}`));

// // 下面两种方法返回结果相同
// for (elment of question) {
//     console.log(elment);
// }
// for (entry of question.entries()) {
//     console.log(entry);
// }

// for ([key, value] of question) {
//     console.log(`${key}: ${value}`)
// }

///////////////////////////////////
// Functions

// 这里是函数表达式，注意右边是匿名函数
// var Person5 = function(name, birth, job) {
//     this.name = name;
//     this.birth = birth;
//     this.job = job;
// }
// Person5.prototype.calcAge = function() {
//     var age = new Date().getFullYear() - this.birth;
//     console.log(age);
// }
// var john5 = new Person5('John', 1990, 'teacher');

// // ES 6写法
// class Person6 {
//     constructor(name, birth, job) {
//         this.name = name;
//         this.birth = birth;
//         this.job = job;
//     }

//     calcAge() {
//         let age = new Data().getFullYear() - this.birth;
//         console.log(age);
//     }

//     static greeting() {
//         console.log('Hello World');
//     }
// }

// const john6 = new Person6('john', 1990, 'teacher');
// Person6.greeting();

//////////////////////////////////////////
// Class and Subclass
var Person5 = function(name, birth, job) {
    this.name = name;
    this.birth = birth;
    this.job = job;
}
Person5.prototype.calcAge = function() {
    var age = new Date().getFullYear() - this.birth;
    console.log(age);
}

var Athlete5 = function(name, birth, job, games, medals) {
    // 这里的this就是new operator创建的empty object的(context)；
    // 通过吧这个传给Person5，是的Person的function constructor和Athlete的constructor指向同一个object
    Person5.call(this, name, birth, job);
    this.games = games;
    this.medals = medals;
}
// 建立prototype的连接
Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calcAge();
johnAthlete5.wonMedal();

class Person6 {
    constructor(name, birth, job) {
        this.name = name;
        this.birth = birth;
        this.job = job;
    }

    calcAge() {
        let age = new Date().getFullYear() - this.birth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, birth, job, games, medals) {
        super(name, birth, job);
        this.games = games;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

var johnAthlete6 = new Athlete6('John', 1993, 'swimmer', 3, 10);
johnAthlete6.calcAge();
johnAthlete6.wonMedal();