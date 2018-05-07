"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "getNom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "setNom", {
        set: function (nom) {
            this._nom = nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "getPrix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "setPrix", {
        set: function (prix) {
            this._prix = prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this.sejour = [];
        this.sejour = [new Sejour("Paris", 500), new Sejour("Marseille", 1), new Sejour("Nantes", 250)];
    }
    SejourService.prototype.rechercheSejour = function (nom) {
        return this.sejour.filter(function (element) {
            return element.getNom == nom;
        }).pop();
    };
    return SejourService;
}());
var serviceSejour = new SejourService();
console.log(serviceSejour.rechercheSejour("Paris"));
