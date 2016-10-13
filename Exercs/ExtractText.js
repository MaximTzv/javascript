
function extractTextInParent(text) {
    if (Array.isArray(text)) {
        text = text[0];
    }

    let result = [];
    let rightBracket = -1
    while (true) {
        let leftBracket = text.indexOf('(', rightBracket + 1);
        if (leftBracket == -1) {
            break;
        }

        rightBracket = text.indexOf(')', leftBracket + 1);
        if (rightBracket == -1) {
            break;
        }

        result.push(text.substring(leftBracket + 1, rightBracket));
    }

    return result.join(', ');
}

console.log(extractTextInParent(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']));
