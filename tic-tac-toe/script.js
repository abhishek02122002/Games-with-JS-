const board = document.querySelector('#wrapper .board');
const squares = document.querySelectorAll(' #wrapper .board .square');
const messageBox = document.querySelector('#wrapper #message');
const restartBtn = document.querySelector('#wrapper button');

const players = ['X','Y'];
let currentPlayer = players[0];
const winningPattern = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6]
]
messageBox.textContent = `X's Turn`



for(let i =0;i<squares.length;i++){
     squares[i].addEventListener('click',(evt)=>{
          if(squares[i].textContent !=="" || checkWinner(currentPlayer)){
               // alert("NOT ALLOWED");
               return;
          }
          squares[i].textContent=currentPlayer;
          if(checkWinner(currentPlayer)){
               messageBox.textContent = `CONGRATULATIONS! ${currentPlayer} WON THE MATCH`;
               return ;
          }
          if(checkTie(currentPlayer)){
               messageBox.textContent=`Match Tied,Restart to play`
               return;
          }
          currentPlayer= currentPlayer===players[0]?players[1]:players[0];
          if(currentPlayer === players[0]){
               messageBox.textContent = `X's Turn`;
          }else{
               messageBox.textContent=`Y's Turn`;
          }
     },false); 
}


function checkWinner(player){
     for(let i =0;i<winningPattern.length;i++){
          const [a,b,c] = winningPattern[i];
          if(squares[a].textContent ===player && squares[b].textContent ===player && squares[c].textContent ===player){
               return true;
          }
     }
     return false;
}


function checkTie(player){
     for(let i =0;i<squares.length;i++){
          if(squares[i].textContent === ""){
               return false;
          }
     }
     return true;
}

// function checkTie(){
//      return [...squares].every(ele=>ele.textContent!=="");
// }



restartBtn.addEventListener('click',function(){
     reStart();
     confirm("Game Restarted");
     return;
},false);
function reStart(){
     for(let i =0;i<squares.length;i++){
          squares[i].textContent='';
     }
     currentPlayer=players[0];
     messageBox.textContent=`X's Turn`;
     return;
}