
function populationTown(inputLines) {

    let total = new Map();

    for (let entry of inputLines) {
        let [town, population] = entry.split(/\s*<->\s*/);
        population = Number(population);

        if (!total.has(town)) {
            total.set(town, population);
        } else {
            total.set(town, total.get(town) + population);
        }
    }

    for (let [town, sum] of total) {
        console.log(`${town} : ${sum}`);
    }
}

populationTown(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);
