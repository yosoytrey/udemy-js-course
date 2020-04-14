/*jshint esversion: 6 */
/////////////////////////////////
// CODING CHALLENGE

// create superclass Element
class Element {
    constructor(name, yearBuilt) {
        this.name = name;
        this.yearBuilt = yearBuilt;
    }
}
// extend class Element with subclass Park
class Park extends Element {
    constructor(name, yearBuilt, trees, area) {
        super(name, yearBuilt);
        this.trees = trees;
        this.area = area; //acres
    }
    // calculate the tree density of the park
    treeDensity() {
        let density = (this.trees / this.area); // acres
        this.density = density.toFixed(2);
        console.log(`${this.name} has a tree density of ${this.density} trees per acre.`);
    }
}
// extend class Element with subclass Street
class Street extends Element {
    constructor(name, yearBuilt, length, size = 'normal') {
        super(name, yearBuilt);
        this.length = length;
        this.size = size;
    }
    // hashmap for the different size of streets
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.yearBuilt}, is a ${classification.get(this.size)} street.`);
    }
}
// create all parks
let allParks = [
    new Park('City Park', 1880, 3000, 330),
    new Park('Cheeseman Park', 1898, 1880, 81),
    new Park('Washington Park', 1899, 2305, 165)
];
// create all streets
let allStreets = [
    new Street('Market Street', 1887, 5, 2),
    new Street('Washington St', 1934, 13, 3),
    new Street('Colfax Ave.', 1886, 50, 5),
    new Street('Broadway Blvd', 1865, 20, 4)
];

// create park report
const parkReports = (parks) => {
    console.log('-----PARK REPORT-----');

    // display the tree density for each park.
    parks.forEach(park => park.treeDensity());

    // calculate the average age of the parks
    const ages = parks.map(park => new Date().getFullYear() - park.yearBuilt);
    const [totalAge, avgAge] = calc(ages);

    // display the average age of the parks.
    console.log(`Our ${parks.length} parks have an average of ${avgAge.toFixed(2)} years`);

    // display the parks that have more than 2000 trees
    parks.map(park => {
        if (park.trees >= 2000) {
            console.log(`${park.name} has more than 2000 trees.`);
        }
    });
};

// create street report.
const streetReports = (streets) => {
    console.log('\n');
    console.log('-----STREET REPORT-----');

    // calculate the total length and average length of the streets.
    const lengths = streets.map(street => street.length);
    const [totalLength, avgLength] = calc(lengths);

    // display the total length and average length of the streets.
    console.log(`Our ${streets.length} streets have a total length of ${totalLength.toFixed(2)} miles, with an average of ${avgLength.toFixed(2)} miles.`);

    // display the street name, year it was built and the size of the street.
    streets.forEach(street => street.classifyStreet());
};

// calculation function...returns sum and average of numbers in array
const calc = (arr) => {
    const sum = arr.reduce((prev, cur) => prev + cur);
    return [sum, sum / arr.length];
};

// generate reports
parkReports(allParks);
streetReports(allStreets);
