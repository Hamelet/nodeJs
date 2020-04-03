let personne = {"Damien": {age:29}};
let name = "Damien";

let personneIds= {
    pers0: {nom: "Damien", age: 25},
    pers1: {nom: "Lolo", age: 51},
    pers2: {nom: "Marie", age: 33}
}
console.log(personne[name]);

for (let i = 0; i <3; i++) {
    console.log(personneIds["pers"+i]); 
}   
