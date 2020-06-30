// console.log("are you there?");
// alert('oh hai!');
// prompt("are you there???");

// I would like to start with the main ship
//this will allow me to build the ship to get ready for battle (class)
//next will be one alien ship. this will help me set up the battle(class)
// start setting the code for them to battle

// class Spaceship{
//     constructor(){
//         this.hp = 20,
//         this.Firepower = 5,
//         this.accuracy = .7
//     }
//     Health(){
//         alert(`health  ${this.hp}`)
//     }
// }


// ====================> Actors for the game <========================= //
let ship = {
    hp:20,
    fp: 5,
    accuracy: .7
} 
const hphealth = () => {
    alert("this is health" + hp)
}

class enemy {
    constructor(name){
        this.name = name,
        this.hull = Math.floor(Math.random()*4)+3;         
        this.firepower = Math.floor(Math.random()*3)+2;
        this.accuracy = (Math.floor(Math.random()*3)+6)/10;
    }
}

let alienship = [];
for(let i = 0; i < 6; i++){
    alienship.push(new enemy ('Oogie Boogie ' + (i + 1)))
}
let index = 0;
let enemyShip = alienship[index]

// ==================== ACTION OF GAME ============================ //
let shipfight = (enemy) => {
    if (Math.random() <= ship.accuracy){
        enemy.hull -= ship.fp;
        alert("DIRECT HIT !! ");
        alert("Ship health: " + ship.hp + "and " + enemyShip.name + " health: " + enemyShip.hull)
    }else{
        alert("OH NO! YOU MISSED!!");
    }
}

let enemyFight = (ship) => {
    if (Math.random() <= enemyShip.accuracy) {
        ship.hp -= enemyShip.firepower;
        alert("uh oh... DIRECT HIT !! ");
    }else{
        alert("YAY! THEY MISSED!!");
    }
}

//==========================BATTLE CODING ========================================//
let p = prompt("Are you ready to battle?? (yes or no) ")

if (p === "yes")
{
    let password = prompt ("enter code before battle ... if you know it " )
    if (password === "overkill"){
        ship.fp = 1000;
        alert("FIRE POWER IS NOW AT 20")
    }
    let a = prompt("first alien ship vazes in... do you attack or run? ")
    if (a === "attack"){
        alert( " wave " + (index + 1) + "...")
        while (ship.hp > 0 && enemyShip.hull > 0 ){
            alert("Ship health : " + ship.hp + " ship firepower: " + ship.fp + " and " + enemyShip.name +  " health: " + enemyShip.hull)
            alert( "ATTACK !!!")
            if(ship.hp > 0 ){
                shipfight(enemyShip);
            }
            if(enemyShip.hull > 0){
                enemyFight(ship);

            }else if(ship.hp <= 0){
                alert("Game Over...")
            }else if(enemyShip.hull <= 0){
                alert("you have defeted the alien")
                if(index === 5){
                    alert("Victory! You defeated the aliens!");
                    break;
                }else if(index < 5){
                    let Q = prompt( " do you want to keep playing? (yes / no) ")
                if (Q === "yes"){
                index++;
                enemyShip = alienship[index];

                }
                }
                // let Q = prompt( " do you want to keep playing? ")
                // if (Q === "yes"){
                // index++;
                // enemyShip = alienship[index];
                    // if(index === 5){
                    //     alert("Victory! You defeated the aliens!");
                    // }
                }else{
                    alert(" game over ");
                }

            }

            }
        
            

        }


else if(p === "no"){
     alert("you are not fit yo defend the human race")

}else{
     alert("Does...not...compute")
}