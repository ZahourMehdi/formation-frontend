function Personne(nom, prenom, pseudo){
    this.nom= nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function() { 
        return "Nom : " + this.nom + " ,Prenom : " + this.prenom + " ,Pseudo : " + this.pseudo 
    };
}

var jules = new Personne("Jules", "LEMAIRE", "jules77");
var paul = new Personne ("Paul", "LEMAIRE","paul44");

/*console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

console.log(paul.nom);
console.log(paul.prenom);
console.log(paul.pseudo);
console.log(paul.getNomComplet());
*/

var afficherPersonne = function(unePersonne){
    console.log(unePersonne.nom);
    console.log(unePersonne.prenom);
    console.log(unePersonne.pseudo);
    console.log(unePersonne.getNomComplet());
}

//afficherPersonne(jules);

jules.pseudo = "jules44";

//afficherPersonne(jules);

//console.log(jules.age);

Personne.prototype.age = "NON RENSEIGNE";
//console.log(jules.age);
jules.age = "30";
//console.log(jules.age);

Personne.prototype.getInitiales = function(){
    return this.nom.charAt(0) + this.prenom.charAt(0);
}

//console.log(jules.getInitiales());

var robert = {
    nom:"LEPREFET",
    prenom:"Robert",
    pseudo:"robert77",
    getNomComplet : function(){
        return "Nom : " + this.nom + " ,Prenom : " + this.prenom + " ,Pseudo : " + this.pseudo 
    }
};

//afficherPersonne(robert);

function Client (numeroClient,nom, prenom, pseudo){

    Personne.call(this, nom, prenom,pseudo )
    this.numeroClient = numeroClient;
    this.getInfos = function(){
        return {
            numeroClient : this.numeroClient,
            nom : this.nom,
            prenom :  this.prenom
        }
    };
}

var steve = new Client("A01","LUCAS","Steve","steve44");

//afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());