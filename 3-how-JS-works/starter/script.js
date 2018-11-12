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

var toHex = function(num) {
    if(num == 0) {
        return '0';
    }

    const hexMap = {
        '10': 'a',
        '11': 'b',
        '12': 'c',
        '13': 'd',
        '14': 'e',
        '15': 'f'
    };

    let res = [];
    let isNeg = false;
    if(num < 0) {
        isNeg = true;
        num = - num - 1;    //这一步很巧妙
    }
    while(num > 0) {
        res.push(num % 16);
        num = Math.floor(num / 16);
    }
    if(isNeg) {
        res = res.map(e => {
            e = 15 - e;
            if(e >= 10) {
                console.log(hexMap[e]);
                console.log(hexMap[10]);
                console.log(hexMap['10']);
                return hexMap[e];
            } else {
                return e;
            }
        });
        for(let i = res.length; i < 8; i++) {
            res.push('f');
        }
    } else {
        res = res.map(e => {
            if(e >= 10) {
                return hexMap[e];
            } else {
                return e;
            }
        });
    }

    return res.reverse().join('');    
};

toHex(-3);


// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);
// console.log(jane[lastName]);


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

var lastName = 'l'

console.log(john);
console.log(john.firstName);
console.log(john[lastName]);  //注意括号里必须是string




// Leetcode Algorithm problem.

var compress = function(chars) {
    let slow = 0, fast = 0;
    while(fast < chars.length) {
        if(chars[fast] === chars[slow]) {
            fast++;
        } else {
            if(fast - slow > 1) {
                let num = fast - slow;
                chars.splice(++slow, num - 1);
                while(num > 0) {
                    chars.splice(+slow, 0, (num % 10).toString());
                    num = Math.floor(num / 10);
                }
            }
            slow = fast;
            fast++;
        }
    }
    if(fast - slow > 1) {
        let num = fast - slow;
        chars.splice(++slow, num - 1);
        while(num > 0) {
            chars.splice(slow, 0, (num % 10).toString());
            num = Math.floor(num / 10);
        }
    }
    return chars.length;
};

var findRadius = function(houses, heaters) {
    heaters.sort(function(a, b){return a - b}); //O(mlogm)
    var closetHeaters = [];
    var res = 0;
    for(let i = 0; i < houses.length; i++) {    //O(n)
        let heaterPos = findClosetHeaters(heaters, houses[i]);   //O(logm)
        closetHeaters.push(heaterPos);
    }

    console.log(closetHeaters);

    for(let i = 0; i < closetHeaters.length; i++) {
        res = Math.max(res, Math.abs(houses[i] - closetHeaters[i]));
    }
    return res;
    
    // binary search
    function findClosetHeaters(heaters, house) {
        var left = 0, right = heaters.length - 1;
        while(left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            if(heaters[mid] == house) {
                return heaters[mid];
            } else if(heaters[mid] < house) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        if(left === heaters.length) return heaters[left - 1];
        if(left > 0 && Math.abs(heaters[right] - house) <= Math.abs(heaters[left] - house)) {
            return heaters[right];
        }
        return heaters[left];
    }
    
};

var matrixReshape = function(nums, r, c) {
    var curRow = nums.length;
    var curCol = nums[0].length;
    if (curRow <= r && curCol <= c) {
        return nums;
    }
    
    var res = new Array(r);
    for (let i = 0; i < res.length; i++) {
      res[i] = new Array(c);
    }


    
    for(let i = 0; i < curRow * curCol; i++) {
        let newRow = Math.floor(i / c);
        let newCol = i % c;
        res[newRow][newCol] = nums[Math.floor(i / curCol)][i % curCol];
    }
    
    return res;
};

var maxDistance = function(arrays) {
    var min = Number.MAX_SAFE_INTEGER;
    var max = Number.MIN_SAFE_INTEGER;
    
    var secondMin = Number.MAX_SAFE_INTEGER;
    var secondMax = Number.MIN_SAFE_INTEGER;
    
    var minIdx = 0;
    var maxIdx = 0;
    
    for(let i = 0; i < arrays.length; i++) {
        if(min > arrays[i][0]) {
            secondMin = min;
            min = arrays[i][0];
            minIdx = i;
        } else if(secondMin > arrays[i][0]) {
            secondMin = arrays[i][0];
        }
        
        if(max < arrays[i][arrays[i].length - 1]) {
            secondMax = max;
            max = arrays[i][arrays[i].length - 1];
            maxIdx = i;
        } else if(secondMax < arrays[i][arrays[i].length - 1]) {
            secondMax = arrays[i][arrays[i].length - 1];
        }
    }
    
    if(max === min) {
        return 0;
    }

    if(minIdx !== maxIdx) {
        return max - min;
    }
    
    return max - secondMin > secondMax - min ? max - secondMin : secondMax - min;
};

var shortestCompletingWord = function(licensePlate, words) {
    var map = new Array(26);
    map.fill(0);
    var len = 0;
    for(let i = 0; i < licensePlate.length; i++) {
        let curChar = licensePlate.charAt(i);
        if(isLetter(curChar)) {
           if(map[curChar.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)] == 0) {
                len++;
            }
            map[curChar.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
    }

    var res = '';

    for(let i = 0; i < words.length; i++) {
        let tmpMap = new Array(26);
        let tmpLen = len;
        for(let k = 0; k < 26; k++) {
            tmpMap[k] = map[k];
        }
        for(let j = 0; j < words[i].length; j++) {
            if(tmpMap[words[i].charAt(j).charCodeAt(0) - 'a'.charCodeAt(0)] > 0) {
                tmpMap[words[i].charAt(j).charCodeAt(0) - 'a'.charCodeAt(0)]--;
                if(tmpMap[words[i].charAt(j).charCodeAt(0) - 'a'.charCodeAt(0)] == 0) {
                    tmpLen--;
                }
            }
            if(tmpLen == 0 && (res === '' || res.length > words[i].length))
             {
                res = words[i];
            }
        }
    }

    return res;
    
    function isLetter(c) {
        return c.toLowerCase() != c.toUpperCase();
    }
};