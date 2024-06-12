const voice = new Audio('voice.mp3');
const manDeathVoice = new Audio('man-death.mp3');
// voice.loop=true;
const cursor = document.querySelector('.cursor');
window.addEventListener("mousemove",(e)=>{
     cursor.style.top= e.pageY +"px";
     cursor.style.left = e.pageX + "px";
    
},false);

function timeOver() {
     setTimeout(() => {
         clearInterval(intervalId);  
         alert("Time over! Your final score is: " + score);
     }, 30000); 
 }

let score = 0;
const bloodSpot = document.querySelector(".bloodSpot");
window.addEventListener('click',(e)=>{
     bloodSpot.style.top = e.pageY + "px";
     bloodSpot.style.left = e.pageX + "px";
     voice.play();

     
},false);

const easyBtn = document.querySelector('.easyOption');
const mediumBtn = document.querySelector('.mediumOption');
const hardBtn = document.querySelector('.hardOption');
const expertBtn = document.querySelector('.expertOption');
let time=3000;
easyBtn.addEventListener('click',(e)=>{
     time=3000;
     container.appendChild(terror);
     startBtn.innerHTML = "Score:"+score;
     terrorMove(time);
     timeOver();
     score=0;

     
});
mediumBtn.addEventListener('click',(e)=>{
     time=2000;
     container.appendChild(terror);
     startBtn.innerHTML = "Score:"+score;
     terrorMove(time);
     timeOver();
     score=0;

     
});
hardBtn.addEventListener('click',(e)=>{
     time=1500;
     container.appendChild(terror);
     startBtn.innerHTML = "Score:"+score;
     terrorMove(time);
     timeOver();
     score=0;

     
});
expertBtn.addEventListener('click',(e)=>{
     time=1000;
     container.appendChild(terror);
     startBtn.innerHTML = "Score:"+score;
     terrorMove(time);
     timeOver();
     score=0;

     
});

const startBtn = document.querySelector('.start');
const container = document.querySelector('.container');
const contHeight = container.offsetHeight;
const contWidth = container.offsetWidth;
const terror = document.createElement('img');
terror.setAttribute('class','terrorist');
terror.setAttribute('src','./person.png');
terror.setAttribute('color','white');
terror.setAttribute('height','100px');

var intervalId;
function terrorMove(time){
  intervalId = setInterval(()=>{
     const randomTop = Math.random() * (contHeight - 100);
     const randomLeft = Math.random() * (contWidth - 100);
     
     terror.style.position="absolute";
     terror.style.top = randomTop + "px";
     terror.style.left = randomLeft + "px";
},time);
}

terror.addEventListener('click', () => {
//     voice.play();
    manDeathVoice.play();
     score++;
     startBtn.innerHTML = "Score:" + score;
}, false);

// background-change

document.addEventListener('DOMContentLoaded', (event) => {
     const forest = document.querySelector('#forest');
     forest.addEventListener('click', (e) => {
         document.querySelector('body').style.background = "url('./forest.jpg') center center / cover no-repeat";
     }, false);
 
     const city = document.querySelector('#city');
     city.addEventListener('click', (e) => {
         document.querySelector('body').style.background = "url('./city.jpg') center center / cover no-repeat";
     }, false);
 
     const mountain = document.querySelector('#mountain');
     mountain.addEventListener('click', (e) => {
         document.querySelector('body').style.background = "url('./mountain.jpg') center center / cover no-repeat";
     }, false);
 
     const desert = document.querySelector('#desert');
     desert.addEventListener('click', (e) => {
         document.querySelector('body').style.background = "url('./desert.jpg') center center / cover no-repeat";
     }, false);
 });
 
 // function to display score and reload 

 function displayScoreAndReload() {
     clearInterval(intervalId);
     document.getElementById('finalScore').textContent = score;
     document.getElementById('scoreModal').style.display = "block";
     startBtn.innerHTML=0;
     score =0;
     location.reload(true);
 }


 setTimeout(displayScoreAndReload, 10000); 

 