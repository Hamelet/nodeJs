class Personne{
    constructor(nom, age){
        this.nom = nom;
        this.age = age;
    }
    vieillir(){
        this.age ++;
    }
    categorie(){
        if (this.age < 11) {
            return "enfant";
        } else if(this.age >= 11 && this.age <= 17){
            return "adolescent";
        } else if(this.age >= 18 && this.age <= 29){
            return "jeune";
        } else if(this.age >= 30 && this.age <= 49){
            return "fleur de l'age"
        } else{
            return "senior";
        }
    }
    anneesAvantRetraite(){
        if (this.age < 70) {
            return 70 - this.age;
        } return 0;
    }
    presentation(){
        console.log(`Bonjour, je suis ${this.nom} et j'ai ${this.age}, plus que ${this.anneesAvantRetraite()} et je serai enfin peinard !`);
        
    }
}

class Eleve extends Personne{
    constructor(nom, age, etablissement, notes = []){
        super(nom, age);
        this.etablissement = etablissement;
        this.notes = notes;
    }
    recevoirNote(number){
        this.notes.push(number);
    }
    moyenne(){
        let somme = 0;
        
        for (let i = 0; i < this.notes.length; i++) {
            somme += this.notes[i];
        }let result = somme/this.notes.length;
        
        return result;
    }
    salutations(){
      console.log(`Bonjour, je suis ${this.nom}, j'ai ${this.age} ans et j’étudie à ${this.etablissement} et ma moyenne est de ${this.moyenne()}`);
    }
}

const personne1 = new Personne("David", 62);
const personne2 = new Personne("Samuel", 73);

personne1.presentation();
personne2.presentation();

const eleve1 = new Eleve("Galaad", 16, "Cholet");
eleve1.recevoirNote(14);
eleve1.recevoirNote(17);
eleve1.recevoirNote(5);
eleve1.recevoirNote(11);
eleve1.recevoirNote(10);

eleve1.salutations();

while (eleve1.age < 70) {
    eleve1.vieillir();
}
console.log(eleve1.age);

function comparer(personne1, personne2) {
    if (personne1 === personne2) {
        console.log(true);         
    }else{
       console.log(false);        
    }
}
const personne3 = new Personne("William", 52);
const personne4 = new Personne("William", 52);

comparer(personne3, personne4);
