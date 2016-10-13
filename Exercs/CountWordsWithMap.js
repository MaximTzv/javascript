
function countWords(inputLines) {
    let words = inputLines.join('\n').toLowerCase()
                      .split(/[^A-Za-z0-9_]+/)
                      .filter(w => w != '');

    let wordCount = new Map();

    for (let w of words) {
        if (!wordCount.has(w)) {
           wordCount.set(w, 1)
        } else {
           wordCount.set(w, wordCount.get(w) + 1);
        }
    }

    let allWords = Array.from(wordCount.keys()).sort();

    for (let w of allWords) {
        console.log(`'${w}' -> ${wordCount.get(w)} times`);
    }
}

countWords(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);
