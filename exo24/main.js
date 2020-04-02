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

class Eleve{
    constructor(nom, age, etablissement, notes){
        super(nom, age);
        this.etablissement = etablissement;
        this.notes = notes = [];
    }
    recevoirNote(number){
        this.notes.push(number);
    }
    moyenne(){
        let somme = 0;
        let result = somme/this.notes.length;
        for (let i = 0; i < this.notes.length; i++) {
            return somme += this.notes[i];
        }
        return result;
    }
    salutations(){
      console.log(`Bonjour, je suis ${this.name}, j'ai ${this.age} ans et j’étudie à ${this.etablissement}`);
    }
}