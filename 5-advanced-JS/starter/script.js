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