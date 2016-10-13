
function helpKitodar(input) {

    let silver = 0;
    let gold = 0;
    let diamonds = 0;

    for (let line of input) {
        if (line.startsWith('mine')) {
            let mineData = line.trim().split(/^\s*-\s*/)[1];

            if(mineData) {
              let metal = mineData.split(/\s*:\s*/)[0].trim().toLowerCase();
              let quantity = Number(mineData.split(/\s*:\s*/)[1].trim());

              if (!isNaN(quantity)) {
                  if (metal === 'gold') {
                      gold += quantity;
                  } else if (metal === 'silver') {
                      silver += quantity;
                  } else if (metal === 'diamonds') {
                      diamonds += quantity;
                  }
              }
          }
       }
    }

    console.log(`*Silver: ${silver}`);
    console.log(`*Gold: ${gold}`);
    console.log(`*Diamonds: ${diamonds}`);
}

//helpKitodar(["mine bobovDol - gold: 10","mine medenRudnik - silver: 22","mine chernoMore - shrimps : 24","gold: 50"]);
//helpKitodar(["mine bobovdol - gold: 10","mine - diamonds: 5","mine colas - wood: 10","mine myMine - silver:  14","mine silver:14 - silver: 14"]);
helpKitodar(["mine mina - golD : 5","mine mina: gold: 5"]);
