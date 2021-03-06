/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, curPlayer, gamePlaying;

init();


//Math.random() 返回范围为0-1的float
//Math.floor() 去掉number类型的小数部分
// dice = Math.floor(Math.random() * 6) + 1;

//querySelector()中最后会变成一个统一的string;  textContent -- change content, only for plain text content, html tag will display directly.
// document.querySelector('#current-' + curPlayer).textContent = dice;

//innerHtml允许插入html标签
// document.querySelector('#current-' + curPlayer).innerHTML = '<em>' + dice + '</em>';


// read the value/content of element with id 'score-0'
// var x = document.querySelector('#score-0').textContent;
// console.log(x);


function btn() {
    // some code
}
btn();

// syntax: addEventListener(eventType, function that will call when event happened)
// document.querySelector('.btn-roll').addEventListener('click',  btn);
// 这里的btn没有(),因为不是我们自己call，而是function来call.
// A function is not called by us, but called by the function, is callback function.

// callback is anonymous function
document.querySelector('.btn-roll').addEventListener('click',  function() {
    if (gamePlaying) {
        //1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display result
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3. update the round score IF the rolled number is not a 1
        if (dice !== 1) {
            // add score
            roundScore += dice;
            document.querySelector('#current-' + curPlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to Global score
        scores[curPlayer] += roundScore;
        
        // Update the UI
        document.querySelector('#score-' + curPlayer).textContent = scores[curPlayer];

        // Check if player won the game
        if(scores[curPlayer] >= 20) {
            document.querySelector('#name-' + curPlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + curPlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + curPlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //nexy player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    // next player
    roundScore = 0;
    // document.getElementById('current-' + curPlayer).textContent = roundScore;
    curPlayer = 1 - curPlayer;
    document.getElementById('current-0').textContent = roundScore;
    document.getElementById('current-1').textContent = roundScore;

    // remove element style
    // document.querySelector('.player-0-panel').classList.remove('active');
    // add element style
    // document.querySelector('.player-1-panel').classList.add('active');

    // if present, remove; if absent, add;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

// 把init 作为callback参数传进去，让eventListener来call
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    curPlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    // use querySelector to change CSS, set the css display to none
    document.querySelector('.dice').style.display = 'none';

    //这个比querySelector要快
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');   //不管是否有对应的style，都可以这样写，不会报错
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


