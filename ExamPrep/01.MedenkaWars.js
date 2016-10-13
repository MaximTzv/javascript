
function medenkaOnslaught(input) {

    let vitkorAttackCount = 0;
    let naskorAttackCount = 0;
    let vitkorDealtDmg = 0;
    let naskorDealtDmg = 0;

    let vitkorPreviousDmg = Number.NEGATIVE_INFINITY;
    let naskorPreviousDmg = Number.NEGATIVE_INFINITY;

    for (let line of input) {
        let tokens = line.split(/\s+/);
        let numOfMedenkas = Number(tokens[0]);
        let medenkaType = tokens[1];

        if(medenkaType === 'white') {
          let medenkaDmg = numOfMedenkas * 60;

          if (medenkaDmg == vitkorPreviousDmg) {
            vitkorAttackCount++;
          } else {
            vitkorAttackCount = 1;
          }

          if (vitkorAttackCount == 2) {
            vitkorDealtDmg += medenkaDmg * 2.75;
            vitkorPreviousDmg = medenkaDmg * 2.75;
            vitkorAttackCount = 0;
          } else {
            vitkorDealtDmg += medenkaDmg;
            vitkorPreviousDmg = medenkaDmg;
          }

        } else {
          let medenkaDmg = numOfMedenkas * 60;

          if (medenkaDmg == naskorPreviousDmg) {
            naskorAttackCount++;
          } else {
            naskorAttackCount = 1;
          }

          if (naskorAttackCount == 5) {
            naskorDealtDmg += medenkaDmg * 4.5;
            naskorPreviousDmg = medenkaDmg * 4.5;
            naskorAttackCount = 1;
          } else {
            naskorDealtDmg += medenkaDmg;
            naskorPreviousDmg = medenkaDmg;
          }
        }
    }

    if (vitkorDealtDmg > naskorDealtDmg) {
      console.log("Winner - Vitkor");
      console.log("Damage - " + vitkorDealtDmg);
    } else {
      console.log("Winner - Naskor");
      console.log("Damage - " + naskorDealtDmg);
    }
}

medenkaOnslaught(["5 white medenkas","5 dark medenkas","4 white medenkas"]);
