
function townToJson(towns) {

    let townsArr = [];
    for (let town of towns.slice(1)) {
        let components = town.split('|')
            .map(t => t.trim())
            .filter(t => t != '');

        let townObj = {Town: components[0], Latitude: Number(components[1]), Longitude: Number(components[2])}

        townsArr.push(townObj);
    }

    return JSON.stringify(townsArr);
}

console.log(townToJson([
  '| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'
]));
