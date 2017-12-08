/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying;
init();
var lastDice;
var finalScore;
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying){
         //random num
     var dice = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;
    //display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
        var diceDom1 = document.querySelector('.dice1');
         diceDom1.style.display = 'block';
    diceDom1.src = 'dice-' + dice1 + '.png';
    
    //update round score
        if(dice === 6 && lastDice === 6){
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
            //player looste the game
        }else if(dice !== 1||dice1 !== 1){
        roundScore += dice1 + dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice1').style.display = 'none';
        
    }else{
        nextPlayer();  
    }
        lastDice = dice;
    }
  
    
});


document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
          //add to gloabal score
  scores[activePlayer] += roundScore;
    //updating
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //if player won the game
    finalScore = document.getElementById('final').value;
       
    if (scores[activePlayer]>=finalScore){
        document.querySelector('#name-' + activePlayer).textContent = "Winner!";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }else {
        nextPlayer();
    }
    }
    
});


function nextPlayer (){
    
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
     document.querySelector('.dice1').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click',function(){
   
   init(); 
    
    
});

function init(){
    
    scores = [0,0];
roundScore = 0;
activePlayer = 0;
    gamePlaying = true;

document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = "Player 1";
    document.querySelector('#name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}




//document.querySelector('#current-' + activePlayer).textContent = dice;
//var x = document.querySelector('#score-0').textContent;
//console.log(x);