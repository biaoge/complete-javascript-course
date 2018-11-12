class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, trees) {
        super(name, buildYear);
        this.area = area;   //km2
        this.trees = trees;
    }

    treeDensity() {
        const density = this.trees / this.area;
        console.log(this.trees, this.area);
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const map = new Map();
        map.set(1, 'tiny');
        map.set(2, 'small');
        map.set(3, 'normal');
        map.set(4, 'big');
        map.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${map.get(this.size)} street.`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('National Park', 1984, 2.9, 3541),
                    new Park('Oak Park', 1953, 0.4, 949)];
const allStreets = [new Street('Ocean Ave', 1999, 1.1, 4), new Street('Evergreen Street', 2008, 2.7, 2),
                     new Street('4th Ave', 2015, 0.8), new Street('Sunset Ave', 1982, 2.5, 5)];

function reportParks(p) {
    console.log(`==========Park Report==========`);
    // Density
    p.forEach(element => {
        element.treeDensity();   
    });
    // Average Age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages)
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

    // which park has more than 1000 trees
    const i = p.map(el => el.trees).findIndex(el => el > 1000);
    console.log(`${p[i].name} has more than 1000 trees`);

}

// calculate average age
function calc(arr) {
    // reduce a array to a singel value
    // 对array中的每个元素应用call back，最后赋到一个值。callback后的参数是最后被赋予到的值得初始值
    console.log(arr);
    const sum = arr.reduce((prev, cur, index) => {
       return (prev += cur);
    }, 0);


    return [ sum, sum / arr.length];
}

function reportStreets(s) {
    console.log(`==========Streets Report==========`);

    // total and average length of streets
    const [totalLen, avgLen] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLen} km, with an average of ${avgLen} km`);
    
    
    // classify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
