
function bunnyKill(input) {

    let bombBunnies = input.pop().split(' ');
    let matrix = [];

    let snowballDamage = 0;
    let snowballKills = 0;

    function isInMatrix(matrix, row, column) {
        if ((row >= 0 && row < matrix.length)
            && (column >= 0 && column <= matrix[row].length)) {
              return true;
        }

        return false;
    }

    function explode(matrix, bombRow, bombCol, bombDamage) {
        for (let row = bombRow - 1; row <= bombRow + 1; row++) {
            for (let col = bombCol - 1; col <= bombCol + 1; col++) {
                if (isInMatrix(matrix, row, col)) {
                    matrix[row][col] -= bombDamage;
                }
            }
        }

        return matrix;
    }

    for (let i = 0; i < input.length; i++) {
        let currentRow = input[i].split(' ').map(x => Number(x));
        matrix.push(currentRow);
    }

    for (let i = 0; i < bombBunnies.length; i++) {
        let currentBombBunny = bombBunnies[i].split(',').map(x => Number(x));
        let bombRow = currentBombBunny[0];
        let bombCol = currentBombBunny[1];

        let bombDmg = matrix[bombRow][bombCol];

        if (bombDmg > 0) {
          snowballDamage += bombDmg;
          snowballKills++;

          explode(matrix, bombRow, bombCol, bombDmg);
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            let currentCell = matrix[row][column];

            if (currentCell > 0) {
                snowballDamage += currentCell;
                snowballKills++;
            }
        }
    }

    console.log(snowballDamage);
    console.log(snowballKills);
}

bunnyKill(["10 10 10","10 10 10","10 10 10","0,0"]);
