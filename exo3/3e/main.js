const personne = {
    prenom: "Damien",
    age: 27,
    pere:{prenom:"Jean", age: 57}
}

const enfant = {
    prenom: "Clémence",
    age: 8,
    pere: {...personne}
}
personne.age ++;
console.log(personne, enfant);
personne.age++;
console.log(personne, enfant);
