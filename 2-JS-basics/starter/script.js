var johnScore1 = 89, johnScore2 = 120, johnScore3 = 103;
var mikeScore1 = 116, mikeScore2 = 94, mikeScore3 = 123;

var johnAverage = (johnScore1 + johnScore2 + johnScore3) / 3;
var mikeAverage = (mikeScore1 + mikeScore2 + mikeScore3) / 3;

var johnHigher = johnAverage > mikeAverage;
console.log(johnAverage, mikeAverage);
console.log('Is john\'s team average score higher? ' + johnHigher);


var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        return 2018 - this.birthYear;   //this指当前context，即john对象
    }
};

console.log(john);
console.log(john.firstName);
console.log(john['lastName']);  //注意括号里必须是string

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//new object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);


console.log(calcAge());