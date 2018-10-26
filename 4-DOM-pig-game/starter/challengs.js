/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore, curPlayer, gamePlaying;

init();

var preDice;

// callback is anonymous function
document.querySelector('.btn-roll').addEventListener('click',  function() {
    if (gamePlaying) {
        //1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //2. Display result
        //注意当有多个element的class都为dice时，只会选择第一个
        // var diceDOM = document.querySelector('.dice')
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        // diceDOM.style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        //3. update the round score IF the rolled number is not a 1
        if (dice1 !== 1 && dice2 !== 1) {
            // add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + curPlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer();
        }

        // if(dice === 6 && preDice === 6) {
        //     // player loses score
        //     scores[curPlayer] = 0;
        //     document.querySelector('#score-' + curPlayer).textContent = '0';
        //     nextPlayer();
        // } else if (dice !== 1) {
        //     // add score
        //     roundScore += dice;
        //     document.querySelector('#current-' + curPlayer).textContent = roundScore;
        // } else {
        //     // next player
        //     nextPlayer();
        // }

        // preDice = dice;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to Global score
        scores[curPlayer] += roundScore;
        
        // Update the UI
        document.querySelector('#score-' + curPlayer).textContent = scores[curPlayer];

        var input = document.querySelector('.final-score').value;
        
        // Undefined, 0, null, " " are COERCED to false
        // Anything else is COERCED to true
        if(!input) {
            input = 100;
        }

        // Check if player won the game
        if(scores[curPlayer] >= input) {
            document.querySelector('#name-' + curPlayer).textContent = 'WINNER!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
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

    // if present, remove; if absent, add;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

// 把init 作为callback参数传进去，让eventListener来call
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    curPlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    // use querySelector to change CSS, set the css display to none
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

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


