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
    constructor(){
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
        alert("Shipt health: " + ship.hp + "and Enemy health: " + enemyShip.hull)
    }else{
        alert("OH NO! YOU MISSED!!");
    }
}

let enemyFight = (ship) => {
    if (Math.random() <= this.accuracy) {
        ship.hp -= enemy.firepower;
        alert("uh oh... DIRECT HIT !! ");
    }else{
        alert("YAY! THEY MISSED!!");
    }
}

