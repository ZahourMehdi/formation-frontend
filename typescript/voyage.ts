class Sejour {
    constructor(private _nom: string, private _prix: number) {
    }
    get getNom(): string {
        return this._nom;
    }

    set setNom(nom: string) {
        this._nom = nom;
    }

    get getPrix(): number {
        return this._prix;
    }

    set setPrix(prix: number) {
        this._prix = prix;
    }
}

class SejourService {
    private sejour: Sejour[] = []
    constructor() {
        this.sejour = [new Sejour("Paris", 500), new Sejour("Marseille", 1), new Sejour("Nantes", 250)];
    }

    rechercheSejour(nom: string): Sejour {
        return <Sejour>this.sejour.filter( element => {
            return element.getNom == nom
        }).pop();
    }
}
let serviceSejour: SejourService = new SejourService();
console.log(serviceSejour.rechercheSejour("Paris"))
