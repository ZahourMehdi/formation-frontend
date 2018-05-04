let favoriteCityId = "rome";

//console.log(favoriteCityId);

favoriteCityId = "paris";

//console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];

//console.log(citiesId);

//citiesId = [];
citiesId.push("tokyo");
//console.log(citiesId);

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return { city, temperature }
}

const weather = getWeather(favoriteCityId);
//console.log(weather);

const {
    city: uneCity,
    temperature: uneTemperature
} = weather;

//console.log(weather.city);
//console.log(weather.temperature);

const [] = [parisId, nycId, ...othersCitiesId] = citiesId;
//console.log(parisId, nycId, othersCitiesId.length);

class Trip {
    constructor(id, name, image) {
        this.id = id;
        this.name = name;
        this.imageUrl = image;
    }
    toString() {
        return `[${this.id}, ${this.name}, ${this.imageUrl},${this.price}]`
    }

    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio-de-Janeiro", "img/rio-de-janeiro.jpg")
    }
    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }


}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg]")

//console.log(parisTrip);
//console.log(parisTrip.name);

parisTrip.price = 100;
//console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip()
//console.log(defaultTrip.toString());

class FreeTrip extends Trip {
    constructor(id, name, image) {
        super(id, name, image);
        this._price = 0;
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jgp")
//console.log(freeTrip.toString());



class TripService {

    constructor() {
        // TODO Set of 3 trips
        //let t1 = new Trip('paris', 'Paris', 'img/paris.jpg')
        //let t2 = new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        //let t3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {
        // TODO return promise

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let t = [...this.trips].filter(element => element.name == tripName).pop();
                if (t) {
                    resolve(`Trip found : Trip ${t}`);
                }
                else
                    reject(`No trip with name: ${tripName}`)
            }, 2000);
        })

    }
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
        this.prices = new Map();
        this.prices.set("paris", 100)
        this.prices.set("rio-de-janeiro", 800)
        this.prices.set("nantes")

    }

    findPriceByTripId(tripId) {
        // TODO return promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let t = this.prices.get(tripId)
                if (t) {
                    resolve(`Price found : ${t}`);
                }
                else
                    reject(`No price for trip : ${tripId}`)
            }, 2000);
        })

    }
}



let ts = new TripService();
ts.findByName("Paris").then(console.log).catch(console.log);

let ps = new PriceService()
ps.findPriceByTripId("nantes").then(console.log).catch(console.log);