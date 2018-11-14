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
console.log(jane[lastName]);


// console.log(calcAge());
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn);
console.log(ageMike);
console.log(ageJane);

function untilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' will retire in ' + `${retirement} years`);
}

untilRetirement(1990, 'John');


// function declaration
function whatDoYouDo(job, firstName){
    ;
}

// function expression: always return a value
var whatDoYouDo = function(job, firstName) {
    ;
}

//Ways to create array
var names = ['john', 'mark', 'jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

// mutate array data
names[1] = 'Ben';
names[5] = 'mary';
console.log(names);
console.log(names.length);

// array could have different data types
var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue'); //append element at the end of array
john.unshift('Mr. '); // insert element at the first of array 
john.pop(); // remove the last element in array
john.shift(); // remove the first element in array
john.indexOf(1990); // return parameter position in the array, if parameter does not exist, return -1;

var bills = [124, 48, 268];
// map() method creates a new array that store the results of calling a provided
// function applied to every element in the calling array.
var tips = bills.map( e => {
    if(e < 50) {
        return e * 0.2;
    } else if(50 <= e && e <= 200) {
        return e * 0.15;
    } else {
        return e * 0.1;
    }
});

var amounts = bills.map( e => {
    if(e < 50) {
        return e * 0.2 + e;
    } else if(50 <= e && e <= 200) {
        return e * 0.15 + e;
    } else {
        return e * 0.1 + e;
    }
});

console.log(bills);
console.log(tips);
console.log(amounts);


//注意对象里面的property中间是:号
var Smith = {
    firstName: 'John',
    lastName:  'Smith',
    birthYear: 1990,
    family: ['Jane', "Mark", "Bob", "Emily"],
    job: 'teacher',
    isMarried: false,
    // calcAge: function() {
    //     return 2018 - this.birthYear;
    // }
    calcAge: function() {
        this.age =  2018 - this.birthYear;
    }
}

console.log(Smith.calcAge());

var Mark = {
    fullName: 'Mark',
    height: 1.78,
    mass: 60,
    calcBMT: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

var John = {
    fullName: 'John',
    height: 1.82,
    mass: 55,
    calcBMT: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

console.log(John.calcBMT());
console.log(Mark.calcBMT());

if(john.BMI === Mark.BMI) {
    console.log('draw');
} else if(john.BMI > Mark.BMI) {
    console.log('john');
} else {
    console.log('mark');
}

/**
 * Loops and itearation
 */

// basic for loops
 for(var i = 0; i < 10; i++) {
     console.log(i);
 }
 // while loops
 var bob = ['Bpb', 'Smith', 1992, 'designer', false];
 var i = 0;
 while(i < bob.length) {
     console.log(bob[i++]);
 }
// continue and break statements
for(var i = 0; i < bob.length; i++) {
    if(typeof(bob[i]) !== 'string') { //注意这里的'string'是指的string类型，而不是内容为‘string’的字符串
        continue;
    }
    console.log(bob[i]);
}
for(var i = 0; i < bob.length; i++) {
    if(typeof(bob[i]) !== 'string') {
        break;
    }
    console.log(bob[i]);
}

var johnBills = [124, 48, 268, 180, 42];
var johnTips = johnBills.map(e => {
    if(e < 50) {
        return e * 0.2;
    } else if(50 <= e && e <= 200) {
        return e * 0.15;
    } else {
        return e * 0.1;
    }
});
var johnPaids = johnBills.map(e => {
    if(e < 50) {
        return e * 0.2 + e;
    } else if(50 <= e && e <= 200) {
        return e * 0.15 + e;
    } else {
        return e * 0.1 + e;
    }
});

var markBills = [77, 475, 110, 45];
var markTips = markBills.map(e => {
    if(e < 100) {
        return e * 0.2;
    } else if(100 <= e && e <= 300) {
        return e * 0.1;
    } else {
        return e * 0.25;
    }
});
var markPaids = markBills.map(e => {
    if(e < 100) {
        return e * 0.2 + e;
    } else if(100 <= e && e <= 300) {
        return e * 0.1 + e;
    } else {
        return e * 0.25 + e;
    }
});

function average(paids) {
    let sum = 0;
    for(var i = 0; i < paids.length; i++) {
        sum += paids[i];
    }
    return sum / paids.length;
}

console.log(johnTips);
console.log(johnPaids);
console.log(markTips);
console.log(markPaids);

console.log(average(johnTips), average(markTips));

if(average(johnPaids) > average(markPaids)) {
    console.log('john Paid higher!!!');
} else if(average(johnPaids) === average(markPaids)) {
    console.log('draw!!!');
} else {
    console.log('mark Paid higher!!!');
}




var tips = finalValues = [1, 2, 3];    //此时两个array指向用一个内存，即两个变量引用同一个内存地址！！！
tips[1] = 20;
console.log(tips);
console.log(finalValues);
