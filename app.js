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
};

class enemy {
    constructor(){
        this.name = name,
        this.hull = Math.floor(Math.random()*4)+3;         
        this.firepower = Math.floor(Math.random()*3)+2;
        this.accuracy = (Math.floor(Math.random()*3)+6)/10;
    }
}

let p = prompt(" are you ready to battle?? ")

if (p === "yes")
{
alert( " wave one... ")














}else if(p === "no"){
    alert("you are not fit yo defend the human race")

}
else{
    alert("Does..not...compute")
}





// let attack = (shiphull,enemyfp) =>{

//     ship.hull = shiphull-enemyfp
// };

