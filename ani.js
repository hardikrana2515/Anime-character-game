
let userScore = 0;
let cpuScore = 0;

const character=document.querySelectorAll('.anime');
const point1= document.querySelector('#count1');
const point2= document.querySelector('#count2');
const msg=document.querySelector('#msg');
const winblock=document.querySelector('.win'); 
const back=document.querySelector('.back');
const btn=document.querySelector('.reset');
const voice=document.querySelector('.voice');


const gencpuchoice=() => {
    const options = ['naruto','gojo','luffy','ichigo'];
    const select =Math.floor(Math.random()*options.length);
    return options[select];
   
};

const disableGame = () => {
    character.forEach((choice) => {
        choice.style.pointerEvents = "none";
    });
};

const anableGame = () => {
    character.forEach((choice) => {
        choice.style.pointerEvents = "auto";
    });
};

const winner=(userwin,userchoise,cpuchoice) => {
    if(userwin)
     {
         msg.innerText=`You won with ${userchoise} `;
         point1.innerText=`${++userScore}`;
         winblock.innerHTML=`<img src="images/${userchoise}.png">`;
     }   
     else
     {
         msg.innerText=`CPU won with ${cpuchoice} `;
          point2.innerText=`${++cpuScore}`;
          winblock.innerHTML=`<img src="images/${cpuchoice}.png">`;

     }
     if(userScore==15){
        back.style.backgroundImage = 'url("images/Picsart_24-05-07_17-11-30-466.png")';
        back.style.backgroundSize='cover';
        back.style.zIndex=1;
        voice.innerHTML=`<audio autoplay>
        <source src="images/shikabukiste-yatta!-made-with-Voicemod.mp3" type="audio/mp3"></audio>`;
        voice.style.zIndex=-1;
        voice.style.display='none'; 
        msg.innerText = `Congratulations! You reached 15 points!`;
        disableGame(); 
} else if (cpuScore === 15) {
    msg.innerText = `Game Over! CPU reached 15 points!`;
         voice.innerHTML=`<audio autoplay>
        <source src="images/Voicy_Nezuko Devil Laugh SFX.mp3" type="audio/mp3"></audio>`;
        voice.style.zIndex=-1;
        voice.style.display='none'; 
    disableGame(); 
};
};



const playgame = (userchoise) => {
    const cpuchoice = gencpuchoice();
    const randomOutcome = Math.random(); 
    let userwin = randomOutcome < 0.5; 

    winner(userwin, userchoise, cpuchoice);
};

btn.addEventListener ('click',reset=() =>{

    userScore = 0;
    cpuScore = 0;
    point2.innerText=`${cpuScore}`;
    point1.innerText=`${userScore}`;
    winblock.innerHTML=``;
    back.removeAttribute('style');

});


character.forEach((choice) => {
    choice.addEventListener('click', () => {
    const userchoise = choice.getAttribute('id'); 
    playgame(userchoise);
        anableGame();
    });
});


