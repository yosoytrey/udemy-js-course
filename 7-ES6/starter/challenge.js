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
    // calculate the age of the park
    calculateParkAge() {
        let age = new Date().getFullYear() - this.yearBuilt;
        this.age = age;
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
    }
}
// create all parks for report
let allParks = [
    new Park('City Park', 1880, 3000, 330),
    new Park('Cheeseman Park', 1898, 1880, 81),
    new Park('Washington Park', 1899, 2305, 165)
];
// create all streets for report
let allStreets = [
    new Street('Market Street', 1887, 5, 2),
    new Street('Washington St', 1934, 13, 3),
    new Street('Colfax Ave.', 1886, 50, 5),
    new Street('Broadway Blvd', 1865, 20, 4)
];

// create park report
const parkReports = (parks) => {
    console.log('----Park Report----');
    console.log(`Our 3 parks....`);
    parks.forEach(park => park.treeDensity());
};

parkReports(allParks);
