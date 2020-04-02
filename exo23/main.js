class Vehicule{
    constructor(nom, vitesseMax){
        this.nom = nom;
        this.vitesseMax = vitesseMax;
    }
    seDeplacer(){
        return "se déplace";
    }
}
class Voiture extends Vehicule{
    constructor(nom, vitesseMax, immatriculation){
        super(nom, vitesseMax);
        this.immatriculation = immatriculation;
    }
    affichage(immatriculation){
        return `Mon immatriculation est ${immatriculation}`;
    }
    seDeplacer(){
        return "roule";
    }
}

let vehicule1 = new Vehicule("moto", 340);
console.log(vehicule1.seDeplacer());
 

voiture1 = new Voiture("Audi", 240, "ri-444-ri");
console.log(voiture1.seDeplacer());
console.log(voiture1.affichage(voiture1.immatriculation));
voiture1.immatriculation = "gg-000-gg";
console.log(voiture1.affichage(voiture1.immatriculation));
  