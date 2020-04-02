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
delete(personne.pere);
console.log(personne);