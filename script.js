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


let shipCondition = 20;
let alienDestroyed = 0;
let alienLeft =6;
let games =0;












// the query selection ------------------------------------------------------------>
let startDiv = document.getElementById ("start-div")
let startButton = document.getElementById ("startButton") ; 
let finishButton = document.getElementById ("finish");
let input = document.querySelector ("input");
let side1 = document.getElementById ("enemy-side")
let side2 = document.getElementById ("myside")
let question = document.querySelector("h2");
let list =document.querySelectorAll (".list >li");
let salutation = document.querySelector(".salutation");
//---------------------------------------------------------------------------------->

console.log (salutation.innerHTML);


// in the biginig the sides are displayed 
side1.style.display="none" ; 
side2.style.display="none" ; 





























// the start button listner -------------------------------------------->

startButton.addEventListener ("click" , startfun) ;
function  startfun () {

    if (input.value.trim() === "") {
    question.textContent = "please enter a valid name captain";

    }else {

 
     
    games ++;


    startDiv.style.display="none" ;
    side1.style.display="block" ; 
    side2.style.display="block" ; 


    //initializing the list 
    list[0].textContent += input.value;
    list[1].textContent += 20;shipCondition=20;
    list[2].textContent += 0;alienDestroyed=0;
    list[3].textContent += 6;alienLeft=6;
    list[4].textContent += games;


    

// create the enemy list 

// declaring the aliens names 
let alienNames = ["megatron" , "omega" , "nitron" , "android", "apple" ,"elctro"];


// creating all objects of aliens 
let alienObjects = [];


let enemyList = document.createElement ("ul");


for ( let i =0 ; i < alienNames.length ; i ++) {

 alienObjects [i]= new alienShip (alienNames[i]);
 let enemyEl = document.createElement ("li");
 enemyEl.classList.add ("element");
 enemyEl.textContent =alienNames[i];
 enemyList.appendChild(enemyEl) ; 
}

console.log (enemyList);


side1.appendChild (enemyList) ;

// selecting all li of enemies ----->>
let enmyElement = document.querySelectorAll (".element");
console.log (enmyElement[0]);

// create my ship 

let ship = document.createElement ("div");
ship.classList.add ("myShip");
ship.textContent = input.value; 
side2.appendChild (ship); 

// creating the player object
let playerShip = new spaceShip (input.value.trim());



// create shoot button 

let shootButton = document.createElement ("button");
shootButton.textContent ="Shoot" ;

side2.appendChild (shootButton);


// the shoot button listner --------------------------------------------->
  

let j = 0;
shootButton.addEventListener ("click" , shoot ) ;
function shoot () { 
    // enemyList.removeChild(enemyList.firstChild);
    

    console.log (playerShip);
    console.log(alienObjects [j]);
    console.log(j);
    
    if (j<= 5) {

      
           let test = false ;
           // player attack 

        if (playerShip.accuracy > Math.random() ) {


            let result =  playerShip.attack (alienObjects[j]) ;
            
            console.log (result); 

            if (result > 0 ){

           console.log ("good job that was a direct hit ");
           console.log ("the alien hull now is   :" + result) ;
           salutation.innerHTML= "<h1> good job that was a direct hit  </h1>" ;
           
           
            }

           else {
               
            console.log ("good job you destroyed  : " + alienObjects[j].alienName) ;
            salutation.innerHTML= "<h1> good job you destroyed  : </h1>" + alienObjects[j].alienName ;
            enmyElement[j].textContent= ""
             alienDestroyed++;
             alienLeft--;
             list[2].textContent ="";
             list [2].textContent="Aliens Destroyed : " + alienDestroyed ;
             list[3].textContent ="Aliens Left : " + alienLeft ;
            test = true;
            j++;
            if (j==6) {
            console.log ("congratulation you win");
            salutation.innerHTML= "<h1>congratulation you win play again </h1>";
            shootButton.removeEventListener ("click" , shoot); } 
           } 


        
            } else {
                console.log (salutation);
                // let salutation = document.querySelector(".salutation");
                salutation.innerHTML = "<h1> you missed it  </h1>" ;
               
                console.log ("you missed it") ;
                console.log ("test-------------->");}
            

               



        if (test == false ){
         if (alienObjects[j].hull > 0) {
           console.log (alienObjects[j].alienName + "  is firing watchout ");
           salutation.innerHTML += "<h2> enemy is firing watchout </h2>"

           if (alienObjects[j].accuracy > Math.random ()) {
            let result2 = alienObjects[j].attackBack(playerShip);
             if (result2 > 0) {
        
        
                   console.log ( "you have been hit your hull now is :  " + result2 );
                   salutation.innerHTML += "<h2>you have been hit</h2>";
                   shipCondition = result2;
                   list[1].textContent ="";
                   list[1].textContent = "Ship Condition : "+ shipCondition;   // <--------when you get hit 
        
        
                   }  else {  
                    console.log ("you're destroyed");
                    j=7;
                    salutation.innerHTML = "<h1>you 're destroyed play  again</h1>"
                     } //<-------when you lose 
        } else {console.log ("good job you dodged it ") ;
               salutation.innerHTML += "<h3>good job you dodged it shoot back</h3>"}
         }

        }


    }
    






}

}}











// the finish button listener -------------------------------------------->

finishButton.addEventListener ("click" , finishfun) ;

function finishfun () {
    startDiv.style.display = "block";
    side1.style.display="none" ; 
    side2.style.display="none" ; 
    input.value="";  

    
    list[0].textContent = "Captain : ";
    list[1].textContent = "Ship Condition : ";
    list[2].textContent = "Aliens Destroyed :";
    list[3].textContent = "Aliens Left :";
    list[4].textContent = "Games : " ;


    
    
    while (side1.firstChild) {
        side1.removeChild(side1.firstChild);
    }

    while (side2.firstChild) {
        side2.removeChild(side2.firstChild);
    }

    salutation.innerHTML = "<h1>I hope you're enjoying the game </h1>";

   

}


//---------------------------------------------------------------------------------->


