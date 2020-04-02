const personne = {
    prenom: "Damien",
    age: 27,
    pere:{prenom:"Jean", age: 57}
}
// console.log(personne);
personne.pere.age = 60;
console.log(personne.pere);