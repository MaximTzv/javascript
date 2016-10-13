
function cityMarketIncome(sales) {

    let townsWithProduction = new Map();

    for (let sale of sales) {
        let [town, product, quantityPrice] = sale.split(/\s*->\s*/);
        let [quantity, price] = quantityPrice.split(/\s*:\s*/);

        if (!townsWithProduction.has(town))
            townsWithProduction.set(town, new Map());

        let income = quantity * price;
        let oldIncome = townsWithProduction.get(town).get(product);

        if (oldIncome)
          oldIncome += income;

        townsWithProduction.get(town).set(product, income);

    }

    for (let [town, products] of townsWithProduction) {
        console.log(`Town - ${town}`);
        for (let [product, inc] of products) {
            console.log(`$$$${product} : ${inc}`);
        }
    }
}

cityMarketIncome(["Sofia -> Laptops HP -> 200 : 2000","Sofia -> Raspberry -> 200000 : 1500","Sofia -> Audi Q7 -> 200 : 100000","Montana -> Portokals -> 200000 : 1","Montana -> Qgodas -> 20000 : 0.2","Montana -> Chereshas -> 1000 : 0.3"]);
