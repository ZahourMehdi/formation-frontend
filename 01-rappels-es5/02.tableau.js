var villes = ["nantes","paris","saint-nazaire", "angers","le mans"];

//ForEach()
villes.forEach(function(value){
    console.log(value);
});

//Every()

console.log("lettreADansToutesLesVilles == ",villes.every(function(element){
    return element.includes('a');
}));


console.log("auMoinsUneVilleAvecUnTiret == ",villes.some(function(element){
    return element.includes('-');
}));


console.log("villesSansTiretSansEspace==", villes.filter(
    element => (element.includes(" ") || element.includes("-")) ? false : true
));

console.log("villesMajusculeSeTerminantParS==", villes.filter(element => element.endsWith("s"))
                                                        .map(element =>  element.toUpperCase())
            );

