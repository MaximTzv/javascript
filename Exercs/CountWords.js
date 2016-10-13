
function countWords(inputLines) {
    let text = inputLines.join('\n');
    let words = text.split(/[^A-Za-z0-9_]+/).filter(w => w != '');
    let wordCount = {};

    for (let w of words) {
        wordCount[w] ? wordCount[w]++ : wordCount[w] = 1;
    }

    return JSON.stringify(wordCount);
}

console.log(countWords(['JS and Node.js', 'JS again and again', 'Oh, JS?']));
