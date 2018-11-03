// function constructor
/*
function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function(){
    console.log(this.question);
    for(let i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}

Question.prototype.checkAnswer = function(ans){
    if (ans === this.correct) {
        console.log('Correct Answer!');
    } else {
        console.log('Wrong!');
    }
}

// new 创建一个empty object， 然后empty object再来callQuestion函数，此时Question函数内部的this就是empty object。
// 最后再把这个obje用q1来引用。和java差不多
var q1 = new Question('Is JS the coolest programming language? ', ['Yes', 'No'], 0);
var q2 = new Question('What is the name of this courses\'s instructor? ', ['John', 'Micheal','Jonas'], 2);
var q3 = new Question('What does best descitbe coding?', ['Bording', 'Hard', 'Fun', 'Tedious'], 2);

var questions = [q1, q2, q3];
var randomNum = Math.floor(Math.random() * questions.length);

questions[randomNum].displayQuestion();

// parseInt: parse String to Integer
var answer = parseInt(prompt('Please select the correct answer.'));

questions[randomNum].checkAnswer(answer);
*/



// IIFE data privacy
/*
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        for(let i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans){
        if (ans === this.correct) {
            console.log('Correct Answer!');
        } else {
            console.log('Wrong!');
        }
    }
    
    var q1 = new Question('Is JS the coolest programming language? ', ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this courses\'s instructor? ', ['John', 'Micheal','Jonas'], 2);
    var q3 = new Question('What does best descitbe coding?', ['Bording', 'Hard', 'Fun', 'Tedious'], 2);
    
    var questions = [q1, q2, q3];
    var randomNum = Math.floor(Math.random() * questions.length);
    
    questions[randomNum].displayQuestion();
    
    // parseInt: parse String to Integer
    var answer = parseInt(prompt('Please select the correct answer.'));
    
    questions[randomNum].checkAnswer(answer);
})();
*/


// expert level:
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        for(let i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans, callback){
        var sc; // 吧cb通过closure得到的data存到sc中
        if (ans === this.correct) {
            console.log('Correct Answer!');
            sc = callback(true);
        } else {
            console.log('Wrong!');
            sc = callback(false);
        }

        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is ' + score);
        console.log('---------------------------------');
    }

    var q1 = new Question('Is JS the coolest programming language? ', ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this courses\'s instructor? ', ['John', 'Micheal','Jonas'], 2);
    var q3 = new Question('What does best descitbe coding?', ['Bording', 'Hard', 'Fun', 'Tedious'], 2);

    var questions = [q1, q2, q3];

    function score() {
        var curScore = 0;
        return function(correct) {
            if(correct) {
                curScore++;
            }
            return curScore;
        }
    }

    // score() 就执行了一次，即curScore被初始化了一次
    var recordScore = score();
    
    function nextQuestion() {
        
        var randomNum = Math.floor(Math.random() * questions.length);
        
        questions[randomNum].displayQuestion();
        // 弹出一个窗口，标题为‘Please select the correct answer’，并且吧输入的结果作为string保存在answer
        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[randomNum].checkAnswer(parseInt(answer), recordScore);
            nextQuestion();
        }
    }
    
    nextQuestion();

})();
