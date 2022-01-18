
// spaceship class 
class spaceShip {
    constructor (captainName) {
        this.captainName=captainName;
        this.hull = 20;
        this.firePower =5 ;
        this.accuracy =.7;

    }
    // methodes 
     attack (alienShip) {
          alienShip.hull -= this.firePower ;
          return (alienShip).hull ;
     }
}
// spaceship classs 

class alienShip {
    constructor (alienName) {
        this.alienName=alienName;
        this.hull =Math.floor ( (Math.random()*(6-3+1) )+3)  ; // 3-6
        this.firePower =Math.floor( (Math.random() * (4-2+1 )) +2) ; //2-4
        this.accuracy =Math.round(Math.random() * (8 - 6) + 6) / 10  ;// .6 - .8
      

    }
    // methodes 
    attackBack (spaceShip) {
        spaceShip.hull -=this.firePower ;
       return spaceShip.hull ;
    }
}

// the query --------------------------------->

// selectin the button start 

let start = document.getElementById ("start") ;
// console.log (start) ; 

let input = document.getElementById ("input"); 
let question = document.getElementById ("question");
// console.log (question.textContent);

// selecting battle field 
let battleField = document.querySelector(".game-battle") ;
// console.log (battleField);

// selcting the button finish 
let finishButton = document.getElementById ("finish");

// selecting the button replay 
let replayButton = document.getElementById ("replay");


// selecting the start-division 
let startDiv =document.querySelector (".start-div");

// selecting all the ellement of list-info 
let listEl= document.querySelectorAll ("li") ;

// selecting the play division 

let playEl = document.querySelector(".play") ; 
console.log (playEl);

// play div always is none until we click on start 
playEl.style.display = "none";


//test /////////////////////////////////////////////////////////////////


  // create the  2 sides ----> 


 // side one  the side of the enemy 
 let sideOne = document.createElement("div");
 sideOne.classList.add ("main1");
 playEl.appendChild(sideOne);   // appending side one 

 // side two the side of my space ship 
 let sideTwo = document.createElement("div");
 sideTwo.classList.add ("main2");
 playEl.appendChild(sideTwo); // appending side tow 


// creating the components of the two sides  ----->


// creating the component of side one
 let partOneOne= document.createElement ("div");
 partOneOne.classList.add ("partOne");
 sideOne.appendChild (partOneOne) ; // appending part one of side one 

 let partOneTwo = document.createElement ("div") ;
 partOneTwo.classList.add ("partTwo");
 sideOne.appendChild (partOneTwo) ; // appending part two of side one 


 // creating the component of side two
 let partTwoOne = document.createElement ("div");
 partTwoOne.classList.add ("partOne");
 sideTwo.appendChild (partTwoOne) ; // appending part one of side two

let partTwoTwo = document.createElement ("div");
partTwoTwo.classList.add ("partTwo");
sideTwo.appendChild (partTwoTwo) ; // appending part two of side two



// selecting the list of enemies   -------- > 


let listEnemies = document.createElement ("ul");
listEnemies.classList.add ("ulEnemy");

// creating the list  of enemies
     
       


for (let i = 0 ; i < 5; i++) {
    let enemy = document.createElement ("li");
    enemy.classList.add ("liEnemy");
    enemy.innerHTML= 	"\u2689"   //the  emoji of the alien ship 
    enemy.style.fontSize= "72px"
     listEnemies.appendChild (enemy) ; 

    }
 

       console.log (listEnemies);
    // appending side one  part one the list of enmiees 

       partOneOne.appendChild (listEnemies);


// create a p tag  for  current enemy 

let currentEnemy = document.createElement ("p");
currentEnemy.innerHTML = "\u2689" ;
currentEnemy.classList.add ("emoji") ;
partOneTwo.appendChild (currentEnemy) ;

// create a  p tag for my space  ship 

let captain= document.createElement ("p");
captain.innerHTML =	"\u2687" ;
captain.classList.add ("emoji") ;
partTwoOne.appendChild (captain) ;

// create the shooting button 

let shoot = document.createElement("button") ; 
shoot.textContent = "SHOOT";
partTwoTwo.appendChild(shoot);





//test finish /////////////////////////////////////////////////////////////














// all the functions are going to be here  -------------------------->


// finish function 











// play function 

const play = ()  => {

    playEl.style.display = "block";
   

}






let games = 0;

//-------------------------------------------------------------------------->


/*--------------------------------------------------------------------------------------------------------------------------------------* */
/*--------------------------------------------------------------------------------------------------------------------------------------* */
/*--------------------------------------------------------------------------------------------------------------------------------------* */



start.addEventListener ("click" , event1  ) ;
function event1  () {
    
if (input.value.trim() === "") {

// console.log ("please enter your name ");
question.textContent = "please enter a valid name Captain !";


}   else    {



  // incrementing numbers of games by 1  and put it in info list 
    games++;

 

// creating the player 
let playerShip = new spaceShip (input.value.trim());
console.log (playerShip);



//filing out the list 
listEl[0].textContent = "\u2705 " + listEl[0].textContent + input.value.trim();
listEl[1].textContent = "\u2705 " + listEl[1].textContent + 0;
listEl[2].textContent = "\u2705 " + listEl[2].textContent + 6;
listEl[3].textContent = "\u2705 " + listEl[3].textContent + 20; 
listEl[4].textContent = "\u2705 " + listEl[4].textContent + games; 
listEl[5].textContent = "\u2705 " + listEl[5].textContent +1;




// when user click start it will clear division start 

startDiv.style.display = "none";



// when the game start we will have to call the function play to set everything in place 

play ();






 
 
 
// declaring the aliens names 
let alienNames = ["megatron" , "omega" , "nitron" , "android", "apple" ,"elctro"];


// creating all objects of aliens 
let alienObjects = [];



for ( let i =0 ; i < alienNames.length ; i ++) {
 alienObjects [i]= new alienShip (alienNames[i]);
 
}



// war start ------------------------------->
// you attack first 







   
let shipesLeft = 6;
let shipesDestroyed =0;
let shipCondition=20;
let j=0;

   




shoot.addEventListener ("click" , event2 );

function event2 (){  
  
//---------------------------------------------------------------
console.log (j);


if (j <= 5 )   {  // <-------------begining of the condition 


console.log(alienObjects[j]);
console.log (playerShip);

let test = false ;


   // you atacking 

if (playerShip.accuracy > Math.random()) {

   let result =  playerShip.attack (alienObjects[j]) ;
    
    if (result > 0 ) { console.log ("good job  that was a direct hit  the alien ship hull is :"+ result)}
        else {   
            console.log ("you destroyed it good job ");// <-------------- alien destroyed 
            shipesDestroyed++;
            listEl[1].textContent="";
            listEl[1].textContent = "\u2705 " + "ships destroyed : "+ shipesDestroyed;
            shipesLeft--;
            listEl[2].textContent ="";
            listEl[2].textContent = "\u2705 " + " shipes left : " + shipesLeft;

            
            j++;
            test=true;
            if(j===6)  { console.log ("you win congratulation"); shoot.removeEventListener("click",evt);} 
             


            
            
            
            }
     
      } else {
    console.log ("you missed it ");
}

// aliens attack back 
if ( test!== true ) {
if (alienObjects[j].hull > 0 )  {
    console.log ("alien are firing  watch out ");  //<--------- when aliens are firing 
if (alienObjects[j].accuracy > Math.random ()) {
    let result2 = alienObjects[j].attackBack(playerShip);
     if (result2 > 0) {


           console.log ( "you have been hit your hull now is :  " + result2 );
           shipCondition = result2;
           listEl[3].textContent ="";
           listEl[3].textContent = "\u2705 " + " your ship condition : "+ shipCondition;   // <--------when you get hit 


           }  else {  console.log ("you're destroyed"); j=7;} //<-------when you lose 
} else {
    console.log  ("you dodged it ! good job ");
}

} }


//-----------------------------------------------------------------


}   // <-------------close the condition






} // close for shoot listner 





// if the player wants to finish the game 
const finish = () => {
    
  
   
    startDiv.style.display="block";
    playEl.style.display = "none";
    input.value= "";
 
     shoot.removeEventListener("click" , event2);
     start.removeEventListener("click", event1);
      j=0;
    
 
    // deleting all the info from the list 
    listEl[0].textContent ="Captain Name :" ;
    listEl[1].textContent = "ships destroyed :" ;
    listEl[2].textContent = "shipes left :";
    listEl[3].textContent = "your ship condition :" ; 
    listEl[4].textContent = "games :"; 
    listEl[5].textContent = "date :";
 
     
 }

finishButton.addEventListener("click" , (evt) => {
    finish();
})

replayButton.addEventListener ("click" , evt =>{
    
    start.addEventListener ("click" , event1 );
    shoot.addEventListener ("click" , event2 );

    
})



} // curly brace for else 

} // close for start listner 



// games number 