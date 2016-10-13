
function findOccurence([str, text]) {

    let count = 0;

    let p = -1;
    while (true) {
        p = text.indexOf(str, p + 1);
        if (p == -1) {
            return count;
        } else {
            count++;
        }
    }
}

console.log(findOccurence(['roses', 'I can smell the roses, can you smell the roses']));
