var johnScore1 = 89, johnScore2 = 120, johnScore3 = 103;
var mikeScore1 = 116, mikeScore2 = 94, mikeScore3 = 123;

var johnAverage = (johnScore1 + johnScore2 + johnScore3) / 3;
var mikeAverage = (mikeScore1 + mikeScore2 + mikeScore3) / 3;

var johnHigher = johnAverage > mikeAverage;
console.log(johnAverage, mikeAverage);
console.log('Is john\'s team average score higher? ' + johnHigher);